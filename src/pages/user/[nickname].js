import { useRouter } from "next/router";

import Widget from "../../components/Widget";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import Image from "next/image";

export async function getServerSideProps(context) {
  const host = context.req.headers.host;
  return { props: { host } };
}

export default function UserPageSlug({ host }) {
  const [copy, setCopy] = useState("링크복사");
  const [preview, setPreview] = useState(false);

  const router = useRouter();
  const { nickname } = router.query;

  const { asPath } = router;

  return (
    <div className="user--background">
      <div className="user--container">
        <div className="user--info">
          <div className="user--info--container">
            <div className="user--info--character">
              <Image
                src={`https://img-api.neople.co.kr/cy/characters/627db8b10d95ba73f0d2765130430454`}
                alt={"케니스"}
                height="80"
                width="80"
              />
            </div>
            <div className="user--info--textWrapper">
              <div className="user--info--nickname">{nickname}</div>
              <div className="user--info--refresh">갱신</div>
            </div>
          </div>
          <div className="user--info--widget">
            <div className="user--info--wTitle">스트리머 위젯</div>
            <div className="user--info--wBtnWrapper">
              <div
                className="user--info--wBtn"
                onClick={() => {
                  setPreview(!preview);
                }}
              >
                미리보기
              </div>
              <div
                className="user--info--wBtn"
                onClick={() => {
                  setCopy("복사완료!");
                  navigator.clipboard.writeText(`${host}/widget/${nickname}`);
                  setTimeout(() => {
                    setCopy("링크복사");
                  }, 5000);
                }}
              >
                {copy}
              </div>
            </div>
          </div>
        </div>
        <div className="user--summary"></div>
        <div className="user--match--container"></div>
      </div>
      <div
        className={
          preview ? "user--widget--container on" : "user--widget--container"
        }
      >
        <div
          className="user--widget--btn"
          onClick={() => {
            setPreview(false);
          }}
        >
          닫기
        </div>
        <Widget nickname={nickname} />
      </div>
    </div>
  );
}

UserPageSlug.addFooter = function addFooter(page) {
  return (
    <div>
      {page}
      <Footer />
    </div>
  );
};
