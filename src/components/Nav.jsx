 import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className='bg-white border-b border-gray-200 py-4'>
      <div className='max-container flex justify-between items-center'>
        <a href='/' className='flex items-center'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='hidden lg:flex gap-8'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='text-gray-600 hover:text-gray-900 font-montserrat text-lg'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden lg:flex items-center gap-6 text-lg font-medium font-montserrat'>
          <a href='/' className='text-gray-600 hover:text-gray-900'>
            Sign in
          </a>
          <span className='text-gray-400'>/</span>
          <a href='/' className='text-coral-red hover:text-coral-dark'>
            Explore now
          </a>
        </div>
        <div className='lg:hidden'>
          <img
            src={hamburger}
            alt='hamburger icon'
            width={25}
            height={25}
            className='cursor-pointer'
          />
        </div>
      </div>
    </header>
  );
};

export default Nav;
