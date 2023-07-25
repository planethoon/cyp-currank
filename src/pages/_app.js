import Layout from "../components/Layout";
import "../styles/index.scss";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
  const checkSubLayout =
    Component.checkSubLayout ||
    (() => {
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        ;
      </QueryClientProvider>;
    });

  return checkSubLayout(
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
