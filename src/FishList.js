import { useState, useEffect } from 'react';

import { getAllFish } from './services/fetch-utils';

export default function fishList() {
  async function fetchFish() { const data = await getAllFish();
    console.log(data); }
    
  fetchFish();
  const [fish, setFish] = useState([]);

  return (
    <div>
    </div>
  );
}