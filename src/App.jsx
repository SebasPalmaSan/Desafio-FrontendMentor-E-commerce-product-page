import IndexProduct from "@/components/product/IndexProduct";
import Header from "@/components/navbar/Header";

import CartDetailProvider from '@/context/useCart';

const App = () => {
    return (
        <CartDetailProvider>
            <Header />
            <IndexProduct />
        </CartDetailProvider>
    );
};

export default App;