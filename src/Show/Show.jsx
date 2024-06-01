/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import Showwatches from "../Showwatches/Showwatches";

import '../Show/Show.css';
const Show = () => {

    const [carts ,setcarts]=useState([]);
   useEffect(()=>{


    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setcarts(data))


   },[])
 console.log(carts)
    return (
        <div  className="shoss   p-5 m-10 gap-7">
            {

              carts?.map(cart=>  <Showwatches  key={cart?.id}  cart={cart}></Showwatches> )
            }
        

        </div>
      
    );
};

export default Show;