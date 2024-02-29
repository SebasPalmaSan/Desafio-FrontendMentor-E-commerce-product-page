import { createContext, useState } from "react";

export const CartContext = createContext();

const UseCartProvider = (props) => {

    const [ cartItems, setCartItems ] = useState([]);

    const addItems = (item) => {
        if(cartItems.length === 0){
            return setCartItems([...cartItems, item])
        }

        setCartItems(
            cartItems.map(product => {
                if(product.id === item.id){
                    return ({
                        ...product, quantity: product.quantity + item.quantity,
                    })
                } else {
                    return product
                }
            })
        )

    };

    const deleteItems = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const totalQuantity = cartItems.reduce((acc, current) => current.quantity + acc,
    0
    );

    return (
        <CartContext.Provider value={{cartItems, addItems, deleteItems, totalQuantity}}>
            {props.children}
        </CartContext.Provider>
    );
};

export default UseCartProvider;