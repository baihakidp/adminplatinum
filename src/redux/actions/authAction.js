import axios from "axios";

export const authAction = (payload) => (dispatch) => {
  axios
    .post("https://bootcamp-rent-cars.herokuapp.com/admin/auth/login", payload)
    .then((res) => {
      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("email", res.data.email);
      dispatch({
        type: "LOGIN",
        payload: true,
      });
    })
    .catch((err) => console.log(err));
};
