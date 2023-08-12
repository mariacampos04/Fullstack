import { useState } from "react";

//deconstructing setToken
export default function SignUpForm(setToken) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);


    async function handleSubmit(event){
        event.preventDefault();

        try{
            //fetch request 
            const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/signup");
            //method to parse the response into js to use in my code
            const result = await response.json();
            console.log(result);
            //setToken(result.token);

        } catch(error){
            //storing a server error in the application state
            setError(error.message);
        }
    }

    return( <>
    
    <h2> Sign Up! </h2>
    
    {error && <p> {error}</p>}

    <form method = "post" onSubmit ={handleSubmit}>
        <label>
            Username: {""}
            <input 
                value = {username} 
                onChange ={(e) => setUsername(e.target.value)}
            />
        </label>
        <label>
            Password:{""}
             <input 
                type = "password"
                value ={password} 
                onChange ={(e) => setPassword(e.target.value)}
            />
        </label>
        <button>Submit</button>
    </form>   
    </>
    );
}