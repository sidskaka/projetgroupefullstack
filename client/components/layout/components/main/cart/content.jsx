import React, { useContext } from 'react'
import CartContext from '../../../../../cart/context';

const Content = () => {
	const { cartItems, removeFromCart } = useContext(CartContext);
	console.log(cartItems)
	return (
		<div className="shopping-cart section">
			<div className="container">
				<div className="row">
					<div className="col-12">

						<table className="table shopping-summery">
							<thead>
								<tr className="main-hading">
									<th>PRODUCT</th>
									<th>NAME</th>
									<th className="text-center">UNIT PRICE</th>
									<th className="text-center">QUANTITY</th>
									<th className="text-center">TOTAL</th>
									<th className="text-center"><i className="ti-trash remove-icon"></i></th>
								</tr>
							</thead>
							<tbody>
								{cartItems.map((cart) => (
									<tr>
										<td className="image" data-title="No"><img src={cart.imageUrl} alt="#" /></td>
										<td className="product-des" data-title="Description">
											<p className="product-name"><a href="#">{cart.name}</a></p>
											<p className="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
										</td>
										<td className="price" data-title="Price"><span>${cart.price}.00 </span></td>
										<td className="qty" data-title="Qty">
											<div className="input-group">
												<div className="button minus">
													<button type="button" className="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
														<i className="ti-minus"></i>
													</button>
												</div>
												<input type="text" name="quant[1]" className="input-number" data-min="1" data-max="100" value="1" />
												<div className="button plus">
													<button type="button" className="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
														<i className="ti-plus"></i>
													</button>
												</div>
											</div>

										</td>
										<td className="total-amount" data-title="Total"><span>${cart.price}.88</span></td>
										<td className="action" data-title="Remove"><a href="#"><i className="ti-trash remove-icon"></i></a></td>
									</tr>
								))}
							</tbody>
						</table>
	
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						className="total-amount">
							<div className="row">
								<div className="col-lg-8 col-md-5 col-12">
									<div className="left">
										<div className="coupon">
											<form action="#" target="_blank">
												<input name="Coupon" placeholder="Enter Your Coupon" />
												<button className="btn">Apply</button>
											</form>
										</div>
										<div className="checkbox">
											<label className="checkbox-inline" for="2"><input name="news" id="2" type="checkbox" /> Shipping (+10$)</label>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-7 col-12">
									<div className="right">
										<ul>
											<li>Cart Subtotal<span>$330.00</span></li>
											<li>Shipping<span>Free</span></li>
											<li>You Save<span>$20.00</span></li>
											<li className="last">You Pay<span>$310.00</span></li>
										</ul>
										<div className="button5">
											<a href="#" className="btn">Checkout</a>
											<a href="#" className="btn">Continue shopping</a>
										</div>
									</div>
								</div>
							</div>
						</div>
				</div>
			</div>
		</div>
	)
}

export default Content