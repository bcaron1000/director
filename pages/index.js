import { useEffect, useState } from 'react'
import { collection, getDocs} from 'firebase/firestore'
import { db } from 'libs/firebase'
import { AppBar } from 'components/appbar'
import { async } from '@firebase/util'
 

 
 function UserProfile({age, fullName, address, ...props}){
     return(
         <ul>
             <li>{fullName}</li>
             <li>{age}</li>
             <li>{address.city}</li>
         </ul>
     )
 }
 
 function index(props){
     // Read a single document from a collection.
    const [users, setUsers] = useState(null)
    const [output, setOutput] = useState('is working')

    useEffect(()=>{
        async function getFirebaseDoc(){
            const ref = collection(db, 'users')
            
            const userSnapshot = await getDocs(ref)
            let users = []
            userSnapshot.forEach(doc=>{
                // Object and array non mutating methods of state
                setUsers(doc.data())
                
            })
            
        }
        getFirebaseDoc()
    }, [])


    if(users){
        return<div></div>
    }else{
        return<div>{output}</div>
    }
}

export default index