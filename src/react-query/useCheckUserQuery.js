import { useQuery } from "react-query";

function useCheckUserQuery(nickname) {
  const config = {
    queryKey: ["check", nickname],
    queryFn: async () => {
      const res = await fetch(`/api/checkUser/${nickname}`);
      const json = await res.json();
      return json;
    },
  };
  return useQuery(config);
}

export default useCheckUserQuery;
