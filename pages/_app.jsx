// pages/_app.jsx
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  // NO Layout here – header will only come from each page
  return <Component {...pageProps} />;
}
