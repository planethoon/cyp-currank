import { useRouter } from "next/router";
import useInput from "../hooks/useInput";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  const router = useRouter();
  const [nickname, handleNickname] = useInput("");

  const search = () => {
    router.push(`/user/${nickname}`);
  };

  return (
    <div className="searchbar--container">
      <input
        type="text"
        onChange={handleNickname}
        value={nickname}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            search();
          }
        }}
      />
      <div className="searchbar--btn" onClick={search}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
}

export default SearchBar;
