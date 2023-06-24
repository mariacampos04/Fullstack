//Block 23: Puppy Bowl 

/*
    Requirements:
    
    * GitHub Project
        - Detailed planning tickets with task descriptions for each one
        - Demonstration that each team member made some contribution on the planning of tickets.
        - Each student in the pair must have at least one commit towards the final result, in separate branches

        - A Github repository containing all relevant code for the project
        - Updated Github repository with new commits


    * HTML Front-end Requirements   
        - A full HTML document with two div's in which to dynamically render content
        - One div as a new Puppy Bowl player form input
        - One div in which to render all current Puppy Bowl participants 


    * CSS Front-end Requirements
        - Form is styled and easy to use
        - All Puppy Bowl players are rendered on card elements with their information

    * JavaScript Requirements
        - Use the DOM to generate and manipulate HTML and styles according to the requirements
        - Use functions to isolate and re-use code
        - Use ES6 modules to export and import methods and properties
        - Demonstrates the use of fetch, async, and await to leverage CRUD against a REST API to perform common functions of a website

    * Functionality Requirements
        - Fetching and rendering all puppy players in the browser
        - Viewing a single puppy player and their details
        - Remove a puppy from the roster

*/

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
        return result.data.players;
        
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

const fetchSinglePlayer = async (playerId) => {
    try {
        
    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};


const removePlayer = async (playerId) => {
    try {
        
    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players. 
 * 
 * Then it takes that larger string of HTML and adds it to the DOM. 
 * 
 * It also adds event listeners to the buttons in each player card. 
 * 
 * The event listeners are for the "See details" and "Remove from roster" buttons. 
 * 
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player. 
 * 
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster. 
 * 
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */

//RENDER ALL CODE PLUS BUTTONS 

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


/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */

//Create a Form, and Render a Player, when form is filled out
const addNewPlayerToServer = async (playerObj) =>{
    try {
        const response = await fetch(`${API_URL}/players`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(playerObj),
          });

       const result = await response.json();  //await the api variable you fetched to, to json , assigning it to a result variable 
       console.log(result); //console.log result 
    } catch (error) {
        console.log("Error", error);
    }
};

const renderNewPlayerForm = () => {
  try {
    const newPlayerForm = document.getElementById("new-player-form");
    const playerInfoContainer = document.getElementById("player-info-container");

    newPlayerForm.innerHTML = `
      <form class="newFormEntry" id="moreStyles" autocomplete="on">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" />

        <label for="breed">Breed:</label>
        <input type="text" name="breed" id="breed" />

        <label for="cohortId">Cohort ID:</label>
        <input type="text" name="cohortId" id="cohortId" />

        <label for="status">Status:</label>
        <input type="text" name="status" id="status" />

        <label for="imageUrl">Image URL:</label>
        <input type="text" name="imageUrl" id="image-url" />
        
        <label for="teamId">Team ID:</label>
        <input type="text" name="teamId" id="teamId" />

        <button type="submit" id="submitButton">Submit</button>
      </form>   
    `;

    newPlayerForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const newName = document.getElementById("name").value;
      const newBreed = document.getElementById("breed").value;
      const newCohortId = document.getElementById("cohortId").value;;
      const newStatus = document.getElementById("status").value;
      const newImageUrl = document.getElementById("image-url").value;
      const newTeamId = document.getElementById("teamId").value;
      
      const player = {
        name: newName,
        breed: newBreed,
        cohortId: newCohortId,
        imageUrl: newImageUrl,
        status: newStatus,
        teamId: newTeamId
      };

      try {
        await addNewPlayerToServer(player);
        console.log("New Player Has Been Added");

        // New Puppy Player info displayed
        playerInfoContainer.innerHTML = `
          <p class="newPlayerFromForm">New Player Has Been Added To The Roster</p>
          <p class="infoNewPlayer"><em>Name:</em> ${player.name}</p>
          <p class="infoNewPlayer"><em>Breed:</em> ${player.breed}</p>
          <p class="infoNewPlayer"><em>CohortId:</em> ${player.cohortId}</p>
          <img src=${player.imageUrl} width="300" height="600">
          <p class="infoNewPlayer"><em>Status:</em> ${player.status}</p>
          <p class="infoNewPlayer"><em>Team Id:</em> ${player.teamId}</p>
          <button class="details-button">See Details</button>
          <button class="delete-button">Remove from roster</button>
      
        `;
        
        playerContainer.appendChild(playerInfoContainer);

      } catch (error) {
        console.log("Error", error);
      }
    });
  } catch (error) {
    console.log("Error", error);
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