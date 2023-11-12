import React from "react";
import propTypes from "prop-types";

import AuthHeader from "../AuthHeader";
import { Link, useLocation } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      <section className="min-h-screen border-[20px] border-amber-950">
        <div className="bg min-h-[96vh]">
          <div className="w-[85%] mx-auto">
            <AuthHeader />
            <div>AuthLayout</div>
            <div className="bg-white p-8 rounded-[20px] mt-5">{children}</div>
            <div className="flex justify-center text-center my-6">
              {/* <Link to="/login">
                <button
                  className={`${
                    pathname === "/signup"
                      ? "bg-amber-800 text-white"
                      : "bg-white"
                  } border w-full font-medium text-xl py-2 border-[#fff959] hover:bg-[] rounded-[20px]`}
                >
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button
                  className={`${
                    pathname === "/login"
                      ? "bg-amber-800 text-white"
                      : "bg-white"
                  } border w-full font-medium text-xl py-2 border-[#fff959] hover:bg-[] rounded-[20px]`}
                >
                  Sign Up
                </button>
              </Link> */}

              <Link
                to="/login"
                className={`${
                  pathname === "/login" ? "bg-amber-800 text-white" : "bg-white"
                } border w-full font-medium text-xl py-2 border-[#fff959] hover:bg-[] rounded-[20px]`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={`${
                  pathname === "/signup"
                    ? "bg-amber-800 text-white"
                    : "bg-white"
                } border w-full font-medium text-xl py-2 border-[#fff959] hover:bg-[] rounded-[20px]`}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

AuthLayout.propTypes = {
  children: propTypes.any,
};

export default AuthLayout;
