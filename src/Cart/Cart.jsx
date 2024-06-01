/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";
import ff from "../carttitle/delete.png";
import { Link } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
const Cart = () => {
  const [carts, setcarts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/carts")
      .then((res) => res.json())
      .then((data) => setcarts(data));
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
        setcarts(carts.filter((cart) => cart._id !== _id));
      }
    } catch (error) {
      console.error("Failed to delete cart item:", error);
    }
  };
  return (
    <div className="cart-container mx-auto items-center justify-center ml-80">
    <table className="cart-table">
      <thead>
        <tr className="bg-blue-100">
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

    <div className="p-7 m-10 ">
   
<button className="btn btn-outline mx-5 btn-primary">Payment</button>
<button className="btn btn-outline mx-5 btn-secondary"> <Link to="/addproduct">Add Product</Link></button>
<button className="btn btn-outline mx-5 btn-accent">Return Product</button>
    </div>
  </div>
  );
};

export default Cart;
