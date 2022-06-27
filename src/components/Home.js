import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addMovies } from '../features/movies/movieSlice';
import Movielists from './Movielists';
import Sidebar from './Sidebar';
import Header from './Header';


// function Movies(){
// const key ='e36d136286caab4f10d61215e05eff82'
// const baseURL=`https://developers.themoviedb.org/3/trending/movie/week?api_key=`;
// const [arr, setArr]=useState ([]);
// useEffect (()=>{

//     axios.get(`${baseURL}`+`${key}`)
//     .then ((res) => setArr(res.data.results))
// }, [])
// console.log(arr)

// return(ss
//     <div className="home">

//     </div>


const Home = () => {
    // const config = {
    // headers: {=usesta
    //   "Access-Control-Allow-Origin": "*",
    //   "Content-Type": "text/plain",
    // },
    //};

    // const [arr, setArr]=useState([]);
    const arr = useSelector((state) => state.movies)
    const dispatch = useDispatch();
    // const movietext = "Hustle";

    console.log(arr)
    useEffect(() => {

        const fetchMovies = async () => {
            // axios.create({
            //     baseURL: "https://api.themoviedb.org/3/trending/movie/week",
            //     https: config,
            //       }
            //   );
            const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=e36d136286caab4f10d61215e05eff82`).catch((err) => {
                console.log("Err:", err);
            });
            console.log(response.data.results)
            // setArr(response.data.results);
            dispatch(addMovies(response.data.results))



        };
        fetchMovies();
    }, [dispatch]
    );
    // console.log(arr)

    return (
    <div className='flex flex-col'>
        <Header 
        
        />
        <div className='flex'>

        <Sidebar />
        <Movielists arr={arr} />
        </div>
    </div>

    );
};
export default Home;

