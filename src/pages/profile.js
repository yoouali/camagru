import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/routes';
import Header from '../components/header';
import { doesUsernameExist } from '../services/firebase';
import UserProfile from '../components/profile';

export default function Profile() {
    const { username} = useParams();
    const [userExists, setUserExists] = useState(false);
    const [user, setUser] = useState(false);
    const history = useHistory();

    useEffect(() => {
        async function checkUserExists() {
            const user = await getUserByUsername(username);
            if (user.length > 0) {
                setUser(user[0]);
                setUserExists(true);
            } else {
                setUserExists(false);
                history.push(ROUTES.NOT_FOUND);
            }
        }
        checkUserExists();
    }, [username, history ]);

    return userExists ? (
        <div className="bg-blue-lighter">
        <Header />
        <div className="mx-auto max-w-screen-lg">
          <UserProfile user={user} />
        </div>
      </div>
    ) : null;
}