import React from 'react';

const Intro = () => {
    return (
        <div>
            	<div id="home" className="home-intro">
		<div className="container">
			<div className="row">
				<div className="col-md-6 col-sm-12 col-xs-12">
					<div className="content  text-right">
						<h4><span className="color-highlight">صمم موقعك</span> الخاص</h4>
						<h4>الان <span className="color-highlight">معنى  بأفضل الأسعار و بأقصى سرعة
                        {/* <i className="uil uil-comments"/> */}
                        </span></h4>
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dicta impedit iste!</p> */}
						<ul>
							<li><a href="" className="   button">Get Started</a></li>
							{/* <li><a href="" className="button button-secondary">Free Trial</a></li> */}
						</ul>
					</div>
				</div>
				<div className="col-md-6 col-sm-12 col-xs-12">
					<div className="content-image">
						{/* <img src="images/header-img.png" alt=""/> */}

                        {/* <video
                        className='video-intro'
                        src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/content-builder-6576548-5445944.mp4" autoplay="autoplay" muted="muted" loop="loop" playsinline="" type="video/mp4"></video> */}


<video

className=' video-intro'
loading="lazy" muted="muted" src="https://cdnl.iconscout.com/lottie/premium/thumb/content-builder-6576548-5445944.mp4" type="video/mp4" autoPlay="autoPlay" loop="loop"></video>


					</div>
				</div>
			</div>
		</div>
	</div>
        </div>
    );
}

export default Intro;
