import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dwffjbibo/image/upload/v1761830788/pexels-sternsteiger-stahlwaren-526336403-16457297_ifmnna.jpg', 
    title: 'Premium Chef Knife',
    price: '$49.99',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dwffjbibo/image/upload/v1761831263/pexels-theo-cold-814199886-34005916_sig03s.jpg', 
    title: 'Non-Stick Frying Pan',
    price: '$29.99',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dwffjbibo/image/upload/v1761831435/pexels-david-yohanes-97693-1450907_saqwtc.jpg',
    title: 'Stainless Steel Mixing Bowl Set',
    price: '$39.99',
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dwffjbibo/image/upload/v1761831627/pexels-delot-19599327_hdbtzx.jpg',
    title: 'Electric Blender',
    price: '$79.99',
  },
];

const Feature = () => {
  return (
    <div className='flex flex-col gap-6 p-20 mt-10'>
      <h1 className='text-4xl'>Featured Kitchenware</h1>
      <p className='text-lg'>Explore our top-rated kitchenware products that our customers love the most. Each item is selected for its quality, functionality, and style.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
