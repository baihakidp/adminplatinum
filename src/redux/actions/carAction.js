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