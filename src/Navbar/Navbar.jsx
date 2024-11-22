import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
     <div>
        <nav>
            <ul className='flex gap-2 p-3 bg-gray-400 shadow-lg'>
                 <Link to='/comment'>
                 <li>comment</li>
                 </Link>
               <Link to='/post'>
               <li>post</li>
               </Link>
                <Link to='/profile'>
                <li>profile</li>
                </Link>
            </ul>
        </nav>
     </div>
  )
}

export default Navbar