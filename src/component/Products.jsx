import { useEffect, useState } from "react";
import { BsCart4, BsStarFill, BsStar } from "react-icons/bs";

import axios from "../api/axios";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../utils/context";
// import Modal from "./Modal";

const Products = () => {
  const { state, dispatch } = useGlobalContext();
  const [dots, setDots] = useState("");

  // const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);

  console.log(state);

  const getAllProducts = async () => {
    dispatch({ type: "LOADING" });

    try {
      const res = await axios.get();
      console.log(res);
      // if (res.status === 200) setProducts(res.data);
      if (res.status === 200) {
        const localData = JSON.parse(localStorage.getItem("data"));
        if (localData) {
          dispatch({ type: "GET_PRODUCTS", payload: localData });
        } else {
          localStorage.setItem("data", JSON.stringify(res.data));
        }
        dispatch({ type: "GET_PRODUCTS", payload: res.data });
        dispatch({ type: "NOT_LOADING" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

    // Loading...
    useEffect(() => {
      const intervalId = setInterval(() => {
        setDots((prevDots) => {
          if (prevDots.length < 3) {
            return prevDots + ".";
          } else {
            return "";
          }
        });
      }, 500);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);

  const addCart = (item) => {
    let isInCart = state.cart?.some((prev) => prev.id === item.id);
    if (!isInCart) {
      dispatch({ type: "ADD_CART", payload: item });
    }
  };

  return (
    <div className="bg">
      {state.isLoading ? (
        <p className="text-center text-2xl font-bold py-32">
          Loading<span className="inline-bloc w-[100px]">{dots}</span>
        </p>
      ) : (<div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-5 w-[95%] mx-auto py-24">
        {state.products?.map((item) => {
          const { id, title, price, description: desc, image, rating } = item;
          const displayTitle = title.split(" ").slice(0, 5).join(" ");
          return (
            <div key={id} className="">
              <div className="bg-white pt-5 px-3 h-[100%] shadow-xl shadow-amber-200">
                <div className="image w-full">
                  <img
                    src={image}
                    alt={desc}
                    className="w-full h-40 object-contain"
                  />
                </div>
                <div className="text-lg py-4">
                  <h2 className="font-bold leading-5 pb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                    {displayTitle}
                  </h2>
                  <h3 className="">Price: ${price}</h3>
                  <h3 className="">Rating: {rating.rate}</h3>
                  <p className="flex items-center">
                    {[...Array(Math.floor(rating.rate))].map((item, idx) => (
                      <BsStarFill key={idx} className="text-orange-500" />
                    ))}
                    {[...Array(5 - Math.floor(rating.rate))].map(
                      (item, idx) => (
                        <BsStar key={idx} className="text-orange-500" />
                      )
                    )}
                  </p>
                  <div className="flex items-center justify-between py-3">
                    <Link
                      to={`/products/${id}`}
                      className="text-sm text-blue-400"
                    >
                      See Details
                    </Link>
                    <button
                      className="flex items-center gap-2 py-2 px-3 text-white text-sm bg-amber-900 rounded-lg"
                      onClick={() => addCart(item)}
                    >
                      <BsCart4 />
                      <span className="">Add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div>state.</div> */}
      </div>)}

    </div>
  );
};

export default Products;
