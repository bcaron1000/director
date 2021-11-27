import {useState, useEffect} from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from 'libs/firebase'

function useAuth(){
    const [user, setUser] = useState(null)

    useEffect(()=>{
        onAuthStateChanged(auth, (clientCredentials)=>{
            if (clientCredentials){
                setUser(clientCredentials)
            }else{
                setUser(null)
            }
        })
    })
    return user
}

export {useAuth}