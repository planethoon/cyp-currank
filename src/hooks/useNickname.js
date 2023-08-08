import { useRouter } from "next/router";

function useNicknameRouter() {
  const router = useRouter();

  return router.query;
}

export default useNicknameRouter;
