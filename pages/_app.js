import "../styles/globals.css";
import { MovieProvider } from "../Context/MovieContext";
function MyApp({ Component, pageProps }) {
  return (
    <MovieProvider>
      <Component {...pageProps} />
    </MovieProvider>
  );
}

export default MyApp;
