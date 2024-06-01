
import './Contact.css'

import { FaAddressBook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const Contact = () => {
    return (

        <div className='flex contacts '>
       
      
        <div className='mt-16 contactmain'>
        
                   <div>
                   <FaAddressBook></FaAddressBook>
                      
                        <h2 className='number text-3xl' > Address</h2>  <p className='address text-xl'>Jhikorgacha ,jashore</p>
                 </div>
                 <div >

                 <FaPhone></FaPhone>
                 </div>
                
                    <div >
                      
                      <h1 className='number text-3xl' >phone number</h1>  
                       <p className='address text-xl'>01797566358</p>
                     </div>
                    <div>
                        <MdEmail></MdEmail>
                     <h2 className='number text-3xl' >Email</h2>  
                      <p className='address text-xl'>mehedisagor2001@gmail.com</p>
                     </div>
     
                 </div>
       
        <div className='mt-12 former justify-items-end'>
        <div className="text-center lg:text-left">
    <h1 className="text-xl text-center text-white font-bold">Send Message</h1>

    </div>
<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
<form className="card-body">
  <div className="form-control">
    <label className="label">
      <span className="label-text">Full name</span>
    </label>
    <input type="text" placeholder="Name" className="input input-bordered" required />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Email</span>
    </label>
    <input type="email" placeholder="Email" className="input input-bordered" required />
   
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Send Message</span>
    </label>
    <input type="text" placeholder="Send Message" className="input input-bordered" required />
   
  </div>
  <div className="form-control mt-6">
    <button className="btn btn-primary">Submit</button>
  </div>
</form>
</div>
</div>
    
          
        </div>
    );
};

export default Contact;

