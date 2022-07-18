import { useState, useEffect } from 'react';

import { getAllFish } from './services/fetch-utils';

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
          <p key={fish + i}>{fish.Sodium}</p>
        )
      }
    </div>
  );
}