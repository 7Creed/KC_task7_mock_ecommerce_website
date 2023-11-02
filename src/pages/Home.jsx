import React from "react";
import NavBar from "../component/NavBar";
import Products from "../component/Products";

const Home = () => {
  return (
    <div className="">
        <NavBar />
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <Products />
    </div>
  );
};

export default Home;
