import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams, useSearchParams } from 'react-router-dom';
/*  section for importing components */
import NavBar from '../NavBar/NavBar';


function RandomBeersPage() {
    /* let { id } = useParams(); */
    const [randomBeer, setRandomBeer] = useState(null)

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then((response) =>{
          setRandomBeer(response.data)}).catch((err) =>
            console.log(err));
    }, []);


    return (
    <div>
        <NavBar />
        <h1>Random Beer Page</h1>
        {randomBeer && <div>
            <img src={randomBeer.image_url} alt="beerpic" />
            <h3>{randomBeer.name}</h3>
            <h5>{randomBeer.tagline}</h5>
            <p>1st brewed: {randomBeer.first_brewed}</p>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>Created by: {randomBeer.contributed_by}</p>
        </div>}
    </div>
  )
}

export default RandomBeersPage