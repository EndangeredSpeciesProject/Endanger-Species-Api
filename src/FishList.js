import { useState, useEffect } from 'react';
import { getAllFish } from './services/fetch-utils';
import './App.css';
import { Link, useParams } from 'react-router-dom';

export default function FishList() {
  const params = useParams();
  useEffect (() => {

    async function fetchFish() { const data = await getAllFish();
      console.log(data); 
      setFishes(data);
    }
    fetchFish();
  }, []);


  const [fishes, setFishes] = useState([]);

  return (
    <div>
      {
        fishes.map((fish, i) => 
          <Link to={`fish/:${fish['Species Name']}`} key={fish + i}>
            <p >{fish['Species Name']}</p>
            <img className="fish-pic" src={fish['Species Illustration Photo'].src}/> 
          </Link>
        )
      }
    </div>
  );
}