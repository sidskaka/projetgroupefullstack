import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Minibar from './minibar'
import Sidebar from './sidebar'
import Article from './article'

//import articles from '../../../../../data/articles.json'

const ArticlesBlog = () => {
	const [articles, setArticles] = useState([]);
	let url = 'http://localhost:3001/api/v1/products'

	console.log("teste!!!")

	useEffect(() => {
		axios({
			method: 'GET',
			headers: { 'Access-Control-Allow-Credentials': 'true' },
			url: url
		}).
			then(res => {
				//console.log(res.data)
				setArticles(res.data)
			}).
			catch(err => {
				console.log(err)
			})
	}, [])
	console.log(articles)
	return (
		<section className="article-area shop-sidebar shop section">
			<div className="container">
				<div className="row">
					<Sidebar />
					<div className="col-lg-9 col-md-8 col-12">
						<Minibar />

						<div className="row">
							<div className='articles'>
								{articles.map((article) => (
									<Article key={article._id} {...article}  />
								))}
							</div>
							
						</div>
					</div>
		
				</div>
			</div>
		</section>
    )
}

export default ArticlesBlog

/*
 <div className="col-lg-4 col-md-6 col-12">
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
 <div className="col-lg-4 col-md-6 col-12">
								<div className="single-product">
									<div className="product-img">
										<a href="product-details.html">
											<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
											<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
										</a>
										<div className="button-head">
											<div className="product-action">
												<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
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
							<div className="col-lg-4 col-md-6 col-12">
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
							<div className="col-lg-4 col-md-6 col-12">
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
							<div className="col-lg-4 col-md-6 col-12">
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
							<div className="col-lg-4 col-md-6 col-12">
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
							<div className="col-lg-4 col-md-6 col-12">
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
							<div className="col-lg-4 col-md-6 col-12">
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
							<div className="col-lg-4 col-md-6 col-12">
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
 */