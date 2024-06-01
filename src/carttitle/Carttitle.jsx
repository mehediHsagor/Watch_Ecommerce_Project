/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import "./Carttitle.css";
import { useEffect, useState } from "react";
import ff from "../carttitle/delete.png";

const CartTitle = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        const response = await fetch("http://localhost:5000/carts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCarts(data);
      } catch (error) {
        console.error("Failed to fetch carts:", error);
      }
    };
    fetchCarts();
  }, []);

  const handleDelete = async (_id) => {
    console.log(_id);
    try {
      const response = await fetch(`http://localhost:5000/delete-item/${_id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.deletedCount > 0) {
        setCarts(carts.filter((cart) => cart._id !== _id));
      }
    } catch (error) {
      console.error("Failed to delete cart item:", error);
    }
  };

  return (
    <div className="cart-container mx-auto items-center justify-center ml-80">
      <table className="cart-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart, index) => (
            <tr key={cart._id}>
              <td>
                <label>{index + 1}</label>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12 mx-10">
                      <img
                        src={cart.image_url}
                        alt={cart.name}
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td className="mx-30">{cart.name}</td>
              <td className="mx-60">${cart.price}</td>
              <td>
                <button
                  onClick={() => handleDelete(cart._id)}
                  className="btn btn-ghost btn-lg text-white"
                >
                  <img src={ff} alt="Delete" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTitle;
