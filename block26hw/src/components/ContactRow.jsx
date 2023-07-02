//creating a component called ContactRow and making it the default export
//Passing and deconstucting one more level down into ContactRow in order to use onClick in our table row
export default function ContactRow({ setSelectedContactId, contact }) {
    return (

        //rendering a single row
        <tr 
        //adding onClick to tr element
        onClick={() => {
            //passing onClick callback function with the current contact's ID
            setSelectedContactId(contact.id);
        }}
        >
            {/* 3 column elements*/}
            {/* taking contact objects (name, email, phone) 
            from the parent component (ContactList) */}
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    );

}
