import {useState, useEffect} from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from 'libs/firebase'

function useAuth(){
    const [user, setUser] = useState(null)

    useEffect(()=>{
        // component mounts 
        const authChange = onAuthStateChanged(auth, (clientCredentials)=>{
            if (clientCredentials){
                setUser(clientCredentials)
            }else{
                setUser(null)
            }
        })
        return ()=> authChange()
        //cleans up the function so it doesnt get stuck in a loop
    }, [])
    return user
}

export {useAuth}