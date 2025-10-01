interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40',
    xxl: 'w-56 h-56',
    xxxl: 'w-64 h-64',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
    xxl: 'text-5xl',
    xxxl: 'text-6xl',
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizeClasses[size]} flex items-center justify-center`}>
        <img
          src='/logo.png'
          alt='Le Panier du Producteur'
          className='w-full h-full object-contain'
        />
      </div>
      {showText && (
        <div>
          <h1 className={`${textSizes[size]} font-display font-bold text-accent-dark`}>
            Le Panier du Producteur
          </h1>
          {size !== 'sm' && <p className='text-sm text-gray-600'>Fruits et légumes frais</p>}
        </div>
      )}
    </div>
  );
}
