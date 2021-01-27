import React, { useContext } from 'react'
import Minimenu from './minimenu'
import ArticlesBlog from './articlesblog'
import Details from './details'
import Newsletter from '../newsletter'

import CartContext from '../../../../../cart/context';

const Shop = () => {
    //const { addToCart } = useContext(CartContext);

    return (
        <>
            <Minimenu />
            <ArticlesBlog />
            <Newsletter />
            <Details />
        </>
    )
}

export default Shop
