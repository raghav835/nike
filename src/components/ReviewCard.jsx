import { star } from '../assets/icons';

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex flex-col items-center bg-white rounded-lg shadow-md p-6 text-black'>
      <img
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-24 h-24 mb-4'
      />
      <p className='text-lg max-w-md text-center text-gray-700'>{feedback}</p>
      <div className='flex items-center mt-3'>
        <img
          src={star}
          width={24}
          height={24}
          alt='rating star'
          className='object-contain mr-2 text-yellow-500'
        />
        <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
      </div>
      <h3 className='mt-2 text-2xl font-palanquin font-bold text-gray-800'>
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
