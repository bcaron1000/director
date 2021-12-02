import Image from 'next/image'
// new stuff
import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from 'libs/firebase';
import { useAuth } from 'libs/hooks/useAuth';
import { GoogleAuthProvider, signInWithPopup} from '@firebase/auth';

import { ProviderButton } from "ui/buttons";
import google from "./google.png";

function GoogleProvider({ children,  ...props }) {
  //set to null it will be changed with the return of sign in with pop up
  const [isValidUser, setIsValidUser] = useState(null);
  const user = useAuth();
  const router = useRouter();
  const provider = new GoogleAuthProvider();

  async function signIn(){
    setIsValidUser(await signInWithPopup(auth, provider))
  }
  function handleClick(){
    signIn()
  }

  if(isValidUser){
    router.push('/todo')
  }
  return (
    <ProviderButton  onClick={handleClick}{...props}>
      <div>
        <Image
          src={google}
          layout="fixed"
          width={24}
          height={24}
          quality={30}
        />
        <span>{children}</span>
      </div>
    </ProviderButton>
  );
}

export default GoogleProvider;
