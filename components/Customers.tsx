import React from 'react'
import Link from 'next/link'

const Customers = () => {
  
  const sampleReviews = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/dwffjbibo/image/upload/v1761657316/cld-sample-4.jpg',
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Chef\'s Choice has completely transformed my cooking experience. The quality is outstanding!',
      date: '2024-01-15'
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/dwffjbibo/image/upload/v1756801359/samples/food/fish-vegetables.jpg',
      name: 'Mike Chen',
      rating: 5,
      comment: 'Amazing products and excellent customer service. Highly recommend to all cooking enthusiasts.',
      date: '2024-01-10'
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/dwffjbibo/image/upload/v1761657316/samples/upscale-face-1.jpg',
      name: 'Emily Davis',
      rating: 4,
      comment: 'Great selection of kitchen tools. Everything I\'ve purchased has exceeded my expectations.',
      date: '2024-01-08'
    }
  ];

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className='flex flex-col bg-white p-20 mt-10 gap-6 text-black'>
       <h1 className='text-4xl'>What Our Customers Say</h1>
       <p className='text-lg'>Our customers love our products, and we&apos;re proud to share their experiences. Read on to see how Chef&apos;s Choice has transformed their cooking.</p>

       
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
         {sampleReviews.map((review) => (
           <div key={review.id} className='bg-gray-100 p-4 rounded-lg'>
             <div className='flex items-center gap-2 mb-2'>
               <span className='font-semibold'>{review.name}</span>
               <span className='text-yellow-500'>{renderStars(review.rating)}</span>
             </div>
             <p className='text-sm text-gray-600 mb-2'>{review.comment}</p>
             <p className='text-xs text-gray-500'>{new Date(review.date).toLocaleDateString()}</p>
           </div>
         ))}
       </div>

       {/* Button to Reviews Page */}
       <div className='mt-8 text-center'>
         <Link href='/reviews'>
           <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold'>
             View All Reviews &amp; Leave Your Review
           </button>
         </Link>
       </div>
    </div>
  )
}

export default Customers
