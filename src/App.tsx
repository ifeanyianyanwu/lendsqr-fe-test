import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { DashBoard, Login } from "./pages";
function App() {
  return (
    <div className="App">
      <Navigate to="/login" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
