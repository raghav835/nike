 
const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-xl overflow-hidden shadow-lg p-6 bg-white text-gray-800'>
      <div className='w-12 h-12 flex justify-center items-center bg-coral-red rounded-full mb-4'>
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className='mt-4 font-palanquin text-2xl leading-tight font-bold'>
        {label}
      </h3>
      <p className='mt-3 font-montserrat text-base leading-normal text-gray-600'>
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
