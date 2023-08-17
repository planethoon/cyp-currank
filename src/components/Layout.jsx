import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>쌉지지 - 사이퍼즈 전적 검색</title>
      </Head>
      {children}
    </div>
  );
}
