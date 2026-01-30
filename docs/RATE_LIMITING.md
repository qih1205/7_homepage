# Rate Limiting 配置说明

## 概述

项目已集成 Rate Limiting（速率限制）功能，防止 API 滥用和控制成本。

## 默认配置

在 [app/api/chat/route.ts](../app/api/chat/route.ts) 中：

```typescript
const rateLimitResult = rateLimit(ip, 10, 60000);
//                                    ↑   ↑     ↑
//                                    |   |     |
//                                  IP  次数  时间窗口(毫秒)
```

**默认值：**
- 每个每 IP 地址每分钟最多 **10 次请求**
- 超过后返回 **429 (Too Many Requests)** 状态码

## 如何调整限制

### 1. 修改请求次数限制

在 [app/api/chat/route.ts:26](../app/api/chat/route.ts#L26) 修改：

```typescript
// 更宽松：每分钟 20 次
const rateLimitResult = rateLimit(ip, 20, 60000);

// 更严格：每分钟 5 次
const rateLimitResult = rateLimit(ip, 5, 60000);
```

### 2. 修改时间窗口

```typescript
// 每小时最多 30 次
const rateLimitResult = rateLimit(ip, 30, 3600000); // 3600000ms = 1小时

// 每 10 秒最多 2 次
const rateLimitResult = rateLimit(ip, 2, 10000);
```

### 3. 不同用户不同限制

根据需求实现分级限制：

```typescript
// 示例：VIP 用户更高限制
const isVIP = await checkVIPUser(ip);
const limit = isVIP ? 100 : 10;
const rateLimitResult = rateLimit(ip, limit, 60000);
```

## 响应头说明

当请求成功时，响应中包含：

```
X-RateLimit-Limit: 10          # 时间窗口内的最大请求数
X-RateLimit-Remaining: 7       # 剩余可用请求数
X-RateLimit-Reset: 2024-01-30T12:34:56.789Z  # 限制重置时间
```

当超过限制时（429 状态码）：

```
Retry-After: 45  # 多少秒后可以重试
```

## 生产环境建议

### 使用 Redis（多实例部署）

当前版本使用内存存储，适合单实例部署。如果使用多个服务器实例，需要使用 Redis：

1. 安装依赖：
```bash
npm install ioredis
```

2. 创建 Redis 版本：

```typescript
// lib/rate-limit-redis.ts
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export async function rateLimitRedis(
  identifier: string,
  limit: number = 10,
  windowMs: number = 60000
) {
  const key = `ratelimit:${identifier}`;
  const now = Date.now();
  const windowStart = now - windowMs;

  // 使用 Redis Sorted Set 实现滑动窗口
  const multi = redis.multi();
  multi.zremrangebyscore(key, 0, windowStart);
  multi.zadd(key, now, `${now}:${Math.random()}`);
  multi.zcard(key);
  multi.pexpire(key, windowMs);

  const results = await multi.exec();
  const count = results[2][1] as number;

  return {
    success: count <= limit,
    limit,
    remaining: Math.max(0, limit - count),
    resetTime: now + windowMs,
  };
}
```

### 环境变量配置

在 `.env.local` 中添加：

```bash
# Rate Limiting 配置
RATE_LIMIT_ENABLED=true
RATE_LIMIT_REQUESTS_PER_MINUTE=10
```

## 监控和日志

### 添加监控

```typescript
// 记录被限制的请求
if (!rateLimitResult.success) {
  console.warn(`Rate limit exceeded for IP: ${ip}`);
  // 发送到监控服务（如 Sentry、DataDog 等）
}
```

### 使用分析服务

推荐的服务：
- **Upstash Redis** - 提供 Redis API 和分析
- **Vercel Analytics** - 查看请求模式
- **Sentry** - 错误和性能监控

## 常见问题

### Q: 用户看到"Too Many Requests"怎么办？

A: 前端需要处理 429 错误：

```typescript
// components/AIChat.tsx
if (!response.ok) {
  if (response.status === 429) {
    const data = await response.json();
    const retryAfter = data.retryAfter;
    // 显示友好的错误消息
    setMessages(prev => [...prev, {
      role: 'assistant',
      content: `请求过于频繁，请 ${retryAfter} 秒后再试。`
    }]);
  }
}
```

### Q: 如何测试 Rate Limiting？

A: 使用快速连续请求：

```bash
# 使用 curl 测试
for i in {1..15}; do
  curl -X POST http://localhost:3000/api/chat \
    -H "Content-Type: application/json" \
    -d '{"messages":[{"role":"user","content":"test"}]}'
  echo "\n--- Request $i ---"
done
```

### Q: 如何绕过 Rate Limiting（开发环境）？

A: 可以添加开发模式检查：

```typescript
if (process.env.NODE_ENV === 'development') {
  // 开发环境跳过 rate limiting
} else {
  // 生产环境检查
  const rateLimitResult = rateLimit(ip, 10, 60000);
  if (!rateLimitResult.success) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }
}
```

## 安全建议

1. ✅ **不要在前端暴露限制参数** - 保持后端配置
2. ✅ **记录异常请求模式** - 检测攻击行为
3. ✅ **设置合理的限制** - 平衡用户体验和成本控制
4. ✅ **结合其他安全措施** - 如 reCAPTCHA、用户认证等

## 相关文件

- [lib/rate-limit.ts](../lib/rate-limit.ts) - Rate Limiting 工具库
- [app/api/chat/route.ts](../app/api/chat/route.ts) - API 路由集成示例
