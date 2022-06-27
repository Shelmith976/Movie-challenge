import React from 'react';
const Moviecard = ({movie}) => {
    return (
        <div className='py-2 px-4 rounded hover:border hover:shadow-sm'>
            <img src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`} alt={movie.title} className='self-center w-430 rounded-sm ' />
            <h2 className='text-zinc-300 text-sm mt-2 '>{movie.title}</h2>
            <h5>Vote average:{movie.vote_average}</h5>
            {/* <p className='bg-gray-600'>Overview:{movie.overview}</p> */}
            <p>Release Date:{movie.release_date}</p>
            {/* <h6>{movie.vote_count}</h6> */}
        </div>
    );
};

export default Moviecard;