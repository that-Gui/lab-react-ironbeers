import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams, useSearchParams } from 'react-router-dom';
/*  section for importing components */
import NavBar from '../NavBar/NavBar';


function SingleBeer() {
    let { id } = useParams();
    const [singleBeer, setSingleBeer] = useState(null)

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`).then((response) =>{
            setSingleBeer(response.data)}).catch((err) =>
            console.log(err));
    }, [id]);


    return (
    <div>
        <NavBar />
        <h1>Beer Detail Page</h1>
        {singleBeer && <div>
            <img src={singleBeer.image_url} alt="beerpic" />
            <h3>{singleBeer.name}</h3>
            <h5>{singleBeer.tagline}</h5>
            <p>1st brewed: {singleBeer.first_brewed}</p>
            <p>{singleBeer.attenuation_level}</p>
            <p>{singleBeer.description}</p>
            <p>Created by: {singleBeer.contributed_by}</p>
        </div>}
    </div>
  )
}

export default SingleBeer