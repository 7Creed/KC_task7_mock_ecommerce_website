import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import { BsFillStarFill, BsStar, BsStarFill } from "react-icons/bs";

const DetailProduct = () => {
  const [product, setProduct] = useState({});

  const items = useParams();

  console.log(items);
  console.log("items");

  const getProducts = async () => {
    // setIsLoading(true);
    try {
      const response = await axios.get(`/${items.id}`);
      // console.log("I am called");
      // console.log(response);
      if (response.status === 200) {
        setProduct(response.data);
        // setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(product);
  const { image, title, description, category, price } = product;

  return (
    <div className="flex items-center justify-center h-screen">
      {/* {product && ( */}
      <div className="flex justify-center border rounded-md p-4">
        <div className="p-4">
          <img
            src={image}
            alt={description}
            className="h-auto max-h-72 w-full object-scale-down"
          />
        </div>
        <div className="">
          <p className="font-bold pb-2">{title}</p>
          <p className="">{category}</p>
          <p className="text-red-700">$ {price}</p>
          <h3 className="">Rating: {product?.rating?.rate}</h3>
          <p className="flex items-center pb-4 border-b-2">
            {/* {[...Array(Math.floor(product?.rating?.rate))]?.map((item, idx) => (
              <BsStarFill key={idx} className="text-orange-500" />
            ))}
            {[...Array(5 - Math.floor(product?.rating?.rate))]?.map(
              (item, idx) => (
                <BsStar key={idx} className="text-orange-500" />
              )
            )} */}
          </p>
          <p className="py-3">
            <span className="block font-bold underline">Description</span>
            {description}
          </p>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default DetailProduct;
