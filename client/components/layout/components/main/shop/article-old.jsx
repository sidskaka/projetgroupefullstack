import React, { useState, useContext } from 'react';
import CartContext from '../../../../../cart/context';

export default function Article({
    id,
    name,
    imageUrl,
    price,
    tags,
    colors,
}) {
    const [hover, setHover] = useState(false);
    const { addToCart } = useContext(CartContext);
    return (
        <div
            className={`article ${hover && 'hover'}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            {hover && (
                <div
                    className='add-to-cart'
                    onClick={() =>
                        addToCart({
                            id,
                            name,
                            price,
                        })
                    }>
                    +<div>add to cart</div>
                </div>
            )}

                    <div className="product-img" style={{maxWidth: "260px"}}>
                        <a href="product-details.html">
                            <img src={imageUrl} alt={name} />
                        </a>
                        <div className="button-head">
                            <div className="product-action">
                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                            </div>
                            <div className="product-action-2">
                                <a onClick={() => addToCart({ id, name, price })} title="Add to cart" href="#">Add to cart</a>
                            </div>
                        </div>
                    </div>
            
        </div>
    );
}

/*
 <div className='card'>
                <img src={imageUrl} alt={name} />
                <div className='name'>{name}</div>
                
            </div>
 */
