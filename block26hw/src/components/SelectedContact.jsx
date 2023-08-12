//export default function SelectedContact({ selectedContactId, setSelectedContactId }) 


import { useState } from 'react'
import { useEffect } from 'react'

export default function SelectedContact({selectedContactId, setSelectedContactId}){
    const [contact, setContact] = useState(null);
     
        useEffect(() => {
            async function fetchContacts(){
                try{
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users Links to an external site./${selectedContactId}`);
                const result = await response.json();
                setSelectedContactId(result);

                } catch(error){
                    console.log(error);
                }
            }
           
            fetchContacts();
            
        },[]);
    }






