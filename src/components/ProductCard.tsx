interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image?: string;
  category: 'legumes' | 'fruits' | 'autres';
}

export default function ProductCard({
  title,
  description,
  price,
  image,
  category,
}: ProductCardProps) {
  const categoryColors = {
    legumes: 'bg-primary-100 border-primary-300 text-primary-800',
    fruits: 'bg-harvest-100 border-harvest-300 text-harvest-800',
    autres: 'bg-earth-100 border-earth-300 text-earth-800',
  };

  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'>
      {image && (
        <div className='h-48 bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center'>
          <span className='text-6xl'>🥬</span>
        </div>
      )}
      <div className='p-6'>
        <div
          className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${categoryColors[category]}`}
        >
          {category === 'legumes' ? 'Légumes' : category === 'fruits' ? 'Fruits' : 'Autres'}
        </div>
        <h3 className='text-xl font-display font-bold text-accent-dark mb-2'>{title}</h3>
        <p className='text-gray-600 mb-4'>{description}</p>
        <div className='flex items-center justify-between'>
          <span className='text-2xl font-bold text-primary-600'>{price}</span>
          <button className='bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors duration-200'>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}
