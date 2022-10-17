import Head from "next/head";

export default function Header(props) {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
      <meta charSet="utf-8"></meta>
      <meta name="theme-color" content="#ffffff"></meta>

      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="images/logo/ORGINAL1.png"
      ></link>

      <title>{props.title || ' web-Future'}</title>
    </Head>
  );
}
