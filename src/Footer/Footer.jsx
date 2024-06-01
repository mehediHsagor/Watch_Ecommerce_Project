
import './Footer.css'
import logo4 from '../Footer/facebook.png';
import logo5 from '../Footer/instagram.png';

import logo6 from '../Footer/linkedin.png';
import logo7 from '../Footer/twitter.png';
const Footer = () => {
    return (
        <div>

<footer className="footer">
    
       <div className=" flex m-5 mmmmmmm ">
         <div className="">
           <h4>company</h4>
           <ul className='m-5'>
             <li><a href="#">about us</a></li>
             <li><a href="#">our services</a></li>
             <li><a href="#">privacy policy</a></li>
             <li><a href="#">affiliate program</a></li>
           </ul>
         </div>
         <div className="">
           <h4>get help</h4>
           <ul className='m-5'>
             <li><a href="#">FAQ</a></li>
             <li><a href="#">shipping</a></li>
             <li><a href="#">returns</a></li>
             <li><a href="#">order status</a></li>
             <li><a href="#">payment options</a></li>
           </ul>
         </div>
         <div className="">
           <h4>online shop</h4>
           <ul className='m-5'>
             <li><a href="#">watch</a></li>
             <li><a href="#">bag</a></li>
             <li><a href="#">shoes</a></li>
             <li><a href="#">dress</a></li>
           </ul>
         </div>
         <div className="">
           <h4>follow us</h4>
           <div className='m-5'>
           <div className="social-links">
          <img src={logo4}></img>
          <img src={logo5}></img>
          <img src={logo6}></img>
          <img src={logo7}></img>
          </div>

           </div>
         </div>
       </div>

     <br/>
     <p className='copy'>sagor&copy;copyright</p> 
  </footer>
 
         
            </div>
    );
};

export default Footer;