import "../styles/globals.css";
import {useEffect,useState} from 'react'
import '../styles/slider.scss'

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
