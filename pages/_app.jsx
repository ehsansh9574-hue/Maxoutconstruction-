// pages/_app.jsx
import "../styles/globals.css"; // ok if this file doesn't exist
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
