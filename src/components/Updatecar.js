import "../components/Updatecar.css"
import { FiChevronRight } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";
const Updatecar = () => {
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
              <input type={"name"} placeholder="Input Nama/Tipe Mobil" className="input-add"/>
            </div>

            {/* batas */}
             
            <div className="div-input">
              <label className="label-add">Harga</label>
              <input type={"name"} placeholder="Input Harga Sewa Mobil" className="input-add1"/>
            </div>

             {/* batas-batas */}

             <div className="div-input-file">
                <label className="label-add">Foto</label>
                <input type={'file'} className="input-file" />
             </div>

             {/* batas */}

             <div className="div-input">
                <label className="label-add">Kategori</label>
                <select className="select-add">
                  <option>Pilih Kategori Mobil</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
             </div>

             {/* batas */}

         </div>
        </div>
    );
}
 
export default Updatecar;