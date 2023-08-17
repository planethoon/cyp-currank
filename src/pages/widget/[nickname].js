import Widget from "../../components/Widget";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function UsernameSlug() {
  const router = useRouter();

  const { nickname } = router.query;

  return (
    <>
      <Widget nickname={nickname} />
    </>
  );
}

UsernameSlug.checkSubLayout = function checkSubLayout(page) {
  return <div>{page}</div>;
};
