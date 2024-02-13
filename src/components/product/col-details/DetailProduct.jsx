import CartIcon from '@/components/icons/CartIcon';

const DetailProduct = () => {
    return (
        <section className="container mx-auto px-4 md:px-0">

            {/* Descriptions and Titles */}
            <p className="mb-4 text-orange-primary font-bold uppercase">Sneaker Company</p>
                <h2 className="mb-4 text-3xl font-bold tracking-wide">Fall Limited Edition Sneakers</h2>
                    <p className="text-dark-grayish-blue mb-4">
                        These low-profile sneakers are your 
                        perfect casual wear companion. Featuring a 
                        durable rubber outer sole, they’ll 
                        withstand everything the weather can offer.
                    </p>

                    {/* Price */}
                    <div className="gap-4 grid grid-cols-3 font-bold items-center mb-5 md:gap-1 md:grid-cols-[1fr_3fr]">
                        <span className="text-3xl">$125.00</span>
                        <span className="mr-auto rounded-md p-1 px-2 bg-pale-orange text-orange-primary">50%</span>
                        <span className="text-right text-grayish-blue text-lg line-through md:col-span-2 md:text-left">$250.00</span>
                    </div>
                    
                    {/* Bottoms */}
                    <div className="grid grid-cols-3 font-bold gap-4 md:grid-cols-[1fr_1.7fr]">
                        <div className="col-span-3 flex items-center justify-between pb-3 py-2 px-5 rounded-md bg-gray-200 md:col-span-1">
                            <button className='text-3xl text-orange-primary hover:text-orange-600'>-</button>
                            <span className='text-xl'>0</span>
                            <button className='text-3xl text-orange-primary hover:text-orange-600'>+</button>
                        </div>
                        <button className="col-span-3 flex gap-x-3 items-center justify-center rounded-md bg-orange-primary text-white hover:bg-orange-600 transition-all py-3 md:col-span-1">
                            <CartIcon fill='#fff' />
                            <span>Add to cart</span>
                        </button>
                    </div>
        </section>
    );
};

export default DetailProduct;