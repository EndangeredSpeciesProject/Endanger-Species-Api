import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUnoFish, addToFishList, removeFromFishList, getFishList } from './services/fetch-utils';
import MyTable from './MyTable';
import Spinner from './Spinner';
//how do we check that this fish is on the users favorites?

import React from 'react';

export default function DetailFish() {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [check, setCheck] = useState([]);
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
      const data = await getFishList();
      setCheck(data);
    }
    async function fetchSingleFish(name) {
      setLoading(true);
      const data = await fetchUnoFish(name);
      setfish(data[0]);
      setLoading(false);
    }
    fetchSingleFish(params.name);
    checkIt();
  }, [params.name]);
  
  function createMarkup(prop) {
    return { __html: prop };
  }

  function MyComponent({ prop }) {
    return <div dangerouslySetInnerHTML={ createMarkup(prop) } />;
  }
  return loading ? <Spinner /> : 
    <div className='detailFish'>
      {check.find(item => item['Scientific Name'] === fish['Scientific Name']) ? <><button onClick={handleRemove}>Remove</button> <button>You ate this</button></> : <button className='button'onClick={handleAddToFavs}>Add to your favorites/watchlist</button>}
      <h1 className='header-1'>{fish['Species Name']}</h1>
      <h2 className='header-2'>{fish['Scientific Name']}</h2>
      <img className="fish-pic" src={fish['Species Illustration Photo'].src}/>
      <div className='bio'>Biology: {<MyComponent prop={fish.Biology}/>}</div>
      <div className='habitat'>Habitat: {<MyComponent prop={fish.Habitat}/>}</div>
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

        <MyComponent className='DSIH-data' prop={fish.Taste}/>
        <MyComponent className='DSIH-data' prop={fish.Texture}/>
      </div>
      <div className='sustainability'>Sustainability:
        <p>{fish.Quote}</p>
        <MyComponent className='DSIH-data' prop={fish.Harvest}/>
      </div>
    </div>;
}

