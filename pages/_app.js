import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import Header from "../components/header";
import Footer from "../components/footer";
import { Toaster } from "react-hot-toast";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Toaster />
        <div className="min-h-screen flex flex-col justify-between">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Provider>
    </SessionProvider>
  );
}
