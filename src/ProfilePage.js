
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileList from './ProfileList';
import { getFishList } from './services/fetch-utils';

export default function ProfilePage() {
  const [fish, setFish] = useState([]);
  const { id } = useParams(); 
  
  async function refreshFishList(){
    const myFishList = await getFishList(id);
    setFish(myFishList);
  }

  useEffect(() => {
    refreshFishList();
  }, []);//eslint-disable-line


  return (
    <div>ProfilePage
      <p>My favorites</p>
      <ProfileList fishes={fish} refreshFishList={refreshFishList}/>
    </div>
  );
}
// add a back button