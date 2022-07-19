import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUnoFish, addToFishList } from './services/fetch-utils';
import MyTable from './MyTable';

import React from 'react';

export default function DetailFish() {

  const params = useParams();
  const [fish, setfish] = useState({
    'Species Illustration Photo': {}
  });

  function handleAddToFavs() {
    addToFishList(fish);
  }
    
  useEffect(() => {
    async function fetchSingleFish(name) {
      const data = await fetchUnoFish(name);
      setfish(data[0]);
    }
    fetchSingleFish(params.name);
  }, []);//eslint-disable-line 
  
  function createMarkup(prop) {
    return { __html: prop };
  }
  
  function MyComponent({ prop }) {
    return <div dangerouslySetInnerHTML={ createMarkup(prop) } />;
  }
  return (
    <div className='detailFish'>
      <button className='button'onClick={handleAddToFavs}>Add to your favorites/watchlist</button>
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
          sodium={fish.Sodium}/>
        <MyComponent className='DSIH-data' prop={fish.Taste}/>
        <MyComponent className='DSIH-data' prop={fish.Texture}/>
      </div>
      <div className='sustainability'>Sustainability:
        <p>{fish.Quote}</p>
        <MyComponent className='DSIH-data' prop={fish.Harvest}/>
      </div>
    </div>
  );
}

