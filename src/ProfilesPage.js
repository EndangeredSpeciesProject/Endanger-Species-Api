import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProfiles } from './services/fetch-utils';
import Spinner from './Spinner';

export default function ProfilesPage() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetch() {
      const data = await fetchProfiles();
      setProfiles(data);
    }
    fetch();
    setLoading(false);
  }, []);


  return (
    <div className='friends'>
      {
        loading ? <Spinner/> : <ul>
          {
            profiles.map((profile) =>
              <Link key={profile.user_id}
                to={`/profile-page/${profile.user_id}`}>
                <li>{profile.email}</li>
              </Link>  
            )
          }
        </ul>
      }
    </div>
  );
}
