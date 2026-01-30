/**
 * Rate Limiter - 防止 API 滥用
 *
 * 使用内存存储（适合开发/小型应用）
 * 生产环境建议使用 Redis 版本
 */

interface RateLimitInfo {
  count: number;
  resetTime: number;
}

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetTime: number;
}

// 存储每个 IP 的请求记录
const rateLimitStore = new Map<string, RateLimitInfo>();

// 清理过期记录的定时器
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 60000); // 每分钟清理一次

/**
 * 检查请求是否超过速率限制
 *
 * @param identifier - 唯一标识符（通常是 IP 地址）
 * @param limit - 时间窗口内的最大请求数
 * @param windowMs - 时间窗口（毫秒）
 * @returns RateLimitResult
 */
export function rateLimit(
  identifier: string,
  limit: number = 10,           // 默认：每分钟最多 10 次请求
  windowMs: number = 60000      // 默认：1 分钟时间窗口
): RateLimitResult {
  const now = Date.now();

  // 获取或初始化该标识符的记录
  let record = rateLimitStore.get(identifier);

  if (!record || now > record.resetTime) {
    // 创建新的时间窗口
    record = {
      count: 1,
      resetTime: now + windowMs,
    };
    rateLimitStore.set(identifier, record);
  } else {
    // 在当前时间窗口内增加计数
    record.count++;
  }

  const remaining = Math.max(0, limit - record.count);
  const success = record.count <= limit;

  return {
    success,
    limit,
    remaining,
    resetTime: record.resetTime,
  };
}

/**
 * 获取客户端 IP 地址
 */
export function getClientIP(request: Request): string {
  // 尝试从各种头部获取真实 IP
  const headers = request.headers;

  const forwardedFor = headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIP = headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }

  const cfConnectingIP = headers.get('cf-connecting-ip');
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  // 回退到默认值
  return 'unknown';
}

/**
 * 创建 Next.js API Route 用的 Rate Limit 中间件
 */
export interface RateLimitConfig {
  limit?: number;
  windowMs?: number;
  skipSuccessfulRequests?: boolean;  // 是否只计算失败的请求
  skipFailedRequests?: boolean;      // 是否只计算成功的请求
}

export function createRateLimiter(config: RateLimitConfig = {}) {
  const {
    limit = 10,
    windowMs = 60000,
    skipSuccessfulRequests = false,
    skipFailedRequests = false,
  } = config;

  return {
    check: (identifier: string) => rateLimit(identifier, limit, windowMs),
    limit,
    windowMs,
  };
}
