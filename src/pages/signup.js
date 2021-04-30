import { format } from 'date-fns';
import {useState, useContext, useEffect} from 'react';
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import *as ROUTES from '../constants/routes'
import {doesUsernameExist} from '../services/firebase';

export default function SignUp(){
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleSignUp= async (event) => {
            event.preventDefault();
            
            const usernamedoesntExists = await doesUsernameExist(username);
            if (!usernamedoesntExists.length) {
                try{
                    const createdUserResult = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(emailAddress, password);

                    await createdUserResult.user.updateProfile({
                        displayName: username
                    });

                    await firebase.firestore().collection('users').add({
                        userId: createdUserResult.user.uid,
                        username: username.toLowerCase(),
                        fullName,
                        emailAddress: emailAddress.toLowerCase(),
                        following: [],
                        followers: [],
                        dateCreated: Date.now()
                    });

                    history.push(ROUTES.DASHBOARD);
                }   catch (error){
                    setFullName('');
                    setEmailAddress('');
                    setPassword('');
                    setUsername('');
                    setError(error.message);
                }
            }else {
                setFullName('');
                setEmailAddress('');
                setPassword('');
                setUsername('');
                setError('username exist ples chose anthour one');
            }
            // try{
            // } catch (error){
            // }
    };

    useEffect(() => {
        document.title = 'Sign Up - Camagru';
    }, [])
    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-2/5">
              <img src="/images/sideimage.jpg" alt="iPhone with Instagram app" />
            </div>
            <div className="flex flex-col w-2/5">
                <h1 className="flex justify-center w-full">
                    <img src="/images/logo.png" alt="Camagru" className="mt-2 w-5/12 mb-4"/>
                </h1>
                <div className="flex flex-col bg-blue-meduim w-full  py-2 px-2 rounded mb-2 border border-blue-primary">
                {error && <p className="flex justify-center mb-4 text-xs text-red-primary">{error}</p>}
                <form onSubmit={handleSignUp} method="POST">
                    <input
                        aria-label = "Entre your username"
                        type="text"
                        placeholder="Username"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-1 bg-blue-meduim border border-blue-primary rounded mb-2"
                        onChange={({ target }) => setUsername(target.value)}
                        value={username}
                    />
                    <input
                        aria-label = "Entre your full name"
                        type="text"
                        placeholder="Full Name"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-1 bg-blue-meduim border border-blue-primary rounded mb-2"
                        onChange={({ target }) => setFullName(target.value)}
                        value={fullName}
                    />
                    <input
                        aria-label = "Entre your email address"
                        type="text"
                        placeholder="Email Address"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-1 bg-blue-meduim border border-blue-primary rounded mb-2"
                        onChange={({ target }) => setEmailAddress(target.value)}
                        value={emailAddress}
                    />
                    <input
                        aria-label = "Entre your password"
                        type="password"
                        placeholder="Password"
                        className="text-sm text-gray-baht w-full mr-3 py-5 px-4 h-2 bg-blue-meduim border border-blue-primary rounded mb-2"
                        onChange={({ target }) => setPassword(target.value)}
                        value={password}
                    />
                    <div className="flex justify-between flex-row  w-full">
                         <button disabled={isInvalid} type="submit" 
                              className={`bg-blue-lighter text-white w-2/5 rounded h-8 font-bold border border-blue-primary
                              ${isInvalid && 'opacity-50'}`}
                              >
                              Sign Up</button>
                              <Link to="/forgetpassword" className="text-xs text-blue-lighter">Forget password?</Link>
                    </div>
                </form>
                </div>
                <div className="flex flex-col justify-center items-center bg-blue-meduim border border-blue-primary w-full  py-2 px-2 rounded mb-2">
                    <p className="text-xm text-blue-primary">I have an account{` `}
                    <Link to={ROUTES.LOGIN} className="font-bold text-blue-lighter text-blue-500">LogIn</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};