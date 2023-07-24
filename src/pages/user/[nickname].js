import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

// components
import UserInfo from "../../components/user/userInfo";
import UserSummary from "../../components/user/userSummary";
import Widget from "../../components/Widget";
import Footer from "../../components/Footer";

// custom hooks
import { useModal } from "../../hooks/useModal";
import UserMatch from "../../components/user/userMatch";

export async function getServerSideProps(context) {
  const host = context.req.headers.host;
  return { props: { host } };
}

export default function UserPageSlug({ host }) {
  const router = useRouter();
  const { nickname } = router.query;

  const [isOpen, switchModal, closeModal] = useModal();

  return (
    <div className="user--background">
      <div className="user--container">
        <UserInfo nickname={nickname} host={host} switchModal={switchModal} />
        <UserSummary />
        <UserMatch />
      </div>
      <div
        className={
          isOpen ? "user--widget--container on" : "user--widget--container"
        }
      >
        <div className="user--widget--btn" onClick={closeModal}>
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
