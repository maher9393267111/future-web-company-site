import "../styles/globals.css";
import {useEffect,useState} from 'react'

function App({ Component, pageProps }) {

  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);  





  return (
    <Component {...pageProps} />
  );
}

export default App;
