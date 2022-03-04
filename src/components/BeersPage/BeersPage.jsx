import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
/*  section for importing components */
import NavBar from '../NavBar/NavBar';

function BeersPage() {
const [beers, setBeers] = useState([]);

useEffect(() => {
    
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then((response) =>{
    setBeers(response.data)}).catch((err) =>
        console.log(err));
}, []);


    return (
    <div>
        <NavBar />
        <h1>Beers Page</h1>
        <div>
        {beers && beers.map((el) =>
        <div >
            <Link to={`/beers/${el._id}`}>
            <img src={el.image_url} alt="beerpic" />
            <h3>{el.name}</h3>
            <h5>{el.tagline}</h5>
            <p>Created by: {el.contributed_by}</p>
            </Link>
        </div>
        )} 
        </div>
    </div>
  )
};

export default BeersPage