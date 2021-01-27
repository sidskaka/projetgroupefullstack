import Layout from '../components/layout/layout'
import CartContext from '../cart/context';
import useCart from '../hooks/use-cart';

import './styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <CartContext.Provider value={useCart([])}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </CartContext.Provider>
    );
}