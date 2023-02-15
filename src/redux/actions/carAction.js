import axios from "axios"

export const Deletecars = (id) => (Dispatch) => {
    const token = localStorage.getItem('token')

    const config = {
        headers: {
            access_token: token,
        }
    }
    axios
    .delete(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config)
    .then((res) => {
        console.log(res.data)
        Dispatch({
            type: "Delete_Cars",
            payload: res.data,
        })
        alert('Delete berhasil...')
    })
    
    
}

export const Postcar = (formdata) => (Dispatch) => {
  const token = localStorage.getItem('token');

  const config = {
      headers: {
        access_token: token,
      }
  }

  axios
  .post('https://bootcamp-rent-cars.herokuapp.com/admin/car', formdata, config)
  .then((res) => {
     console.log(res)
     Dispatch({
        Type: "Post_newcar",
        payload: res.data
     })
  })
}

export const Editmycar = (id, formdata) => (Dispatch) => {
  const token = localStorage.getItem('token');
  
  const config = {
    headers: {
        access_token: token,
    }
  }

  axios
  .put(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, formdata, config)
  .then((res) => {
    console.log(res)
    Dispatch({
        type: "Edit_Content",
        payload: res.data
    })
  })
}