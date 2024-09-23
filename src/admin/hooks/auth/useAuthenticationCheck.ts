import React from "react";
import { useDispatch } from "react-redux";
import { useGetMeQuery } from "../../../features/auth/auth";
import { loginState, logout } from "../../../features/auth/auth-slice";

/**
 * @description Custom hook to check if authentication is done
 * @returns {} isLoggedIn
 */

export interface AuthProps {
  isChecked: boolean;
}

function useAuthCheck(): AuthProps {
  // * action dispatcher
  const dispatch = useDispatch();

  // * get user id from cookie
  const authToken = localStorage.getItem("etl-auth-token");

  //* token do not exits
  if (!authToken) dispatch(logout());

  // * get updated auth slice
  const { data, status, isLoading, isFetching } = useGetMeQuery(null, {
    skip: !authToken,
    refetchOnMountOrArgChange: true,
  });

  // * authentication check status
  const [isChecked, setIsChecked] = React.useState(false);

  // * see auth check status
  React.useEffect(() => {
    if (!isLoading && !isFetching && status !== "pending") {
      setIsChecked(true);
      dispatch(
        loginState({
          user: data?.user,
          token: data?.token,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, isLoading, isFetching, data?.data?.token]);

  // * return the authentication check status
  return { isChecked };
}

export default useAuthCheck;
