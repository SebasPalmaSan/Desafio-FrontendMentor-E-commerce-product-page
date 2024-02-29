import ImgSmall from '@/assets/images/image-product-1-thumbnail.jpg'
import DeleteIcon from '@/components/icons/DeleteIcon';

const Cart = () => {
    
    return (
        // <div className='flex gap-4'>
            <section className='absolute top-[125%] left-0 z-10 w-full md:max-w-lg md:left-full md:-translate-x-full md:top-full'>
                <div className='mx-2 rounded-md bg-white'>
                    <h3 className='px-4 py-6 font-bold text-lg'>Cart</h3>
                    <hr />
                        <div className='grid gap-4 grid-cols-[1fr_4fr_1fr] px-4 py-6 items-center'>
                            <img 
                                src={ImgSmall} 
                                alt="" 
                                className='rounded-md'
                            />
                            <div>
                                <h6>Fall Limited edition Sneakers</h6>
                                    <p>
                                        <span>$125.00 x 3</span> <span className='font-bold'>$375.00</span>
                                    </p>
                            </div>
                                <button className='ml-auto'>
                                    <DeleteIcon className='hover:fill-orange-primary' />
                                </button>
                        </div>
                        <div className='px-6 pb-6'>
                            <button className="py-4 w-full font-bold bg-orange-primary hover:bg-orange-600 transition-all text-white rounded-md">
                                Checkout
                            </button>
                        </div>
                                            
                </div>
                                    
            </section>
        //</div>
    );
};

export default Cart;
