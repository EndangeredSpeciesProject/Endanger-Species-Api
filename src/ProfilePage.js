
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileList from './ProfileList';
import { getFishList } from './services/fetch-utils';
import Spinner from './Spinner';

export default function ProfilePage() {
  const [loading, setLoading] = useState(false);
  const [fish, setFish] = useState([]);
  const { id } = useParams(); 
  
  async function refreshFishList(){
    const myFishList = await getFishList(id);
    setFish(myFishList);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    refreshFishList();
  }, [id]);//eslint-disable-line


  return (
    <div>ProfilePage
      <p>My favorites</p>
      {loading 
        ? <Spinner /> 
        : <ProfileList fishes={fish} refreshFishList={refreshFishList}/>}
    </div>
  );
}
// add a back button