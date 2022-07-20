import { useState, useEffect } from 'react';
import { getAllFish } from './services/fetch-utils';
import './App.css';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

export default function FishList() {
  const [loading, setLoading] = useState(false);
  const [fishes, setFishes] = useState([]);
  
  useEffect (() => {
    setLoading(true);
    async function fetchFish() { const data = await getAllFish();
      setFishes(data);
      setLoading(false);
    }
    fetchFish();
  }, []);


  

  return loading ? <Spinner /> :
    <div className='fish-list'>
      {
        fishes.map((fish, i) => 
          <Link className='fish-div' to={`fish/${fish['Species Name']}`} key={fish + i}>
            <p >{fish['Species Name']}</p>
            <img className="fish-pic" src={fish['Species Illustration Photo'].src}/> 
          </Link>
        )
      }
    </div>;
}
