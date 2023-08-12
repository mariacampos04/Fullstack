import AllPlayers from "./AllPlayers";

export default function NewPlayerForm (){



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
            <div class="img-container">
            <img src=${player.imageUrl} width="300" height="600">
            </div>
            <p class="infoNewPlayer"><em>Status:</em> ${player.status}</p>
            <p class="infoNewPlayer"><em>Team Id:</em> ${player.teamId}</p>
          `;
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
        return(
            <div classname = "newPlayer">
                renderAllPlayers(players);
            </div>
       // renderAllPlayers(players);
        )
    } catch (error) {
        console.log("Error", error);
    }
}

init();

}