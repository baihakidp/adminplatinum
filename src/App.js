import { Route, Routes } from "react-router-dom";
import ListCars from "./pages/CarList";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/carlist" element={<ListCars />} />
    </Routes>
  );
}

export default App;
