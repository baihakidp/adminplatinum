import { Route, Routes } from "react-router-dom";
import ListCars from "./pages/CarList";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import Addcar from "./pages/Addcar";
import Editcar from "./pages/Editcar";
import ProtectedRoute from "./hoc/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/carlist" element={<ListCars />} />
        <Route path="/Addcar" element={<Addcar />} />
        <Route path="/Editcar/:id" element={<Editcar />} />
      </Route>
      <Route path="/" element={<LoginPage to="/" />} />
      <Route path="/admin-login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
