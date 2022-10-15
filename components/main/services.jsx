import React from 'react';

const Services = () => {
    return (
        <div>
            	<div id="services" className="services section-bottom-only">
		<div className="section-title text-center">
			<h5 className="title-top"></h5>
			<h3> الخدمات التي نقدمها</h3>
		</div>
		<div className="container">
			<div className="row">
				<div className="col-md-4 col-sm-12">
					<div className="content">
						<div className="serv-icon">
							<i className="icon ion-logo-html5"></i>
							<span className="clone-icon"><i className="icon ion-logo-html5"></i></span>
						</div>
						<h5>تصميم مواقع </h5>
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p> */}
					</div>
				</div>
				<div className="col-md-4 col-sm-12">
					<div className="content">
						<div className="serv-icon">
							<i className="icon ion-ios-phone-portrait"></i>
							
							<span className="clone-icon">
								<i className="icon ion-ios-phone-portrait"></i></span>
						</div>
						<h5>تصميم تطبيقات الموبايل</h5>
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p> */}
					</div>
				</div>
				<div className="col-md-4 col-sm-12">
					<div className="content">
						<div className="serv-icon">

							{/* <i className="icon ion-ios-desktop"></i> */}
							<i className=" icon   ion-md-code"></i>

							<span className="clone-icon">
								
							<i className=" icon   ion-md-code"></i>
								{/* <i className="icon ion-ios-desktop"></i> */}
							</span>
						</div>
						<h5>حلول برمجية</h5>
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p> */}
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4 col-sm-12">
					<div className="content">
						<div className="serv-icon">
							<i className="icon ion-ios-bulb"></i>
							<span className="clone-icon"><i className="icon ion-ios-bulb"></i></span>
						</div>
						<h5>تصميم الهوية البصرية</h5>
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p> */}
					</div>
				</div>
				<div className="col-md-4 col-sm-12">
					<div className="content">
						<div className="serv-icon">
							<i className="icon ion-ios-paper"></i>
							<span className="clone-icon"><i className="icon ion-ios-paper"></i></span>
						</div>
						<h5>تسويق </h5>
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p> */}
					</div>
				</div>
				<div className="col-md-4 col-sm-12">
					<div className="content">
						<div className="serv-icon">
							<i className="icon ion-logo-wordpress"></i>
							<span className="clone-icon">

								<i className="icon ion-logo-wordpress"></i>

								 <i className="icon    ion-md-e"></i>
								</span>
						</div>
						<h5>Wordpress</h5>
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p> */}
					</div>
				</div>
			</div>
		</div>
	</div>
        </div>
    );
}

export default Services;
