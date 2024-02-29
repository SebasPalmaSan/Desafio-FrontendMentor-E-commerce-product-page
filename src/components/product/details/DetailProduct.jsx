import CartIcon from '@/components/icons/CartIcon';
import { CartContext } from '@/context/useCart';
import { useContext, useState } from 'react';

const DetailProduct = ({ objectProduct }) => {
    const { addItems } = useContext(CartContext);
    const [count, setCount] = useState(0);

    const decrementCount = () => {
        if (count === 0) return;
        setCount(count - 1);
    };

    const incrementCount = () => {
        setCount(count + 1);
    };

    const addToCart = () => {
        addItems({
            img: objectProduct.imagesSmall[0],
            id: objectProduct.id,
            discountPrice: (objectProduct.price * (1 - objectProduct.discount)).toFixed(2),
            title: objectProduct.title,
            quantity: count === 0 ? 1 : count
        });
        setCount(0);
    };

    const formattedPrice = (price) => parseFloat(price).toFixed(2);

    return (
        <section className="container mx-auto px-4 md:px-0">
            {/* Descriptions and Titles */}
            <p className="mb-4 text-orange-primary font-bold uppercase">{objectProduct.subtitle}</p>
            <h2 className="mb-4 text-3xl font-bold tracking-wide">{objectProduct.title}</h2>
            <p className="text-dark-grayish-blue mb-4">{objectProduct.description}</p>

            {/* Price */}
            <div className="gap-4 grid grid-cols-3 font-bold items-center mb-5 md:gap-1 md:grid-cols-[1fr_3fr]">
                <span className="text-3xl">${formattedPrice(objectProduct.price * (1 - objectProduct.discount))}</span>
                <span className="mr-auto rounded-md p-1 px-2 bg-pale-orange text-orange-primary">{objectProduct.discount * 100}%</span>
                <span className="text-right text-grayish-blue text-lg line-through md:col-span-2 md:text-left">${formattedPrice(objectProduct.price)}</span>
            </div>

            {/* Bottoms */}
            <div className="grid grid-cols-3 font-bold gap-4 md:grid-cols-[1fr_1.7fr]">
                <div className="col-span-3 flex items-center justify-between pb-3 py-2 px-5 rounded-md bg-gray-200 md:col-span-1">
                    <button className='text-3xl text-orange-primary hover:text-orange-600' onClick={decrementCount}>-</button>
                    <span className='text-xl'>{count}</span>
                    <button className='text-3xl text-orange-primary hover:text-orange-600' onClick={incrementCount}>+</button>
                </div>
                <button
                    className="col-span-3 flex gap-x-3 items-center justify-center rounded-md bg-orange-primary text-white hover:bg-orange-600 transition-all py-3 md:col-span-1"
                    onClick={addToCart}
                >
                    <CartIcon fill='#fff' />
                    <span>Add to cart</span>
                </button>
            </div>
        </section>
    );
};

export default DetailProduct;
