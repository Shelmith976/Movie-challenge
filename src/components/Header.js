import {BsCameraVideo,BsSearch,BsGear} from 'react-icons/bs'
import React from "react";
// import Axios from "axios";


// const [searchQuery, updateSearchQuery] = useState("");

// const [movieList, updateMovieList] = useState([]);

// const fetchData = async (searchString) => {
//   const response = await Axios.get(
//     `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
//   );
//   updateMovieList(response.data.Search);
// };

const Header = () => {
  return (
    <div className='h-16 bg-indigo-500 flex items-center justify-between px-5'>
        <div className='text-zinc-100 flex items-center gap-x-1 text-xl' >
            <BsCameraVideo />
            <h2 className='uppercase'>media hd</h2>
        </div>
        <div className='flex items-center gap-x-1 text-zinc-300'>
            <BsSearch />
            <input type="text" placeholder='Search ...' className='rounded py-1 px-3 focus:outline-none bg-inherit' />
        </div>
        <div className='flex items-center gap-x-3 text-zinc-300' >
            <BsGear className='text-2xl' />
            <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
            className='rounded-full h-10 w-10' />
        </div>
        
    </div>
  )
}

export default Header