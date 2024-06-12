import Logo from './Logo';
import { HiBars3BottomRight, HiXMark } from 'react-icons/hi2';
import { useState } from 'react';
import MenuToggle from './MenuToggle';
import Menu from './Menu';

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleMenuVisible = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className='p-4 max-h-20 border-b'>
      <nav>
        <div className='container mx-auto'>
          <div className='flex items-center justify-between'>
            <Logo isMenuVisible={isMenuVisible} />

            <MenuToggle handleClick={handleMenuVisible} className={`${isMenuVisible && 'relative z-10 text-white'} text-red-500 font-bold text-2xl border p-2 rounded-lg`}>
              {isMenuVisible ? <HiXMark /> : <HiBars3BottomRight />}
            </MenuToggle>
          </div>
        </div>
        <Menu isVisible={isMenuVisible} />
      </nav>
    </header>
  );
}

export default Header;
