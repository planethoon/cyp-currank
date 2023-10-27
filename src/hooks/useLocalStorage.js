export default async function useLocalStorage(nickname) {
  const local = await localStorage.getItem("cypgg");
  const history = JSON.parse(local);
  let newHistory;
  if (!local) {
    // 로컬에 아무것도 없을 경우
    newHistory = [nickname];
  } else if (!history.includes(nickname)) {
    // 히스토리가 있긴한데, 검색한 닉네임이 없는 경우

    newHistory = [nickname, ...history];
  } else {
    // 히스토리가 있고, 검색한 닉네임도 있는 경우

    const filteredHistory = history.filter((e) => {
      if (e === nickname) {
        return false;
      }
      return true;
    });
    newHistory = [nickname, ...filteredHistory];
  }

  if (newHistory.length > 5) {
    newHistory.pop();
  }

  localStorage.setItem("cypgg", JSON.stringify(newHistory));
}
