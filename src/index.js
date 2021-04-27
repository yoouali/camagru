import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import {FieldValue, firebase} from './lib/firebase';
import './styles/app.css';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
  <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// clien side renderer app: react (cra)
  // -> database wich is firebase
  // -> react-loading-skeleton
  // tailwind

//architecture
  // -> components
  // -> constants
  // -> context
  // -> helpers
  // -> hooks
  // -> pages
  // -> lib (firebase is going to live in here)
  // -> services (firebase functions in here)
  // -> styles (tailwind's folder (app/tailwind))