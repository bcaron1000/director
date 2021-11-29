import Image from "next/image";

import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from 'libs/firebase';
import { useAuth } from 'libs/hooks/useAuth';
import { GithubAuthProvider, signInWithPopup} from '@firebase/auth';

import { ProviderButton } from "ui/buttons";

import github from "./github.png";

function GitHubProvider({ children, ...props }) {
  const user = useAuth();
  const router = useRouter();
  const provider = new GithubAuthProvider();
  const [isValidUser, setIsValidUser] = useState(null);


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
    <ProviderButton  onClick={handleClick}>
      <div>
        <Image
          src={github}
          layout="fixed"
          width={24}
          height={24}
          quality={30}
        />
        <span> {children}</span>
      </div>
    </ProviderButton>
  );
}

export default GitHubProvider;
