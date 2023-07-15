import Link from "next/link";

export default function Footer({ children }) {
  return (
    <div className="container">
      {children}
      <div className={"footer--container"}>
        <div className={"footer--email"}>
          요청&피드백 : dev.sunghoon@gmail.com
        </div>
        <Link href="https://developers.neople.co.kr" target="_blank">
          <div className={"footer--neople"}>
            <span>Powered by </span>
            <span>Neople </span>
            <span>OpenAPI</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
