import { useRouter } from "next/router";
import useInput from "../hooks/useInput";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useLocalStorage from "../hooks/useLocalStorage";

function SearchBar() {
  const router = useRouter();
  const [nickname, handleNickname] = useInput("");

  const search = async () => {
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
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useLocalStorage(nickname);
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
