 import { ReviewCard } from '../components';
import { reviews } from '../constants';

const CustomerReviews = () => {
  return (
    <section className='max-container py-16'>
      <h3 className='font-palanquin text-center text-4xl font-bold mb-6'>
        What Our
        <span className='text-coral-red'> Customers </span>
        Say?
      </h3>
      <p className='text-center max-w-lg mx-auto text-gray-600'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className='mt-14 flex flex-wrap justify-center gap-8'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
