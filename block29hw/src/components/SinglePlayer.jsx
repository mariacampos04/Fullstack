
export default function SinglePlayer(){


    const fetchSinglePlayer = async (playerId) => {
        try {
            return(
                <div classname = "details"> </div>
            )
            
        } catch (err) {
            console.error(`Oh no, trouble fetching player #${playerId}!`, err);
        }
    };

}