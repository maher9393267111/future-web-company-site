import React from 'react';
import { projects } from '../../utils/data';

const Portfolio = () => {
    return (
        <div>
  	<div id="portfolio" className="portfolio section-bottom-only">
		<div className="container">
			<div className="section-title">
				{/* <h5 className="title-top">Work</h5> */}
				<h3>من أعمالنا</h3>
			</div>
			{/* <div className="portfolio-filter-menu">
				<ul>
					<li data-filter="all" class="active">
						<span>All</span>
					</li>
					<li data-filter="1">
						<span>Web Design</span>
					</li>
					<li data-filter="2">
						<span>Marketing</span>
					</li>
					<li data-filter="3">
						<span>Branding</span>
					</li>
				</ul>
			</div> */}

			{/* ----------- CARDS MAP ----------- */}
			<div className="row   no-gutters filter-container">


            {/* ----------- Single Project Cart Start ------ */}


 {projects?.map((project,index)=>{

return (

	<div key={index} className="col-md-12 col-lg-6 col-sm-12   col-xs-12    mt-5  mb-5" data-category="3">
					<div className="content-image  w-75">
						<a
						// href="images/portfolio1.jpg" 
						href={project?.url}
						
						// className="portfolio-popup"   // popup light image class
						>
							<img className='project-img' src={project?.image} alt="portfolio-image"/>
							<div className="image-overlay"></div>
							<div className="image-caption">
								<h4>{project?.name}</h4>
								<span>{project?.type}

								
								</span>

							</div>
						</a>
					</div>
				</div>



)


 })}


			
			
			</div>
		</div>
	</div>
        </div>
    );
}

export default Portfolio;


