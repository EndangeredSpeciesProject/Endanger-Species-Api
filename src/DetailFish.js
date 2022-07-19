import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUnoFish } from './services/fetch-utils';

import React from 'react';

export default function DetailFish() {

  const params = useParams();
  const [fish, setfish] = useState({});
    
  useEffect(() => {
    async function fetchSingleFish(name) {
      const data = await fetchUnoFish(name);
      console.log(data[0]);
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
      <img src={fish['Species Illustration Photo'].src}/>
      <div>Biology: {<MyComponent prop={fish.Biology}/>}</div>
      <div>Habitat: {<MyComponent prop={fish.Habitat}/>}</div>
      <div>Nutritional facts: 
        <p>Cholesterol: {fish['Cholesterol']}</p>
        <p>Serving Weight: {fish['Serving Weight']}</p>
      </div>
    </div>
  );
}

