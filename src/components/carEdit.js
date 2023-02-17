import "../components/Updatecar.css"
import { FiChevronRight } from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Editmycar } from "../redux/actions/carAction";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import rootReducer from "../redux/reducers";
import { useEffect } from "react";
import axios from "axios";

const CarEdit = () => {
  const [Name, setName] = useState('');
  const [Harga, setHarga] = useState('');
  const [img, setimg] = useState(null);
  const [cat, setcat] = useState(null);
  const {id} = useParams();
  const Dispatch = useDispatch('');
  const navigate = useNavigate('');
  const {Edit} = useSelector((rootReducer) => rootReducer.reduceCar)

  useEffect(() => {
    Handlerefresh();
  }, [])
  
  useEffect(() => {
    Handlerefresh();
  },[Edit])

 const Handlerefresh = () => {
  const token = localStorage.getItem('token');

  const config = {
    headers: {
      access_token: token,
    }
  }

  axios
  .get('https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?name=Innova&page=1&pageSize=10', config)
  .then((res) => {
    console.log(res)
  }).catch((err) => err.message)
}
  
  const HandleNama = (e) => {
    setName(e.target.value)
  }
  const Handleprice = (e) => {
    setHarga(e.target.value)
  }

  const HandleGambar = (e) => {
     setimg(e.target.files[0])
  }

  const Handlecategori = (e) => {
    setcat(e.target.value)
  }
 
  const HandlebuttonEdit = () => {
    const formdata = new FormData();
    formdata.append("name", Name)
    formdata.append("price", Harga)
    formdata.append("category", cat)
    formdata.append('image', img)

    Dispatch(Editmycar(id, formdata))

   
   if(Edit) {
      navigate('/carlist')
    }
  }

  console.log(Name)
  console.log(Harga)
  console.log(img)
  console.log(cat)

  // console.log(Edit)

    return (
        <div className="div-update">
        <div className="bread-crumb-add">
           <p className="Cars-add">Cars</p>
           <p className="Chevron-add">
          <FiChevronRight />
          </p>
          <p className="list-cars-add">List Cars</p>
          <p className="Chevron-add">
          <FiChevronRight />
          </p>
          <p className="addnewcar">Edit Car</p>
        </div>

        {/* batasan */}

        <div className="div-Addnewcar">
         <p>Edit Car</p>
        </div>

          {/* input-Add car */}

       <div className="div-inputcarAdd">
          <div className="div-input">
            <label className="label-add">Nama/Tipe Mobil</label>
            <input type={"name"} placeholder="Input Nama/Tipe Mobil" className="input-add" onChange={HandleNama}/>
          </div>

          {/* batas */}
           
          <div className="div-input">
            <label className="label-add">Harga</label>
            <input type={"name"} placeholder="Input Harga Sewa Mobil" className="input-add1" onChange={Handleprice}/>
          </div>

           {/* batas-batas */}

           <div className="div-input-file">
              <label className="label-add">Foto</label>
              <input type={'file'} className="input-file" onChange={HandleGambar}/>
           </div>

           {/* batas */}

           <div className="div-input">
              <label className="label-add">Kategori</label>
              <select className="select-add" onChange={Handlecategori}>
                <option>Pilih Kategori Mobil</option>
                <option>small</option>
                <option>Medium</option>
                <option>large</option>
              </select>
           </div>

           {/* batas */}

          <div className="created-at">
             <p>Created at</p>
          </div>

        {/* batasan */}

          <div className="created-at">
             <p>Update at</p>
          </div>
       </div>

      {/* div untuk button */}
        <div className="div-button-add">
        <Link to={'/carlist'}>
          <button className="button-cancel">Cancel</button> 
        </Link>
          <button className="button-save" onClick={HandlebuttonEdit}>Save</button>
        </div>
      </div>
    );
}
 
export default CarEdit;