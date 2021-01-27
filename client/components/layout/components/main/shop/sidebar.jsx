import React from 'react'

const Sidebar = () => {
    return (
        <div className="col-lg-3 col-md-4 col-12">
			<div className="shop-sidebar">

				<div className="single-widget category">
					<h3 className="title">Categories</h3>
					<ul className="categor-list">
						<li><a href="#">T-shirts</a></li>
						<li><a href="#">jacket</a></li>
						<li><a href="#">jeans</a></li>
						<li><a href="#">sweatshirts</a></li>
						<li><a href="#">trousers</a></li>
						<li><a href="#">kitwears</a></li>
						<li><a href="#">accessories</a></li>
					</ul>
				</div>

				<div className="single-widget range">
					<h3 className="title">Shop by Price</h3>
					<div className="price-filter">
						<div className="price-filter-inner">
							<div id="slider-range"></div>
							<div className="price_slider_amount">
								<div className="label-input">
									<span>Range:</span>
									<input type="text" id="amount" name="price" placeholder="Add Your Price" />
								</div>
							</div>
						</div>
					</div>
					<ul className="check-box-list">
						<li>
							<label className="checkbox-inline" for="1"><input name="news" id="1" type="checkbox" />$20 - $50<span class="count">(3)</span></label>
						</li>
						<li>
							<label className="checkbox-inline" for="2"><input name="news" id="2" type="checkbox" />$50 - $100<span class="count">(5)</span></label>
						</li>
						<li>
							<label className="checkbox-inline" for="3"><input name="news" id="3" type="checkbox" />$100 - $250<span class="count">(8)</span></label>
						</li>
					</ul>
				</div>

				<div className="single-widget recent-post">
					<h3 className="title">Recent post</h3>

					<div className="single-post first">
						<div className="image">
							<img src="https://via.placeholder.com/75x75" alt="#" />
						</div>
							<div className="content">
							<h5><a href="#">Girls Dress</a></h5>
							<p className="price">$99.50</p>
							<ul className="reviews">
								<li className="yellow"><i className="ti-star"></i></li>
								<li className="yellow"><i className="ti-star"></i></li>
								<li className="yellow"><i className="ti-star"></i></li>
								<li><i className="ti-star"></i></li>
								<li><i className="ti-star"></i></li>
							</ul>
						</div>
					</div>

					<div className="single-post first">
						<div className="image">
							<img src="https://via.placeholder.com/75x75" alt="#" />
						</div>
						<div className="content">
							<h5><a href="#">Women Clothings</a></h5>
							<p className="price">$99.50</p>
							<ul className="reviews">
								<li className="yellow"><i className="ti-star"></i></li>
								<li className="yellow"><i className="ti-star"></i></li>
								<li className="yellow"><i className="ti-star"></i></li>
								<li className="yellow"><i className="ti-star"></i></li>
								<li><i className="ti-star"></i></li>
							</ul>
						</div>
					</div>

					<div className="single-post first">
						<div className="image">
							<img src="https://via.placeholder.com/75x75" alt="#" />
						</div>
						<div className="content">
							<h5><a href="#">Man Tshirt</a></h5>
							<p className="price">$99.50</p>
							<ul className="reviews">
								<li className="yellow"><i className="ti-star"></i></li>
								<li className="yellow"><i className="ti-star"></i></li>
								<li className="yellow"><i className="ti-star"></i></li>
								<li className="yellow"><i className="ti-star"></i></li>
								<li className="yellow"><i className="ti-star"></i></li>
							</ul>
						</div>
					</div>

				</div>

				<div className="single-widget category">
					<h3 className="title">Manufacturers</h3>
					<ul className="categor-list">
						<li><a href="#">Forever</a></li>
						<li><a href="#">giordano</a></li>
						<li><a href="#">abercrombie</a></li>
						<li><a href="#">ecko united</a></li>
						<li><a href="#">zara</a></li>
					</ul>
				</div>

			</div>
		</div>
    )
}

export default Sidebar
