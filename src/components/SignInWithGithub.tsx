import * as React from 'react';
import { Button, Center, Image, Text } from '@chakra-ui/react';
import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';

interface User {
    displayName: string;
    imageUrl: string;
}

const SignInWithGithub: React.FC = () => {

    const [user, setUser] = React.useState<User>();

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                if (res
                        && res.user
                        && res.user.displayName
                        && res.user.photoURL) {
                    setUser({
                        displayName: res.user.displayName,
                        imageUrl: res.user.photoURL,
                    })
                }
            })
            .catch(alert);
    };

    if(user) {
        return <Center>
            <Image
                borderRadius={'1000px'}
                width={'50px'}
                marginRight={'10px'}
                src={user.imageUrl}></Image>
            <Text>{user.displayName}</Text>
        </Center>;
    } else {
        return <Button onClick={signIn}>Sign In With Github</Button>
    }
}

export default SignInWithGithub;
