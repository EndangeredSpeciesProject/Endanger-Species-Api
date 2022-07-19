import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfileList({ fishes }) {

  return (
    <div> 
      {
        fishes.map((fish, i) => 
          <Link className='fish-div' to={`fish/${fish['Species Name']}`} key={fish + i}>
            <p >{fish['Species Name']}</p>
            <img className="fish-pic" src={fish['Species Illustration Photo'].src}/> 
          </Link>
        )
      }
    </div>
  );
}


