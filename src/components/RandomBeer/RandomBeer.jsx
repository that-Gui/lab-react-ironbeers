import React from 'react';
import { Link } from 'react-router-dom';
import randobeer from '../../assets/random-beer.png';

function Beers() {
 
 
  return (
    <div>
        <Link to={'/random-beer'}>
           <img src={randobeer} alt='house pic' />
           <h3>Random Beer</h3>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, vel soluta quidem, dignissimos omnis asperiores nisi unde similique id hic, ex odio quia quod in maxime minus sunt. Voluptatibus, minus!</p>
        </Link>
    </div>
  )
}

export default Beers