import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// components
import UserInfo from "../../components/user/UserInfo";
import UserSummary from "../../components/user/UserSummary";
import Widget from "../../components/Widget";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

// custom hooks
import { useModal } from "../../hooks/useModal";
import UserMatch from "../../components/user/UserMatch";
import useNicknameRouter from "../../hooks/useNickname";
import UserGameType from "../../components/user/UserGameType";
import useGameTypeHandle from "../../hooks/useGameTypeHandle";

export async function getServerSideProps(context) {
  const host = context.req.headers.host;
  return { props: { host } };
}

export default function UserPageSlug({ host }) {
  const { nickname } = useNicknameRouter();
  const [gameType, changeToRating, changeToNormal] = useGameTypeHandle();
  const [isOpen, switchModal, closeModal] = useModal();

  return (
    <div className="user--background">
      <div className="user--container">
        <UserInfo nickname={nickname} host={host} switchModal={switchModal} />
        <UserSummary gameType={gameType} />
        <UserGameType
          gameType={gameType}
          changeToRating={changeToRating}
          changeToNormal={changeToNormal}
        />
        <UserMatch gameType={gameType} />
      </div>
      {isOpen && (
        <div className={`user--widget--background`}>
          <div className={`user--widget--container`}>
            <div className="user--widget--btn" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <span>미리보기</span>
            <Widget nickname={nickname} />
          </div>
        </div>
      )}
    </div>
  );
}

UserPageSlug.checkSubLayout = function checkSubLayout(page) {
  return (
    <div>
      <Header />
      {page}
      <Footer />
    </div>
  );
};
