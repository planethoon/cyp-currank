import { useRouter } from "next/router";

import Footer from "../../components/Footer";

export default function UserPageSlug() {
  const router = useRouter();
  const { nickname } = router.query;

  return (
    <div className="user--background">
      <div className="user--container">
        <div className="user--info"></div>
        <div className="user--summary"></div>
        <div className="user--match--container"></div>
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
