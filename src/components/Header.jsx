import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="header--title">
      <div className="header--logo">
        <Logo width="180px" height="55px" />
      </div>
      <div className="header--searchbar">
        <SearchBar />
      </div>
      <div className="header--menu"></div>
    </div>
  );
}
