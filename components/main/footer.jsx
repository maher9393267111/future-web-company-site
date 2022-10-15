import React from 'react';

const Footer = () => {
    return (
        <div>
            	<footer>
		<div className="container">
			<div className="row">
				<div className="col-md-3 col-sm-6 col-xs-12">
					<div className="content">
						<div className="brand"><img src="images/logo.png" alt=""/></div>
						<p className=' footer-text'> ” تسويق الكتروني وخدمات في مجال تكنولوجيا المعلومات والانترنت جاءت لتكون إضافة إبداعية في العالم الرقمي.</p>
					</div>
				</div>
				<div className="col-md-3 col-sm-6 col-xs-12">
					<div className="content">
						<h5>About</h5>
						<ul>
							<li><a href=""><i className="icon ion-ios-contact"></i> About us</a></li>
							<li><a href=""><i className="icon ion-ios-chatboxes"></i> Contact</a></li>
							<li><a href=""><i className="icon ion-ios-list"></i> Portfolio</a></li>
						</ul>
					</div>
				</div>
				<div className="col-md-3 col-sm-6 col-xs-12">
					<div className="content">
						<h5>Support</h5>
						<ul>
							<li><a href=""><i className="icon ion-ios-headset"></i> futureWeb@gmail.com</a></li>
							<li><a href=""><i className="icon ion-ios-call"></i> +61 3 8376 6284
							</a></li>
							<li><a href=""><i className="icon ion-ios-settings"></i> Services</a></li>
						</ul>
					</div>
				</div>
				<div className="col-md-3 col-sm-6 col-xs-12">
					<div className="content">
						<h5>Follow us</h5>
						<ul className="social">
							<li><a href=""><i className="icon ion-logo-facebook"></i> Facebook</a></li>
							<li><a href=""><i className="icon ion-logo-twitter"></i> Twitter</a></li>
							<li><a href=""><i className="icon ion-logo-instagram"></i> Instagram</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>

	<div className="footer-bottom">
		<span>Copyright © All Right Reserved</span>
	</div>

        </div>
    );
}

export default Footer;
