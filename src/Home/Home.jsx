import Product from "../Product/Product";
import Searchbar from "../Searchbar/Searchbar";
import Show from "../Show/Show";


import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
          <br/>
            <Searchbar></Searchbar><br/><br/>
            <Slider></Slider>
            <Product></Product>
            <Show></Show>
            
    
            
        </div>
    );
};

export default Home;