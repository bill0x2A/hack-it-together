import * as React from 'react';
import { Button } from '@chakra-ui/react';
import { useFirebase } from '../context/firebase';
import firebaseAuth from 'firebase/auth';
import { auth as authUI } from 'firebaseui';

const SignInWithGithub: React.FC = () => {
    const firebaseApp = useFirebase();
    const ui = new authUI.AuthUI(firebaseAuth.auth())
    const signIn = () => {

    };

    return <Button onClick={signIn}>Sign In With Github</Button>
}