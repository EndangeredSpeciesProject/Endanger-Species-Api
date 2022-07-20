import { useState, useEffect } from 'react';
import { getAllFish } from './services/fetch-utils';
import './App.css';
import Spinner from './Spinner';
import Pagination from './Pagination';

export default function FishList() {
  const [loading, setLoading] = useState(false);
  const [fishes, setFishes] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const perPage = 25;


  
  useEffect (() => {
    setLoading(true);
    async function fetchFish() { const data = await getAllFish();
      const from = page * perPage - perPage;
      const to = page * perPage;
      const fish = await getAllFish(from, to);

      setFishes(fish);
      setTotal(data.count);
      setLoading(false);
    }
    fetchFish();
  }, [page]);



  const lastPage = Math.floor(total / perPage);

  return loading ? <Spinner /> :
    <div className='fish-list'>
      {
        <Pagination 
          fishes={fishes} 
          currentPage={page} 
          setCurrentPage={setPage} 
          lastPage={lastPage} />
      }
    </div>;
}
