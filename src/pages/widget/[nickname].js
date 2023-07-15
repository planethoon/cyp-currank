import Widget from "../../components/Widget";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Layout from "../../components/Layout";
import Footer from "../../components/Footer";

export default function usernameSlug() {
  const router = useRouter();

  const { nickname } = router.query;

  return (
    <>
      <Widget nickname={nickname} />
    </>
  );
}

usernameSlug.addFooter = function addFooter(page) {
  return <div>{page}</div>;
};
