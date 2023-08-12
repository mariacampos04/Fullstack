import { useState } from "react";

//deconstructing token
export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    //function that sends a network request for the button
    async function handleClick() {
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const result = await response.json();
            setSuccessMessage(result.message);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <h2>Authenticate</h2>
            {/* conditionally render the successMessage if it is a truthy value */}
            {successMessage && <p>{successMessage}</p>}
            {/* conditionally render the error in a p tag if the error is a truthy value*/}
            {error && <p>{error}</p>}
            {/* creating a button and passing the handleClick function to it*/}
            <button onClick={handleClick}>Authenticate Token!</button>
        </div>
    );
}
