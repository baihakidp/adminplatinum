import { useParams } from "react-router-dom";
import Layoutwrapper from "../components/Layoutwrapper";
import CarEdit from "../components/carEdit";
const Editcar = () => {
    return (
        <Layoutwrapper>
            <CarEdit/>
        </Layoutwrapper>
    );
}
 
export default Editcar;