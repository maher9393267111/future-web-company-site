
import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/main/navbar";
import Intro from "../components/main/intro";
import AboutUs from "../components/main/aboutUs";
import Work from "../components/main/Work";
import Portfolio from "../components/main/portfolio";
import Services from '../components/main/services'
import News from "../components/main/news";
import Words from "../components/main/words";
import Contact from "../components/main/contact";
import Footer from "../components/main/footer";
import Testimonial from '../components/main/slider'


function HomePage(props) {




  return (
    <Layout>

<div className=" cont">

<div>

	
	<div className="fakeLoader"></div>
	

	


<Navbar/>

<Intro/>


	
	<AboutUs/>


	
	<Work/>
	


	<Portfolio/>
	

	
<Services/>



 




	<Words/>
	
	
<Testimonial/>

	{/* <News/> */}



<Contact/>
	


<Footer/>

</div>







</div>








    </Layout>
  

  )
}


export default HomePage;
