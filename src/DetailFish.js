import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUnoFish, addToFishList, removeFromFishList, getFishList, getUser } from './services/fetch-utils';
import MyTable from './MyTable';
import Spinner from './Spinner';
import Accordion from './Accordion';

import { addEaten } from './services/fetch-utils';
//how do we check that this fish is on the users favorites?

import React from 'react';

export default function DetailFish() {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [check, setCheck] = useState([]);
  const [user, setUser] = useState({});
  const [fish, setfish] = useState({
    'Species Illustration Photo': {}
  });
  
  function refreshPage() {
    window.location.reload(false);
  }

  function handleAddToFavs() {
    addToFishList(fish);
    setTimeout(() => {
      refreshPage();
    }, '250');
  }

  function handleRemove() {
    removeFromFishList(fish);
    setTimeout(() => {
      refreshPage();
    }, '250');
  }

  useEffect(() => {
    async function checkIt() {
      const data = await getFishList(user.id);
      setCheck(data);
    }
    if (user.id) checkIt();
  }, [user]);

  useEffect(() => {
    async function fetchUser() {
      const data = await getUser();
      setUser(data);
    }
    fetchUser();
    async function fetchSingleFish(name) {
      setLoading(true);
      const data = await fetchUnoFish(name);
      setfish(data[0]);
      setLoading(false);
    }
    fetchSingleFish(params.name);
  }, [params.name]);//eslint-disable-line
  

  async function handleAddEaten() {
    await addEaten(fish);

  }

  return loading ? <Spinner /> : 
    <div className='detailFish'>
      {check && check.find(item => item['Scientific Name'] === fish['Scientific Name']) ? <div className='buttonz'><button className='button' onClick={handleRemove}>Remove</button> <button className='button' onClick={handleAddEaten}>You ate this</button></div> : <button className='button'onClick={handleAddToFavs}>Add to your favorites/watchlist</button>}
      <h1 className='header-1'>{fish['Species Name']}</h1>
      <h2 className='header-2'>{fish['Scientific Name']}</h2>
      <img className="fish-pic" src={fish['Species Illustration Photo'].src}/>
      <Accordion fish={fish}/>

      <div className='table-div'>
        <MyTable className='table'
          servingWeight={fish['Serving Weight']}
          totalFats={fish['Fat, Total']}
          protein={fish.Protein}
          cholesterol={fish.Cholesterol}
          sodium={fish.Sodium}
          calories={fish.Calories}
          carbohydrate={fish.Carbohydrate}
          fiber={fish['Fiber,Total Dietary']}
          sugar={fish['sugars.Total']}
        
        />
      </div>
      
    </div>;
}

