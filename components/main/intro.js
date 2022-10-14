import React from 'react';

const Intro = () => {
    return (
        <div>
            	<div id="home" className="home-intro">
		<div className="container">
			<div className="row">
				<div className="col-md-6 col-sm-12 col-xs-12">
					<div className="content">
						<h2><span className="color-highlight">Build</span> Your</h2>
						<h2>Agency <span className="color-highlight">with Us</span></h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dicta impedit iste!</p>
						<ul>
							<li><a href="" className="button">Get Started</a></li>
							<li><a href="" className="button button-secondary">Free Trial</a></li>
						</ul>
					</div>
				</div>
				<div className="col-md-6 col-sm-12 col-xs-12">
					<div className="content-image">
						<img src="images/header-img.png" alt=""/>
					</div>
				</div>
			</div>
		</div>
	</div>
        </div>
    );
}

export default Intro;
