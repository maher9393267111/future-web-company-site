import React from 'react';

const Navbar = () => {
    return (
        <div>
	<nav className="navbar navbar-expand-md navbar-light fixed-top">
		<div className="container">
			<a href="index.html" className="navbar-brand"><img src="images/logo/ORGINAL1.png" alt=""/></a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<i className="icon ion-ios-menu"></i>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a className="nav-link" href="#home">الرئيسية</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#about">لماذا نحن</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#portfolio">من مشاريعنا</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#services">خدماتنا</a>
					</li>
					{/* <li className="nav-item">
						<a className="nav-link" href="#news">News</a>
					</li> */}
					<li className="nav-item">
						<a className="nav-link" href="#contact">تواصل معنا</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>



            
        </div>
    );
}

export default Navbar;
