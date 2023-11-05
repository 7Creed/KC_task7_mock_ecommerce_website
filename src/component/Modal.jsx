import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsPlusLg, BsDashLg } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { removeCart } from "../utils/cartUtils";


import { useGlobalContext } from "../utils/context";

const Modal = () => {
  const { state, dispatch } = useGlobalContext();

  const handleCloseModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const removeCart = (item) => {
    dispatch({ type: "REMOVE_CART", payload: item });
  };

  const subtotal = () => {
    const total = state.cart.reduce((acc, cur) => {
      return acc + cur.price * cur.qty;
    }, 0);
    return total.toFixed(2)
  };

  // useEffect(() => {
  //   const calculatedSubtotal = subtotal(); // Calculate the subtotal
  //   dispatch({ type: "SET_SUBTOTAL", payload: calculatedSubtotal });
  // }, [subtotal, dispatch]);

  return (
    <div className="absolute top-0 left-0 right-0 w-full z-40">
      <div className="flex min-h-screen">
        <div className="hidden md:block bg-black text-white lg:w-2/5 md:w-1/5 bg-opacity-70"
        onClick={handleCloseModal}
        ></div>

        <div className="bg text-white opacity-100 w-full md:w-4/5 p-5 lg:w-3/5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl text-black font-bold">
              Cart ({state.cart.length})
            </h2>
            <AiOutlineClose
              className="text-[#eb1414] text-3xl"
              onClick={handleCloseModal}
            />
          </div>

          <div className="flex flex-col md:grid grid-cols-5 gap-4 h-[90vh] overflow-y-auto">
            <div className="cart w-full md:h-[100vh] col-span-3">
              <div className="grid place-items-center gap-10">
                {state.cart.length > 0 ? (
                  state.cart.map((item) => {
                    const {
                      id,
                      title,
                      price,
                      description: desc,
                      image,
                      rating,
                      qty,
                      // subtotal,
                    } = item;
                    const displayTitle = title.split(" ").slice(0, 8).join(" ");

                    return (
                      <div
                        key={id}
                        className="bg-white bg-opacity-100 custom-opaque-background pt-5 px-3 h-[100%] w-full z-50 rounded-xl"
                      >
                        <div className="image w-full">
                          <img
                            src={image}
                            alt={desc}
                            className="w-full h-40 object-contain"
                          />
                        </div>
                        <div className="text-black text-lg py-4">
                          <h2 className="w-full font-bold leading-5 pb-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-[340px]">
                            {displayTitle}
                          </h2>
                          <h3 className="">Price: ${price * qty}</h3>
                          <Link
                            to={`/products/${id}`}
                            className="text-sm text-blue-400"
                            onClick={handleCloseModal}
                          >
                            See Details
                          </Link>
                          <div className="flex items-center justify-between py-3">
                            <button
                              className="flex items-center gap-2 py-2 px-3 text-white text-sm bg-amber-900 rounded-lg"
                              onClick={() => removeCart(item)}
                            >
                              {/* <BsCart4 /> */}
                              <span className="">Remove</span>
                            </button>
                            <div className="flex items-center gap-4">
                              <button
                                className={`${
                                  qty === 1
                                    ? "bg-amber-950 opacity-50"
                                    : "bg-amber-950"
                                } text-white p-2 cursor-pointer flex items-center justify-center rounded-full`}
                                onClick={() =>
                                  dispatch({ type: "DECREMENT", payload: item })
                                }
                              >
                                <BsDashLg className="text-base" />
                              </button>
                              <p className="">{qty}</p>
                              <button
                                className="bg-amber-950 text-white p-2 cursor-pointer flex items-center justify-center rounded-full"
                                onClick={() =>
                                  dispatch({ type: "INCREMENT", payload: item })
                                }
                              >
                                <BsPlusLg className="text-base" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div>NO ITEM</div>
                )}
              </div>
            </div>

            {state.cart.length > 0 && (
              <div className="summary w-full bg-white h-[20vh] px-3 col-span-2">
                <h2 className="text-lg text-black font-bold py-2">
                  CART SUMMARY
                </h2>
                <hr />
                <h2 className="flex justify-between text-lg text-black font-bold py-2 opacity-80">
                  <span className="">Subtotal</span>
                  <span className="">${subtotal()}</span>
                </h2>
                <hr />
                <div className="py-2">
                  <button className="flex justify-center w-full text-base text-white font-extrabold py-2 bg-amber-700 rounded-xl">
                    CHECKOUT (${subtotal()})
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
