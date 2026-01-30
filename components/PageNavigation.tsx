interface PageNavigationProps {
  currentPage: 'personal-info' | 'research' | 'events';
}

const pages = [
  { key: 'personal-info', label: 'Personal INFO', icon: '🎓', href: '/personal-info' },
  { key: 'research', label: 'Research', icon: '🤖', href: '/research' },
  { key: 'events', label: 'Events', icon: '💻', href: '/events' },
] as const;

export const PageNavigation = ({ currentPage }: PageNavigationProps) => {
  return (
    <div className="flex items-center gap-3 mb-6">
      {pages.map((page) => {
        const isActive = page.key === currentPage;
        return (
          <a
            key={page.key}
            href={page.href}
            className={`
              min-w-[140px] px-4 py-2 rounded-lg backdrop-blur-md border transition-all flex items-center justify-center gap-2
              ${isActive
                ? 'bg-white/30 border-white/50 text-white scale-105'
                : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20 hover:border-white/30 hover:text-white/90'
              }
            `}
          >
            <span className="text-lg leading-none">{page.icon}</span>
            <span className="text-sm font-medium whitespace-nowrap">{page.label}</span>
          </a>
        );
      })}
      <a
        href="/"
        className="min-w-[140px] px-4 py-2 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md text-white/70 hover:bg-white/20 hover:border-white/30 hover:text-white/90 transition-all flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span className="text-sm font-medium">Home</span>
      </a>
    </div>
  );
};
