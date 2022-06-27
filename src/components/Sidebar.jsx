import React from 'react'
import {BiHome} from 'react-icons/bi'
import {GrFavorite} from 'react-icons/gr'
import {MdOutlineUpcoming} from 'react-icons/md'

const Sidebar = () => {
  return (
    <div className='w-50 bg-zinc-700 py-3'>
        <div>
            <article className='flex items-center gap-x-2 text-zinc-200 py-1 px-5 rounded-l cursor-pointer hover:bg-black hover:text-indigo-700 hover:border-l-2 hover:border-indigo-700'>
                <BiHome />
                <h2>Discover</h2>
            </article>
        </div>
        <div>
        <article className='flex items-center gap-x-2 text-zinc-200 py-1 px-5 rounded-l cursor-pointer hover:bg-black hover:text-indigo-700 hover:border-l-2 hover:border-indigo-700'>
                <MdOutlineUpcoming />
                <h2>New Releases</h2>
            </article>
        </div>
        <div>
        <article className='flex items-center gap-x-2 text-zinc-200 py-1 px-5 rounded-l cursor-pointer hover:bg-black hover:text-indigo-700 hover:border-l-2 hover:border-indigo-700'>
                <GrFavorite />
                <h2>Upcoming</h2>
            </article>
        </div>
        <div>
        <article className='flex items-center gap-x-2 text-zinc-200 py-1 px-5 rounded-l cursor-pointer hover:bg-black hover:text-indigo-700 hover:border-l-2 hover:border-indigo-700'>
                <GrFavorite />
                <h2>Favorites</h2>
            </article>
        </div>
        <div className=''>
            Genre
        </div>
        <div className=""  >
<p>Action</p>
<p>Documentary</p>
<p>Comedy</p>
<p>Horror</p>


        </div>
    </div>
  )
}

export default Sidebar