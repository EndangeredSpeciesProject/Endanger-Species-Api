import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import React from 'react';

export default function DetailFish() {
  const params = useParams();
  const [fish, setfish] = useState({});
    
  useEffect(() => {
    async function fetchSingleFish(name) {
      const data = await fetchUnoFish(name);
      setfish(data);
    }
    fetchSingleFish(params['Species Name']);
  }, []);
  return (
    <div>DetailFish</div>
  );
}

