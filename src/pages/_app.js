import Layout from "../components/Layout";
import "../styles/index.scss";

export default function MyApp({ Component, pageProps }) {
  const checkFooter =
    Component.addFooter ||
    (() => {
      <Layout>
        <Component {...pageProps} />
      </Layout>;
    });

  return checkFooter(<Component {...pageProps} />);
}
