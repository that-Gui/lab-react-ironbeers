import React from 'react';
import { Link } from 'react-router-dom';
import newBeer from '../../assets/new-beer.png';

function Beers() {
 
 
  return (
    <div>
        <Link to={'/new-beer'}>
           <img src={newBeer} alt='house pic' />
           <h3>New Beer</h3>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, vel soluta quidem, dignissimos omnis asperiores nisi unde similique id hic, ex odio quia quod in maxime minus sunt. Voluptatibus, minus!</p>
        </Link>
    </div>
  )
}

export default Beers