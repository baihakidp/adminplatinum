export const authAction = (payload) => (dispatch) => {
  dispatch({
    type: "LOGIN",
    payload: true,
  });
};
