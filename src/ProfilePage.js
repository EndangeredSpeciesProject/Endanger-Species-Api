
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileList from './ProfileList';
import { getAllFish, getFishList } from './services/fetch-utils';

export default function ProfilePage() {
  const [fish, setFish] = useState([]);
  const { id } = useParams(); 
  
  async function refreshFishList(){
    const myFishList = await getFishList(id);
    console.log(myFishList);
    setFish(myFishList);
  }

  useEffect(() => {
    refreshFishList();
  }, []);


  return (
    <div>ProfilePage
      <p>My watch List</p>
      <ProfileList fish={fish} refreshFishList={refreshFishList}/>
    </div>
  );
}
// add a back button