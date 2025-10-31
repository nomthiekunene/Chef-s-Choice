import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg bg-white text-black">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
        <Link href="/shop">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-950 transition-colors">
            Buy Now
          </button>
        </Link>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;