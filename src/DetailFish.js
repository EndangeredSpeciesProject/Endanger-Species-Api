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
    <div className='detailFish'>
      <h1>{fish['Species Name']}</h1>
      <h2>{fish['Scientific Name']}</h2>
      <img className="fish-pic" src={fish['Species Illustration Photo'].src}/>
<<<<<<< HEAD
      <div className='bio'>Biology: {<MyComponent prop={fish.Biology}/>}</div>
      <div className='habitat'>Habitat: {<MyComponent prop={fish.Habitat}/>}</div>
      <div>Nutritional facts: 
        <p>Serving Weight: {fish['Serving Weight']}</p>
        <p>Total fats: {fish['Fat, Total']}</p>
        <p>Protein: {fish.Protein}</p>
        <p>Cholesterol: {fish['Cholesterol']}</p>
        <p>Sodium: {fish.Sodium}</p>
        <MyComponent className='taste' prop={fish.Taste}/>
        <MyComponent className='texture' prop={fish.Texture}/>
=======
      <div>Biology: {<MyComponent prop={fish.Biology}/>}</div>
      <div>Habitat: {<MyComponent prop={fish.Habitat}/>}</div>
      <div>
        <MyTable
          servingWeight={fish['Serving Weight']}
          totalFats={fish['Fat, Total']}
          protein={fish.Protein}
          cholesterol={fish.Cholesterol}
          sodium={fish.Sodium}/>
        <MyComponent prop={fish.Taste}/>
        <MyComponent prop={fish.Texture}/>
>>>>>>> 7e7ecdef2f49aef25081e0fe7f9cb56061bffb37
      </div>
      <div className='sus'>Sustainability:
        <p>{fish.Quote}</p>
        <MyComponent className='harvest' prop={fish.Harvest}/>
      </div>
    </div>
  );
}

