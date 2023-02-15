import { Route, Routes } from "react-router-dom";
import ListCars from "./pages/CarList";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import Addcar from "./pages/Addcar";
import Editcar from "./pages/Editcar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/carlist" element={<ListCars />} />
      <Route path="/Addcar" element={<Addcar/>}/>
      <Route path="/Editcar/:id" element={<Editcar/>}/>
    </Routes>
  );
}

export default App;
