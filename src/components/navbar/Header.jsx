//Importacion Logo
import LogoSneakers from '@/assets/images/logo.svg';
//Importacion Avatar
import Avatar from '@/assets/images/image-avatar.png';
// Importacion de botones
import MenuIcon from '@/components/icons/MenuIcon';
import CartIcon from '@/components/icons/CartIcon';
import CloseIcon from '../icons/CloseIcon';
import { useState } from 'react';

const Header = () => {

    const [navClass, setNavClass] = useState('hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0');

    const handleOpenMenu = () => {
        setNavClass("absolute font-bold top-0 left-0 h-full p-8 gap-y-5 bg-white flex flex-col md:flex md:mr-auto md:flex-row md:gap-4 w-2/3 md:static md:p-0");
    };
    
    const handleCloseMenu = () => {
        setNavClass("hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0");
    };

    return (
        <header className='container mx-auto flex items-center px-4 gap-8 bg-gray-200 py-8'>
            <button className='md:hidden' onClick={handleOpenMenu}>
                <MenuIcon />
            </button>
                <img 
                    src={LogoSneakers} 
                    alt="logo" 
                    className='mr-auto md:mr-0 mb-1' 
                />
                <nav className={navClass}>
                    <button className='mb-12 md:hidden' onClick={handleCloseMenu}>
                        <CloseIcon />
                    </button>
                    <a href="">Collections</a>
                    <a href="">Men</a>
                    <a href="">Women</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </nav>
                <div className='flex gap-4'>
                    <button>
                        <CartIcon />
                    </button>
                    <img src={Avatar} alt="" className='w-12' />
                </div>
            </header>
    );
};

export default Header;