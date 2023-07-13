import Layout from "../components/Layout";
import "../styles/index.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
