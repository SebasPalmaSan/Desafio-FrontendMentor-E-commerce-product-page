//Importacion Logo
import LogoSneakers from '@/assets/images/logo.svg';
//Importación Cart
import CartDetail from '@/components/navbar/CartDetail'
// Importacion de botones
import MenuIcon from '@/components/icons/MenuIcon';
//import CartIcon from '@/components/icons/CartIcon';
import CloseIcon from '@/components/icons/CloseIcon';
//import DeleteIcon from '@/components/icons/DeleteIcon';

import { useContext, useState } from 'react';
import { CartContext } from '@/context/useCart';
import NavLinkHeader from '@/components/navbar/NavLinkHeader';
import CartIcon from '../icons/CartIcon';
import Avatar from '@/assets/images/image-avatar.png';

const Header = () => {

    const {totalQuantity} = useContext(CartContext)

    const [ isOpenMenu, setIsOpenMenu ] = useState(false);

    const [ openCart, setOpenCart ] = useState(false);

    const openClass = 'absolute top-0 left-0 z-10 flex h-full w-3/4 flex-col gap-y-[21px] bg-white p-8'

    const closeClass = 'hidden'

    const handleOpenMenu = () => {
        setIsOpenMenu(true);
    };
    
    const handleCloseMenu = () => {
        setIsOpenMenu(false);
    };

    return (
        <>
            <header className='relative container mx-auto flex items-center gap-8 p-4 md:p-0'>
                <button className='md:hidden' onClick={handleOpenMenu}>
                    <MenuIcon />
                </button>
                    <img 
                        src={LogoSneakers} 
                        alt="logo" 
                        className='mr-auto h-5 md:mr-0 mb-1' 
                    />
                    <nav className={`font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 ${
                        isOpenMenu ? openClass : closeClass
                    }`}>
                        <button className='mb-12 md:hidden' onClick={handleCloseMenu}>
                            <CloseIcon />
                        </button>
                        <NavLinkHeader text={'Collections'} />
                        <NavLinkHeader text={'Men'} />
                        <NavLinkHeader text={'Women'} />
                        <NavLinkHeader text={'About'} />
                        <NavLinkHeader text={'Contact'} />
            
                    </nav>
                    <button onClick={() => setOpenCart(!openCart)} className='relative'>
                        <CartIcon />
                        <span className='absolute top-0 right-0 translate-x-1 bg-orange-primary px-1 text-xs font-bold text-white rounded-full'>{totalQuantity}</span>
                    </button>
                    <img src={Avatar} alt="" className='w-12' />
                    {
                        openCart && <CartDetail />
                    }
                    
                    
            </header>
          
    
        </>
        
    );
};

export default Header;