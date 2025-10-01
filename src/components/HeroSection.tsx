interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export default function HeroSection({ title, subtitle, backgroundImage }: HeroSectionProps) {
  return (
    <div className='relative w-full h-80 overflow-hidden'>
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
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white drop-shadow-lg'>
            {title}
          </h1>
          <p className='text-base md:text-lg lg:text-xl text-primary-100 mb-6 max-w-3xl mx-auto drop-shadow-md'>
            {subtitle}
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-harvest-500 hover:bg-harvest-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg'>
              Découvrir nos produits
            </button>
            <button className='bg-white/90 hover:bg-white text-primary-600 px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg'>
              Commander maintenant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
