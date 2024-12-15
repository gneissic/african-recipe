import { getAuth, GoogleAuthProvider } from 'firebase/auth';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDB8W86CAoeasKgzmWglmOXRQJreQBnI-8',
  authDomain: 'african-recipe-e04e8.firebaseapp.com',
  databaseURL: 'https://african-recipe-e04e8-default-rtdb.firebaseio.com',
  projectId: 'african-recipe-e04e8',
  storageBucket: 'african-recipe-e04e8.appspot.com',
  messagingSenderId: '78809690794',
  appId: '1:78809690794:web:626e141832bcd722f856d3',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };
