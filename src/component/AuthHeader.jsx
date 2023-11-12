import React from "react";
import { Link } from "react-router-dom";

const AuthHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">
          <h1 className="">Mock</h1>
        </Link>
        <div>AuthHeader</div>
      </div>
    </>
  );
};

export default AuthHeader;
