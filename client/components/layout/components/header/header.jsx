import React, { useContext } from 'react'
import TopBar from '../topbar/topbar'
import Link from 'next/link'
import CartContext from '../../../../cart/context';

const Header = () => {
	const { cartItems, removeFromCart } = useContext(CartContext);
	const ItemNumber = cartItems.reduce((acc, item) => acc + item.qty, 0)
	//console.log(ItemNumber.lenght)
	console.log(cartItems)

	/**var htmlCheckout = "";

	for (var i = 0; i < ItemNumber; i++) {
		htmlCheckout = ;
	}*/
	var totalPrice = 0;
	for (var i = 0; i < cartItems.length; i++) {
		totalPrice += cartItems[i].price;
    }
	//console.log(cartItems)
	//console.log(totalPrice)
	return (
		<header className="header shop">
			<TopBar />

			<div className="middle-inner">
				<div className="container">
					<div className="row">
						<div className="col-lg-2 col-md-2 col-12">

							<div className="logo">
								<a href="index.html"><img src="images/logo.png" alt="logo" /></a>
							</div>

							<div className="search-top">
								<div className="top-search"><a href="#0"><i className="ti-search"></i></a></div>

								<div className="search-top">
									<form className="search-form">
										<input type="text" placeholder="Search here..." name="search" />
										<button value="search" type="submit"><i className="ti-search"></i></button>
									</form>
								</div>
							</div>

							<div className="mobile-nav"></div>
						</div>
						<div className="col-lg-8 col-md-7 col-12">
							<div className="search-bar-top">
								<div className="search-bar">
									<select>
										<option selected="selected">All Category</option>
										<option>watch</option>
										<option>mobile</option>
										<option>kid’s item</option>
									</select>
									<form>
										<input name="search" placeholder="Search Products Here....." type="search" />
										<button className="btnn"><i className="ti-search"></i></button>
									</form>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-3 col-12">
							<div className="right-bar">

								<div className="sinlge-bar">
									<a href="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
								</div>
								<div className="sinlge-bar">
									<a href="#" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true"></i></a>
								</div>
								<div className="sinlge-bar shopping">
								<a href="#" className="single-icon"><i className="ti-bag"></i> <span className="total-count">{cartItems.reduce((acc, item) => acc + item.qty, 0)}</span></a>

									<div className="shopping-item">
										<div className="dropdown-cart-header">
											<span>{cartItems.reduce((acc, item) => acc + item.qty, 0)} Items</span>
											<a href="#">View Cart</a>
										</div>
										<ul className="shopping-list">
											{cartItems.map((cart) => (
												
												<li key={cart._id}>
													<a onClick={() => removeFromCart(cart._id)} href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
													<a className="cart-img" href="#"><img src={cart.imageUrl} alt="#" /></a>
													<h4><a href="#">{cart.name}</a></h4>
													<p className="quantity">1x - <span className="amount">${cart.price}.00</span></p>
												</li>
											))}

										</ul>
										<div className="bottom">
											<div className="total">
												<span>Total</span>
												<span className="total-amount">${totalPrice}</span>
											</div>
											<Link href="/checkout">
												<a className="btn animate">Checkout</a>
											</Link>
										</div>
									</div>
			
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="header-inner">
				<div className="container">
					<div className="cat-nav-head">
						<div className="row">


							<div className="col-lg-3" style={{display: "none"}}>
								<div className="all-category">
									<h3 className="cat-heading"><i className="fa fa-bars" aria-hidden="true"></i>CATEGORIES</h3>
									<ul className="main-category">
										<li>
											<a href="#">New Arrivals <i className="fa fa-angle-right" aria-hidden="true"></i></a>
											<ul className="sub-category">
												<li><a href="#">accessories</a></li>
												<li><a href="#">best selling</a></li>
												<li><a href="#">top 100 offer</a></li>
												<li><a href="#">sunglass</a></li>
												<li><a href="#">watch</a></li>
												<li><a href="#">man’s product</a></li>
												<li><a href="#">ladies</a></li>
												<li><a href="#">westrn dress</a></li>
												<li><a href="#">denim </a></li>
											</ul>
										</li>
										<li className="main-mega"><a href="#">best selling <i className="fa fa-angle-right" aria-hidden="true"></i></a>
											<ul className="mega-menu">
												<li className="single-menu">
													<a href="#" className="title-link">Shop Kid's</a>
													<div className="image">
														<img src="https://via.placeholder.com/225x155" alt="#" />
													</div>
													<div className="inner-link">
														<a href="#">Kids Toys</a>
														<a href="#">Kids Travel Car</a>
														<a href="#">Kids Color Shape</a>
														<a href="#">Kids Tent</a>
													</div>
												</li>
												<li className="single-menu">
													<a href="#" className="title-link">Shop Men's</a>
													<div className="image">
														<img src="https://via.placeholder.com/225x155" alt="#" />
													</div>
													<div className="inner-link">
														<a href="#">Watch</a>
														<a href="#">T-shirt</a>
														<a href="#">Hoodies</a>
														<a href="#">Formal Pant</a>
													</div>
												</li>
												<li className="single-menu">
													<a href="#" className="title-link">Shop Women's</a>
													<div className="image">
														<img src="https://via.placeholder.com/225x155" alt="#" />
													</div>
													<div className="inner-link">
														<a href="#">Ladies Shirt</a>
														<a href="#">Ladies Frog</a>
														<a href="#">Ladies Sun Glass</a>
														<a href="#">Ladies Watch</a>
													</div>
												</li>
											</ul>
										</li>
										<li><a href="#">accessories</a></li>
										<li><a href="#">top 100 offer</a></li>
										<li><a href="#">sunglass</a></li>
										<li><a href="#">watch</a></li>
										<li><a href="#">man’s product</a></li>
										<li><a href="#">ladies</a></li>
										<li><a href="#">westrn dress</a></li>
										<li><a href="#">denim </a></li>
									</ul>
								</div>
							</div>




							<div className="col-lg-9 col-12">
								<div className="menu-area">

									<nav className="navbar navbar-expand-lg">
										<div className="navbar-collapse">
											<div className="nav-inner">
												<ul className="nav main-menu menu navbar-nav">
													<li className="active">
														<Link href="/">
															<a>Home</a>
														</Link>
													</li>
													<li><a href="#">Product</a></li>
													<li><a href="#">Service</a></li>
													<li>
														<a href="#">Shop<i className="ti-angle-down"></i><span className="new">New</span></a>
														<ul className="dropdown">
															<li>
																<Link href="/shop">
																	<a>Shop Grid</a>
															</Link>
																
															</li>
															<li><a href="cart.html">Cart</a></li>
															<li>
																<Link href="/checkout">
																	<a>Checkout</a>
																</Link>
															</li>
														</ul>
													</li>
													<li><a href="#">Pages</a></li>
													<li>
														<a href="#">Blog<i className="ti-angle-down"></i></a>
														<ul className="dropdown">
															<li><a href="blog-single-sidebar.html">Blog Single Sidebar</a></li>
														</ul>
													</li>
													<li>
														<Link href="/contact">
															<a>Contact</a>
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</nav>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>

    )
}

export default Header
