import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUnoFish } from './services/fetch-utils';
import MyTable from './MyTable';

import React from 'react';

export default function DetailFish() {

  const params = useParams();
  const [fish, setfish] = useState({
    'Species Illustration Photo': {}
  });
    
  useEffect(() => {
    async function fetchSingleFish(name) {
      const data = await fetchUnoFish(name);
      setfish(data[0]);
    }
    fetchSingleFish(params.name);
  }, []); 
  
  function createMarkup(prop) {
    return { __html: prop };
  }
  
  function MyComponent({ prop }) {
    return <div dangerouslySetInnerHTML={ createMarkup(prop) } />;
  }
  return (
    <div>
      <h1>{fish['Species Name']}</h1>
      <h2>{fish['Scientific Name']}</h2>
      <img className="fish-pic" src={fish['Species Illustration Photo'].src}/>
      <div>Biology: {<MyComponent prop={fish.Biology}/>}</div>
      <div>Habitat: {<MyComponent prop={fish.Habitat}/>}</div>
      <div>Nutritional facts: 
        <MyTable
          servingWeight={fish['Serving Weight']}
          totalFats={fish['Fat, Total']}
          protein={fish.Protein}
          cholesterol={fish.Cholesterol}
          sodium={fish.Sodium}/>
        <MyComponent prop={fish.Taste}/>
        <MyComponent prop={fish.Texture}/>
      </div>
      <div>Sustainability:
        <p>{fish.Quote}</p>
        <MyComponent prop={fish.Harvest}/>
      </div>
    </div>
  );
}

