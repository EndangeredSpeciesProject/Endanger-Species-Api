import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProfiles } from './fetch-utils';
import Spinner from '../Spinner';


export default function ProfilesPage() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setProfiles(fetchProfiles);
    setLoading(false);
  }, []);

  return (
    <div>
      {
        loading ? <Spinner/> : <ul>



          {
            profiles.map((profile) =>
              <Link key={profile.user_id}
                to={`/favorites/${profile.user_id}`}>
                <li>{profile.email}</li>
              </Link>     
            )
          }
        </ul>
      }
    </div>
  );
}
