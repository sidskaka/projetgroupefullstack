import React, { useState, useContext } from 'react';
import CartContext from '../../../../../cart/context';

const Article = ({ id, name, imageUrl, price, description }) => {
	const [hover, setHover] = useState(false);
	const { addToCart } = useContext(CartContext);

    return (
		<div style={{ maxWidth: "260px" }} className="col-lg-4 col-md-6 col-12"
			className={`article ${hover && 'hover'}`}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}>

			<div className="single-product">
				<div className="product-img">
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
							<a title="Add to cart" onClick={() => addToCart({ id, name, price, description })}>Add to cart</a>
						</div>
					</div>
				</div>
				<div className="product-content">
					<h3><a href="product-details.html">{name}</a></h3>
					<div className="product-price">
						<span>${price}</span>
					</div>
				</div>
			</div>
		</div>    
    )
}

export default Article
