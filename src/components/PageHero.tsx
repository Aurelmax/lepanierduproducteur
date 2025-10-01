interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <div className='relative w-full h-64 overflow-hidden'>
      {/* Image de fond avec overlay */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url('${backgroundImage || '/legumes.webp'}')`,
        }}
      />
      <div className='absolute inset-0 bg-gradient-to-br from-primary-600/40 to-primary-800/50'></div>
      <div className='absolute inset-0 bg-black/10'></div>

      {/* Contenu centré */}
      <div className='relative z-10 h-full flex items-center justify-center'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-3 text-white drop-shadow-lg'>
            {title}
          </h1>
          <p className='text-base md:text-lg text-primary-100 max-w-2xl mx-auto drop-shadow-md'>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
