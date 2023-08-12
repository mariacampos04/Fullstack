import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';

//const[contacts, setContacts] = useState(dummyContacts)

//importing our new ContactList component
export default function App() {
  const [selectedContactId, setSelectedContactId] = useState[null]

  return (
    <>
    {/* ternary statemnet -> if true render a div */}
    {selectedContactId ?(

//3. Replace our div in the App.jsx with our SelectedContact component and pass it the selectedContactId and setSelectedContactId.
 //<div> setSelectedContactId </div>
    SelectedContact({selectedContactId, setSelectedContactId })
      
     

    ): {/* if false render ContactList component */}
    ( 
      <ContactList/>
    )}
    </>
  );
}
