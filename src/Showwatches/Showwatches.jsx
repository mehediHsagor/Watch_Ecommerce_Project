/* eslint-disable react/prop-types */

import './Showwatchs.css'
import axios from 'axios';

const Showwatches = ({cart}) => {
  const addToCart=async(cart)=>{

   console.log(cart);
    const res= await axios.post('http://localhost:5000/carts',cart);
    console.log(res.data);
    
  
  }

  return (  
    <div className="opop  ">
      <div className=" card card-compact w-96 h-5/6 shadow-xl">
        <figure>
          <img className='img'
            src={cart.image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title ">{cart.name}</h1>
          <h2 className='brand'>Brand:{cart.brand}</h2>
          <h2 className='prices'>Price:{cart.price}</h2>
          <div className="card-actions justify-end">
            <button onClick={()=>addToCart(cart)} className="btn btn-primary bootn">Add to cart</button>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Showwatches;
