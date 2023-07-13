import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>사이퍼즈 랭크 위젯</title>
      </Head>
      {children}
    </div>
  );
}
