import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div id="about" className="about">
		<div className="container">
			<div className="row">
				<div className="col-sm-12 col-md-6 col-xs-12">
					<div className="content-image">
						<img src="https://cdni.iconscout.com/illustration/premium/thumb/web-designer-4439348-3726919.png" alt=""/>
					
					</div>
				</div>
				<div className="col-sm-12 col-md-6 col-xs-12">
					<div className="content">
						<h3 className=' text-center'>لماذا نحن</h3>
						<p className='text-end'>فريق عمل متكامل يعمل على تطوير خدماتنا المقدمة لك لضمان سهولة الاستخدام وتوفير جميع الخدمات المرتبطة بتحسين عملية تواصلك مع عملائك.</p>
						<p className='text-end'>نضمن لك الجودة العالية و الخدمة الموثوقة وبأسعار مناسبة ونقدم لك خدمة الدعم الفني على مدار الساعة وفي كافة أيام الأسبوع.</p>
						{/* <ul>
							<li><span className="circle-list"></span>eatures</li>
							<li><span className="circle-list"></span>Lorem ipsum dolor sit</li>
							<li><span className="circle-list"></span>dolore architecto officiis</li>
						</ul> */}
					</div>
				</div>
			</div>
		</div>
	</div>
        </div>
    );
}

export default AboutUs;
