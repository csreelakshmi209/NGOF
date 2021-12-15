import axios from "axios";

// action for login
export const loginAction = (user) => (dispatch) => {
  axios
    .post("http://localhost:8080/login", user)
    .then((res) =>
      dispatch({
        type: "LOGIN",
        payload: res.data,
      })
    )
    .catch((error) => {
      // console.log(error.response.data.message);
      dispatch({
        type: "ERR_RES",
        payload: error.response.data.message,
      });
    });
};
export const logoutAction = (username) => async (dispatch) => {
  const result = await axios.patch(`http://localhost:8080/logout/${username}`);
  console.log(result);
  const res = result.data;
  res.errMsg = "";
  dispatch({
    type: "LOGOUT",
    payload: res,
  });
};