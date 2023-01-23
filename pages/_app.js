import '../styles/globals.css'
import { Provider } from 'react-redux';   
import store from '../redux/store';  
import Header from "../components/header";
import Footer from "../components/footer";


export default function App({ Component, pageProps }) {
  return (
  <Provider store={store}>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </Provider>
  )
};
