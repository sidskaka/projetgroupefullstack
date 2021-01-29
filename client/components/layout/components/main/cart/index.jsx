import React, { useContext } from 'react'
import Minimenu from './minimenu'
import Content from './content'
import Newsletter from '../newsletter'

import CartContext from '../../../../../cart/context';

const Cart = () => {
    
    //const { addToCart } = useContext(CartContext);

    return (
        <>
            <Minimenu />
            <Content />
            <Newsletter />
        </>
    )
}

export default Cart
