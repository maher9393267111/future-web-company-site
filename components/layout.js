
import Header from "./header/header";

import Script from "next/script";

export default function Layout(props) {
  return (
    <>
    {/* 🛹🛹 // head hav  projec icon and title  🛹🛹*/}
    <Header/>
   

<div>
  {props?.children}
</div>



 




{/* //----- */}







<Script src="js/jquery-3.5.1.min.js"   strategy="beforeInteractive"></Script>
	<Script src="js/bootstrap.bundle.min.js"  strategy="beforeInteractive"></Script>
	<Script src="js/jquery.filterizr.min.js"  strategy="beforeInteractive"></Script>
	<Script src="js/imagesloaded.pkgd.min.js"   strategy="beforeInteractive"></Script>
	<Script src="js/magnific-popup.min.js"  strategy="beforeInteractive"></Script>
	<Script src="js/contact-form.js"   strategy="beforeInteractive"></Script>
	<Script src="js/main.js"   strategy="beforeInteractive"></Script>





    </>
  );
}
