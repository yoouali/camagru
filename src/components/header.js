import { useContext } from 'react';
import FirebaseContext from '../context/firebase';
import UserContext from '../context/user';
import * as ROUTES from '../constants/routes';

export default function Header () {
    const { firebase } = useContext(FirebaseContext);
    const { user } = useContext(UserContext);

    console.log('user', user);

    return (
        <header className="h-16 bg-blue-lighter border-b border-blue-primary mb-8">
            <div className="container mx-auto max-w-screen-lg  h-full">
                <div className="flex justify-between h-full">
                    <div className="text-"></div>
                </div>
            </div>
        </header>
    );
}