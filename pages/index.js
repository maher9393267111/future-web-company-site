
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

function HomePage(props) {




  return (
    <Layout>

<div className=" cont">

<div>

	{/* <!-- loader --> */}
	<div className="fakeLoader"></div>
	{/* <!-- end loader -->

	<!-- navbar --> */}
<Navbar/>
	{/* <!-- end navbar -->

	<!-- home intro --> */}
<Intro/>
	{/* <!-- end home intro -->

	<!-- about us --> */}
	<AboutUs/>
	{/* <!-- end about us -->

	<!-- process work --> */}
	<Work/>
	{/* <!-- end process work -->

	<!-- portfolio --> */}
	<Portfolio/>
	{/* <!-- end portfolio -->

	<!-- services --> */}
<Services/>
	{/* <!-- end services -->

	<!-- words --> */}
	<Words/>
	{/* <!-- end words -->

	<!-- news --> */}
	<News/>
	{/* <!-- end news -->

	<!-- contact --> */}
<Contact/>
	{/* <!-- end contact -->

	<!-- footer --> */}
<Footer/>

</div>







</div>








    </Layout>
  

  )
}


export default HomePage;
