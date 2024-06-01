
import '../Searchbar/Searchbar.css'
const Searchbar = () => {
    return (
        <div className='ooo'>
      <span className='searchs'>  Search: </span> <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xl" />&nbsp;<input className=" btn btn-outline btn-warning pppp" type="submit"></input>
        </div>
    );
};

export default Searchbar;