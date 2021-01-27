import React from 'react'

import articles from '../../../../../data/articles.json'

const Tendance = () => {
    return(
		<>
        <div className="product-area section">
            <div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section-title">
							<h2>Trending Item</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="product-info">
							<div className="nav-main">

								<ul className="nav nav-tabs" id="myTab" role="tablist">
									<li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#man" role="tab">Man</a></li>
									<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#women" role="tab">Woman</a></li>
									<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#kids" role="tab">Kids</a></li>
									<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#accessories" role="tab">Accessories</a></li>
									<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#essential" role="tab">Essential</a></li>
									<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#prices" role="tab">Prices</a></li>
								</ul>

							</div>
							<div className="tab-content" id="myTabContent">

								<div className="tab-pane fade show active" id="man" role="tabpanel">
									<div className="tab-single">
										<div className="row">
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Women Hot Collection</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Pink Show</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Bags Collection</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
															<span className="new">New</span>
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Women Pant Collectons</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Bags Collection</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
															<span className="price-dec">30% Off</span>
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Cap For Women</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Polo Dress For Women</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
															<span className="out-of-stock">Hot</span>
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Black Sunglass For Women</a></h3>
														<div className="product-price">
															<span className="old">$60.00</span>
															<span>$50.00</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="women" role="tabpanel">
									<div className="tab-single">
										<div className="row">
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Women Hot Collection</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Pink Show</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Bags Collection</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
															<span className="new">New</span>
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Women Pant Collectons</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Bags Collection</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
															<span className="price-dec">30% Off</span>
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Cap For Women</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Polo Dress For Women</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
															<span className="out-of-stock">Hot</span>
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Black Sunglass For Women</a></h3>
														<div className="product-price">
															<span className="old">$60.00</span>
															<span>$50.00</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="kids" role="tabpanel">
									<div className="tab-single">
										<div className="row">
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Women Hot Collection</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Pink Show</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Bags Collection</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
															<span className="new">New</span>
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Women Pant Collectons</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Bags Collection</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
															<span className="price-dec">30% Off</span>
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Cap For Women</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Polo Dress For Women</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
															<span className="out-of-stock">Hot</span>
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Black Sunglass For Women</a></h3>
														<div className="product-price">
															<span className="old">$60.00</span>
															<span>$50.00</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="accessories" role="tabpanel">
									<div className="tab-single">
										<div className="row">
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Women Hot Collection</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Pink Show</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Bags Collection</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
															<span className="new">New</span>
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Women Pant Collectons</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Bags Collection</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
															<span className="price-dec">30% Off</span>
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Cap For Women</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Polo Dress For Women</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
															<span className="out-of-stock">Hot</span>
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Black Sunglass For Women</a></h3>
														<div className="product-price">
															<span className="old">$60.00</span>
															<span>$50.00</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="essential" role="tabpanel">
									<div className="tab-single">
										<div className="row">
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Women Hot Collection</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Pink Show</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Bags Collection</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
															<span className="new">New</span>
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Women Pant Collectons</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Bags Collection</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
															<span className="price-dec">30% Off</span>
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Cap For Women</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Polo Dress For Women</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
															<span className="out-of-stock">Hot</span>
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Black Sunglass For Women</a></h3>
														<div className="product-price">
															<span className="old">$60.00</span>
															<span>$50.00</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="tab-pane fade" id="prices" role="tabpanel">
									<div className="tab-single">
										<div className="row">
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Women Hot Collection</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Pink Show</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Bags Collection</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
															<span className="new">New</span>
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Women Pant Collectons</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Bags Collection</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
															<span className="price-dec">30% Off</span>
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Awesome Cap For Women</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Polo Dress For Women</a></h3>
														<div className="product-price">
															<span>$29.00</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-3 col-lg-4 col-md-4 col-12">
												<div className="single-product">
													<div className="product-img">
														<a href="product-details.html">
															<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
															<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
															<span className="out-of-stock">Hot</span>
														</a>
														<div className="button-head">
															<div className="product-action">
																<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
																<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
																<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
															</div>
															<div className="product-action-2">
																<a title="Add to cart" href="#">Add to cart</a>
															</div>
														</div>
													</div>
													<div className="product-content">
														<h3><a href="product-details.html">Black Sunglass For Women</a></h3>
														<div className="product-price">
															<span className="old">$60.00</span>
															<span>$50.00</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
            </div>
    </div>

	<section className="midium-banner">
		<div className="container">
			<div className="row">

				<div className="col-lg-6 col-md-6 col-12">
					<div className="single-banner">
						<img src="images/basket2-img.jpg" alt="#" />
						<div className="content">
							<p>Man's Collectons</p>
							<h3 style={{color: "#fff"}}>Man's items <br />Up to<span> 50%</span></h3>
							<a href="#">Shop Now</a>
						</div>
					</div>
				</div>

				<div className="col-lg-6 col-md-6 col-12">
					<div className="single-banner">
						<img src="images/basket1-img.jpg" alt="#" />
						<div className="content">
							<p>shoes women</p>
							<h3 style={{color: "#fff"}}>mid season <br /> up to <span>70%</span></h3>
							<a href="#" className="btn">Shop Now</a>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>

	<div className="product-area most-popular section">
        <div className="container">
            <div className="row">
				<div className="col-12">
					<div className="section-title">
						<h2>Hot Item</h2>
					</div>
				</div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="owl-carousel popular-slider">

						{articles.map((article) => (
							<div className="single-product">
								<div className="product-img">
									<a href="product-details.html">
										<img className="default-img" src={article.imageUrl} alt={article.imageUrl} />
										<span className="out-of-stock">Hot</span>
									</a>
									<div className="button-head">
										<div claclassNamessName="product-action">
											<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
											<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
											<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
										</div>
										<div className="product-action-2">
											<a title="Add to cart" href="#">Add to cart</a>
										</div>
									</div>
								</div>
								<div className="product-content">
									<h3><a href="product-details.html">{article.name}</a></h3>
									<div className="product-price">
										<span className="old">$65.00</span>
										<span>${article.price}</span>
									</div>
								</div>
							</div>
						))}

						

                    </div>
                </div>
            </div>
        </div>
    </div>

	<section className="shop-home-list section">
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-6 col-12">
					<div className="row">
						<div className="col-12">
							<div className="shop-section-title">
								<h1>On sale</h1>
							</div>
						</div>
					</div>

					<div className="single-list">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-12">
								<div className="list-image overlay">
									<img src="https://via.placeholder.com/115x140" alt="#" />
									<a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-12 no-padding">
								<div className="content">
									<h4 className="title"><a href="#">Licity jelly leg flat Sandals</a></h4>
									<p className="price with-discount">$59</p>
								</div>
							</div>
						</div>
					</div>

					<div className="single-list">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-12">
								<div className="list-image overlay">
									<img src="https://via.placeholder.com/115x140" alt="#" />
									<a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-12 no-padding">
								<div className="content">
									<h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
									<p className="price with-discount">$44</p>
								</div>
							</div>
						</div>
					</div>

					<div className="single-list">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-12">
								<div className="list-image overlay">
									<img src="https://via.placeholder.com/115x140" alt="#" />
									<a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-12 no-padding">
								<div className="content">
									<h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
									<p className="price with-discount">$89</p>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div className="col-lg-4 col-md-6 col-12">
					<div className="row">
						<div className="col-12">
							<div className="shop-section-title">
								<h1>Best Seller</h1>
							</div>
						</div>
					</div>

					<div className="single-list">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-12">
								<div className="list-image overlay">
									<img src="https://via.placeholder.com/115x140" alt="#" />
									<a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-12 no-padding">
								<div className="content">
									<h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
									<p className="price with-discount">$65</p>
								</div>
							</div>
						</div>
					</div>

					<div className="single-list">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-12">
								<div className="list-image overlay">
									<img src="https://via.placeholder.com/115x140" alt="#" />
									<a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-12 no-padding">
								<div className="content">
									<h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
									<p className="price with-discount">$33</p>
								</div>
							</div>
						</div>
					</div>

					<div className="single-list">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-12">
								<div className="list-image overlay">
									<img src="https://via.placeholder.com/115x140" alt="#" />
									<a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-12 no-padding">
								<div className="content">
									<h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
									<p className="price with-discount">$77</p>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div className="col-lg-4 col-md-6 col-12">
					<div className="row">
						<div className="col-12">
							<div className="shop-section-title">
								<h1>Top viewed</h1>
							</div>
						</div>
					</div>

					<div className="single-list">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-12">
								<div className="list-image overlay">
									<img src="https://via.placeholder.com/115x140" alt="#" />
									<a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-12 no-padding">
								<div className="content">
									<h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
									<p className="price with-discount">$22</p>
								</div>
							</div>
						</div>
					</div>

					<div className="single-list">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-12">
								<div className="list-image overlay">
									<img src="https://via.placeholder.com/115x140" alt="#" />
									<a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-12 no-padding">
								<div className="content">
									<h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
									<p className="price with-discount">$35</p>
								</div>
							</div>
						</div>
					</div>

					<div className="single-list">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-12">
								<div className="list-image overlay">
									<img src="https://via.placeholder.com/115x140" alt="#" />
									<a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-12 no-padding">
								<div className="content">
									<h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
									<p className="price with-discount">$99</p>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</section>

	<section className="cown-down">
		<div className="section-inner ">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6 col-12 padding-right">
						<div className="image">
							<img src="images/img.jpg" alt="#" />
						</div>	
					</div>	
					<div className="col-lg-6 col-12 padding-left">
						<div className="content">
							<div className="heading-block">
								<p className="small-title">Deal of day</p>
								<h3 className="title">Beatutyful dress for women</h3>
								<p className="text">Suspendisse massa leo, vestibulum cursus nulla sit amet, frungilla placerat lorem. Cars fermentum, sapien. </p>
								<h1 className="price">$1200 <s>$1890</s></h1>
								<div className="coming-time">
									<div className="clearfix" data-countdown="2021/02/30"></div>
								</div>
							</div>
						</div>	
					</div>	
				</div>
			</div>
		</div>
	</section>
	</>
    )
}

export default Tendance
