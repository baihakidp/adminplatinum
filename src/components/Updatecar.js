import "../components/Updatecar.css"
import { FiChevronRight } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Postcar } from "../redux/actions/carAction";
import rootReducer from "../redux/reducers";
import { Link, useNavigate } from "react-router-dom";

const Updatecar = () => {
     const [name, setname] = useState('');
     const [harga, setharga] = useState('');
     const [photo, setphoto] = useState(null);
     const [cat, setcat] = useState(null);
     const Dispatch = useDispatch();
     const navigate = useNavigate('');
     const {Newcar} = useSelector((rootReducer) => rootReducer.reduceCar)

     
     const Handlename = (e) => {
       setname(e.target.value)
     }

     const Handleprice= (e) => {
       setharga(e.target.value)
     }

     const Handleimage = (e) => {
      setphoto(e.target.files[0])
     }

     const Handlecategory = (e) => {
       setcat(e.target.value)
     }

     console.log(name)
     console.log(harga)
     console.log(photo)
     console.log(cat)

     const HandleSavebutton = () => {
        const formdata = new FormData();
        formdata.append('name', name)
        formdata.append('category', cat)
        formdata.append('price', harga)
        formdata.append('image', photo)

        Dispatch(Postcar(formdata))

        if(Newcar) {
          alert('Mobil berhasil ditambahkan..')
          navigate('/carlist')
        }
     }

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
            <p className="addnewcar">Add New Car</p>
          </div>

          {/* batasan */}

          <div className="div-Addnewcar">
           <p>Add New Car</p>
          </div>

            {/* input-Add car */}

         <div className="div-inputcarAdd">
            <div className="div-input">
              <label className="label-add">Nama/Tipe Mobil</label>
              <input type={"name"} placeholder="Input Nama/Tipe Mobil" className="input-add" onChange={Handlename}/>
            </div>

            {/* batas */}
             
            <div className="div-input">
              <label className="label-add">Harga</label>
              <input type={"name"} placeholder="Input Harga Sewa Mobil" className="input-add1" onChange={Handleprice}/>
            </div>

             {/* batas-batas */}

             <div className="div-input-file">
                <label className="label-add">Foto</label>
                <input type={'file'} className="input-file" onChange={Handleimage} />
             </div>

             {/* batas */}

             <div className="div-input">
                <label className="label-add">Kategori</label>
                <select className="select-add" onChange={Handlecategory}>
                  <option>Pilih Kategori Mobil</option>
                  <option>small</option>
                  <option>medium</option>
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
            <Link to={"/carlist"}>
            <button className="button-cancel">Cancel</button> 
            </Link>
            <button className="button-save" onClick={HandleSavebutton}>Save</button>
          </div>
        </div>
    );
}
 
export default Updatecar;