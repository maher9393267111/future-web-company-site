import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";


export default function Document() {
  return (
    <Html>
      <Head>


      <link href="/css/bootstrap.min.css" rel="stylesheet"/>


<link href="/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
<link href="/css/ionicons.min.css" rel="stylesheet"/>
<link href="/css/main.css" rel="stylesheet"/>
<link href="/css/style.css" rel="stylesheet"/>
<link href="/css/responsive.css" rel="stylesheet"/>


{/* <script src="/js/modernizr.js"></script> */}


<link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'/>
<link href='https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900' rel='stylesheet' type='text/css'/>



{/* //////// */}



      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
