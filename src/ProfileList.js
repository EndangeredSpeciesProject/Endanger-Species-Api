import React from 'react';
import { useLocation } from 'react-router-dom';
import ProfilePage from './ProfilePage';

export default function ProfileList({ fish }) {

  return (
    <div> 
      {
        fish.map((fishes, i) => <div key={fishes.Species + i}>
          {fishes.Species}
        </div>)
      }
    </div>
  );
}


