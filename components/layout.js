import Footer from "./footer/footer";
import Header from "./header/header";
import Navbar from "./navbar";
import Script from "next/script";

export default function Layout(props) {
  return (
    <div>
   
   

<div>
  {props?.children}
</div>



 




{/* //----- */}


{/* <Script src="/js/main.js" strategy="beforeInteractive" ></Script>
<Script src="js/ion.rangeSlider.min.js"  strategy="beforeInteractive"></Script> */}


<Script src="/js/jquery-1.11.3.min.js"   strategy="beforeInteractive"></Script> 
<Script src="/js/bootstrap.min.js"   strategy="beforeInteractive"></Script> 
<Script src="/js/own-menu.js"   strategy="beforeInteractive"></Script> 
<Script src="/js/jquery.lighter.js"   strategy="beforeInteractive"></Script> 
<Script src="/js/owl.carousel.min.js"   strategy="beforeInteractive"></Script> 
<Script type="text/javascript" src="/rs-plugin/js/jquery.tp.t.min.js"    strategy="beforeInteractive"></Script> 
<Script type="text/javascript" src="/rs-plugin/js/jquery.tp.min.js"    strategy="beforeInteractive"></Script> 
<Script src="/js/main.js"   strategy="beforeInteractive"></Script> 

<Script src="/js/modernizr.js"></Script>







    </div>
  );
}
