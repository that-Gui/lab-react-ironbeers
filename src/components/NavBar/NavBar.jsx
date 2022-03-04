import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
       <Link to={'/'}>
           <img src='https://cdn-icons-png.flaticon.com/512/25/25694.png' alt='house pic' />
        </Link>
    </div>
  )
}

export default NavBar