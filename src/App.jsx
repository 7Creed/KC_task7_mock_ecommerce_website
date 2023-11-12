import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import DetailProduct from "./component/DetailProduct";
import SinglePage from "./pages/SinglePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/products/:id" element={<SinglePage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}
