//creating a component called ContactRow and making it the default export
export default function ContactRow({ contact }) {
    return (

        //rendering a single row
        <tr>
            {/* 3 column elements*/}
            {/* taking contact objects (name, email, phone) 
            from the parent component (ContactList) */}
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    )

}