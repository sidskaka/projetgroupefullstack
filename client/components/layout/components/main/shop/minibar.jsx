import React from 'react'

const MiniBar = () => {
    return (
		<div className="row">
			<div className="col-12">

				<div className="shop-top">
					<div className="shop-shorter">
						<div className="single-shorter">
							<label>Show :</label>
							<select>
								<option selected="selected">09</option>
								<option>15</option>
								<option>25</option>
								<option>30</option>
							</select>
						</div>
						<div className="single-shorter">
							<label>Sort By :</label>
							<select>
								<option selected="selected">Name</option>
								<option>Price</option>
								<option>Size</option>
							</select>
						</div>
					</div>
					<ul className="view-mode">
						<li className="active"><a href="shop-grid.html"><i className="fa fa-th-large"></i></a></li>
						<li><a href="shop-list.html"><i className="fa fa-th-list"></i></a></li>
					</ul>
				</div>

			</div>
		</div>    
    )
}

export default MiniBar
