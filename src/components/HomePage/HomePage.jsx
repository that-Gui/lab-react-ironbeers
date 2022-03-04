import React from 'react';
/*  section for importing components */
import NavBar from '../NavBar/NavBar';
import Beers from '../Beers/Beers';
import RandomBeer from '../RandomBeer/RandomBeer';
import NewBeer from '../NewBeer/NewBeer';

function HomePage() {
  
  
  return (
    <div>
        <NavBar /> 
        <Beers />
        <RandomBeer />
        <NewBeer />
    </div>
  )
}

export default HomePage