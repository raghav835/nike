 import { star } from '../assets/icons';

const PopularProductCard = ({ imgURL, name, price,   }) => {
  return (
    <div className='max-sm:w-full'>
      <div className='relative overflow-hidden bg-white rounded-md shadow-lg'>
        <img
          src={imgURL}
          alt={name}
          className='w-full h-64 object-cover'
        />
        <div className='absolute top-2 left-2 flex items-center gap-2'>
          <img
            src={star}
            alt='rating icon'
            className='w-6 h-6 text-yellow-500'
          />
          <p className='font-montserrat text-lg text-slate-gray'>
            (4.5)
          </p>
        </div>
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-semibold font-palanquin text-gray-800'>
          {name}
        </h3>
        <p className='mt-2 text-lg font-semibold font-montserrat text-coral-red'>
          {price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
