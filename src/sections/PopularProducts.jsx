 import { products } from '../constants';
import { PopularProductCard } from '../components';

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12 py-16'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'>Popular</span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Elevate your style with our sought-after selections, offering top-notch quality, unparalleled comfort, and timeless design. Explore a world of fashion that combines luxury with incredible value.
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 sm:gap-8'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
