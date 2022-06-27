import { FirebaseApp } from 'firebase/app';
import { createContext, useContext } from 'react';
import { app } from '../config/firebase';

const FirebaseContext = createContext<FirebaseApp>(app);

export const FirebaseProvider = FirebaseContext.Provider;
export const useFirebase = () => useContext(FirebaseContext);
