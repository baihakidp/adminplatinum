import axios from "axios";

export const authAction = (payload) => (dispatch) => {
  dispatch({
    type: "LOGIN",
    payload: true,
  });
};

export const Searchinput = (Name) => (Dispatch) => {
   const token = localStorage.getItem('token')

   const config = {
       headers: {
        access_token: token,
       }
   }

   axios
   .get(`https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?name=${Name}`, config)
   .then((res) => {
     console.log(res.data.cars)
     Dispatch({
       type: "Filter_Search",
       payload: res.data.cars,
     })
   })
}