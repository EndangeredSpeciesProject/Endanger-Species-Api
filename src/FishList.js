import { useState, useEffect } from 'react';
import { getAllFish } from './services/fetch-utils';
import './App.css';

export default function FishList() {
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
          <div key={fish + i}>
            <p >{fish['Species Name']}</p>
            <img className="fish-pic" src={fish['Species Illustration Photo'].src}/> 
          </div>
        )
      }
    </div>
  );
}