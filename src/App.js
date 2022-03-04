/* general imports */
import './App.css';
import { Routes, Route } from "react-router-dom";
/* component import section */
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import BeersPage from './components/BeersPage/BeersPage';
import RandomBeersPage from './components/RandomBeersPage/RandomBeersPage';
import NewBeerPage from './components/NewBeerPage/NewBeerPage';
import SingleBeer from './components/BeersPage/SingleBeer';


function App() {

  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/beers' element={<BeersPage />} />
          <Route path='/random-beer' element={<RandomBeersPage />} />
          <Route path='/new-beer' element={<NewBeerPage />} />
          <Route path="beers/:id" element={ <SingleBeer /> } />

      </Routes>
    </div>
  );
}

export default App;
