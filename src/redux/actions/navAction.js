export const navAction = (payload) => (dispatch) => {
  dispatch({
    type: "NAVIGATE",
    payload: payload,
  });
};
