import React from 'react';
import Moviecard from './Moviecard';

const Movielists=({arr})=>{
    return(
        <div className='grid grid-cols-3 gap-5 md:grid-cols-4 xl:grid-cols-5 bg-zinc-800'>
            {
                arr?.map(movie => (
                    <Moviecard movie={movie} />
                ))
            }
        </div>
    );
};

    export default Movielists;