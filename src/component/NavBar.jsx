import { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useGlobalContext } from "../utils/context";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [accountModal, setAccountModal] = useState(false);
  const { state, dispatch } = useGlobalContext();

  const handleAccountModal = () => {
    setAccountModal(!accountModal);
  };

  const handleModal = () => {
    dispatch({ type: "OPEN_MODAL" });
  };

  return (
    <div className="bg-white fixed top-0 left-0 right-0 w-full shadow-xl z-10">
      <div className="w-[95%] mx-auto py-5 text-xl flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">
          <h1 className="">Mock</h1>
        </Link>
        <div className="flex justify-between items-center gap-5">
          <div
            className=""
            // onMouseEnter={() => setAccountModal(true)}
            // onMouseLeave={() => setAccountModal(false)}
          >
            <button className="flex items-center" onClick={handleAccountModal}>
              Account{" "}
              <span className="text-3xl">
                <RiArrowDropDownLine />
              </span>
            </button>
            {accountModal && (
              <div className="absolute flex flex-col bg-gray-200 text-base md:text-lg w-[19%] md:w-[10%] lg:w-[8%] items-start p-[5px] md:py-4 md:pl-2 rounded-lg">
                <button className="">Login</button>
                <button className="">Sign Up</button>
              </div>
            )}
          </div>
          <button
            className={`${
              state.cart.length > 0 && "text-yellow-500"
            } text-3xl relative`}
            onClick={handleModal}
          >
            <BsCart4 />
            <div className="absolute -top-5 -right-2 px-2 py-1 text-base bg-red-600 rounded-full">
              {state.cart.length}
            </div>
          </button>
        </div>
      </div>
      {state.modal && <Modal />}
    </div>
  );
};

export default NavBar;
