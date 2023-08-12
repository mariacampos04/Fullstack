


export default function AllPlayers (){



//get div's from html, assigning them a variable
const playerContainer = document.getElementById("all-players-container");

const cohortName = "2302-ACC-CT-WEB-PT-B";  //our cohort, assigned to a variable

//assign the api to a variable
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;
/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
    try {
        //fetch all participants
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT/players");
        const result = await response.json();
        return(
             <div classname = "Players">
                result.data.players;
             </div>
        )
        
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

const renderAllPlayers = (playerList) => {
    try {
        const players = fetchAllPlayers();

        players.innerHTML = '';
        //for each player card loop
        playerList.forEach((player) => {

            const puppyElement = document.createElement('div')
            puppyElement.classList.add('player');

            puppyElement.innerHTML = `
            <h2>${player.name}</h2>
            <p> Breed: ${player.breed}</p>
            <p> Status: ${player.status}</p>
            <img src= ${player.imageUrl} width="300" height="600">
            <p> Created on: ${player.createdAt}</p>
            <p> Updated on: ${player.updatedAt}</p>
            <p> Team ID: ${player.teamId}</p>
            <p> Cohort ID: ${player.cohortId}</p>
            <button class="details-button" data-id="${player.id}">See Details</button>
            <button class="delete-button" data-id="${player.id}">Remove from roster</button>
            `;

            playerContainer.appendChild(puppyElement);
        
        });
    }

    catch (err) {
        console.error('Uh oh, trouble rendering players!', err);
    }
};

//initiate the function
const init = async () => {
    try {
       renderNewPlayerForm();
      
        const players = await fetchAllPlayers();
        renderAllPlayers(players);
    } catch (error) {
        console.log("Error", error);
    }
}

init();

}


