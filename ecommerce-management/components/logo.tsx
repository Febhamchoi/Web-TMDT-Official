import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  href?: string;
}

export function Logo({ size = 'md', showSubtitle = false, href = '/' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl md:text-3xl',
    lg: 'text-4xl md:text-5xl',
  };

  const iconSizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-9 h-9',
  };

  // Stylized pen/rocket icon as SVG
  const RocketIcon = () => (
    <svg
      viewBox="0 0 24 24"
      className={`${iconSizeClasses[size]} stroke-black fill-none stroke-2.5`}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Rocket/Pen nib */}
      <path d="M12 2 L14 6 L10 6 Z" fill="currentColor" />
      {/* Rocket body/pen shaft */}
      <line x1="12" y1="6" x2="12" y2="20" />
      {/* Left wing */}
      <path d="M8 15 L10 18 L10 12" />
      {/* Right wing */}
      <path d="M16 15 L14 18 L14 12" />
      {/* Bottom detail */}
      <circle cx="12" cy="21" r="1" fill="currentColor" />
    </svg>
  );

  const content = (
    <div className="flex items-center gap-2.5 group">
      {/* Rocket Icon */}
      <div className="flex items-center justify-center">
        <div className="transition-transform duration-300 group-hover:scale-110">
          <RocketIcon />
        </div>
      </div>

      {/* Logo Text */}
      <div className="flex flex-col items-start">
        <h1
          className={`${sizeClasses[size]} font-black tracking-tight text-black group-hover:opacity-75 transition-opacity leading-tight`}
        >
          TORANO
        </h1>
        {showSubtitle && (
          <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">
            Premium Fashion
          </p>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block hover:opacity-75 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
}
