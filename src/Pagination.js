import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';


export default function Pagination({ currentPage, setCurrentPage, fishes, lastPage }) {
  return (


    <div>
      <p>Current Page:</p>
      {fishes.map((fish, i) => 
        <Link className='fish-div' to={`fish/${fish['Species Name']}`} key={fish + i}>
          <p >{fish['Species Name']}</p>
          <img className="fish-pic" src={fish['Species Illustration Photo'].src}/> 
        </Link>
      )
      }
      <button className='button' disabled={currentPage <= 0} onClick={() => setCurrentPage(currentPage - 1)}>Previous Page</button>
      <button className='button' disabled={ currentPage >= lastPage } onClick={() => setCurrentPage(currentPage + 1)}>Next Page</button>
    </div>
  );
}
