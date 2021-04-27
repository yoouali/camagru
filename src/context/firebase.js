import {createContext} from 'react';

const FirebaseContext = createContext(null);

export default FirebaseContext;


// provider--------component 1---------- (firebase init in here)
// --------component 2----------
// --------component 3----------
// consumer--------component 4---------- (firebase init in here)
// --------component 5----------
// --------component 6----------
// consumer--------component 7---------- (firebase init in here)