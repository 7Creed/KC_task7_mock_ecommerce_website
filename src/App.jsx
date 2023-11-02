import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import DetailProduct from "./component/DetailProduct";
import SinglePage from "./pages/SinglePage";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/products/:id" element={<SinglePage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  )
}