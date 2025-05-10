import  { useState } from "react";
import NewCart from "./cartTable";
import { useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const getCart = async () => {
      try {
        const res = await axios.get("https://ochii-3.onrender.com/api/auth/usercart", {
        withCredentials: true 
      });

        setCart(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCart();
  }, []);

  return (
    <>
      
      <div className="overflow-x-auto mt-52 mb-20">
        <h1 className="text-5xl text-center mb-8">My Cart</h1>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          {cart.map((item) => (
            <NewCart key={item.id} item={item} />
          ))}
        </table>
      </div>
    </>
  );
};

export default Cart;
