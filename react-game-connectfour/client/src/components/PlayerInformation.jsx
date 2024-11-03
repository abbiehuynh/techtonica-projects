const PlayerInformation = ({player, tokenUrl}) => {
    return (
        <div class="playerInformation">
            <h2>{player}</h2>
            <img src={tokenUrl}></img>
        </div>
    );
};

export default PlayerInformation;