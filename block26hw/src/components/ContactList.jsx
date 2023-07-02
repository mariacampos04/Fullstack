import React from "react";
//importing ContactRow 
import ContactRow from "./ContactRow";
import { useState } from 'react'
import { useEffect } from "react";

//dummy array
const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

 //ContactList setSelectedContactId = {setSelectedContactId} ???????? Number 9 in Select contact view

//creating a component; default export from the file
export default function ContactList({setSelectedContactId}){ //passing the setSelectedContactId to ContactList component
    //Deconstructing function from props from withing the ContactList component
   

    //useState hook
    const [contacts, setContacts] = useState(dummyContacts);

    //useEffect hook
    useEffect(() => {
        //define async function that fetches data and sets it into state
        async function fetchContacts(){
            try{ 
                //fetchign API
                const response = await fetch('http://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/');
                const result = await response.json();
                setContacts(result);
            } catch(error){
                console.log(error);
            }
        }

       
        //console.log("Contacts: ", contacts);

        fetchContacts()
    }, [])

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {//"escaping" into Javascript and mapping over contacts array. For each contact return a ContactRow component
                    contacts.map((contact) => {
                    return <ContactRow key = {contact.id} contact = {contact}
                    />;
                })}
            </tbody>

        </table>
    );

}

