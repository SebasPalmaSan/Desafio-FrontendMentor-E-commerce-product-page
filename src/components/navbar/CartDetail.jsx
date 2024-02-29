import { useContext } from 'react';
import {CartContext} from '@/context/useCart'

import DeleteIcon from '@/components/icons/DeleteIcon';


const Cart = () => {

    const {cartItems, deleteItems} = useContext(CartContext)
    
    return (
        // <div className='flex gap-4'>
            <section className='absolute top-[125%] left-0 z-10 w-full md:max-w-lg md:left-full md:-translate-x-full md:top-full'>
                <div className='mx-2 rounded-md bg-white'>
                    <h3 className='px-4 py-6 font-bold text-lg'>Cart</h3>
                    <hr />
                    {cartItems.length === 0 && (
                        <p className='py-20 text-center'>Your cart is empty</p>
                    )}
                    {
                        cartItems.map((item) => (
                            <article 
                                key={item.id} 
                                className='grid gap-4 grid-cols-[1fr_4fr_1fr] px-4 py-6 items-center'
                            >
                                <img 
                                    src={item.img} 
                                    alt="" 
                                    className='rounded-md'
                                />
                                <div>
                                    <h6>{item.title}</h6>
                                        <p>
                                            <span>${item.discountPrice} x {item.quantity}</span> <span className='font-bold'>${(item.discountPrice * item.quantity).toFixed(2)}</span>
                                        </p>
                                </div>
                                    <button className='ml-auto'>
                                        <DeleteIcon 
                                        className='hover:fill-orange-primary' 
                                        onClick={() => deleteItems(item.id)}
                                        />
                                    </button>
                            </article>
                        ))
                    }
                    {cartItems.length !== 0 && (
                        <div className='px-6 pb-6'>
                            <button className="py-4 w-full font-bold bg-orange-primary hover:bg-orange-600 transition-all text-white rounded-md">
                                Checkout
                            </button>
                        </div>
                    )}
                                    
                </div>
                                    
            </section>
        //</div>
    );
};

export default Cart;
