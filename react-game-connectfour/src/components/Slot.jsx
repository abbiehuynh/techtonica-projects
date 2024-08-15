import greenToken from '../assests/greenToken';
import pinkToken from '../assests/pinkToken';

// create props to track player tokens (ch) and positions (y, x) inside of game board
    // player tokens (X, O) - greenToken = X, pinkToken = O
const Slot = ({ch, y, x}) => {
    return (
        <div className="slot">
            {/* checks if slot is occupied, if ch is defined*/}
            {ch && (
                {/* if ch is X, show green token, else show pink token*/}
                <img src={ch === "X" ? greenToken : pinkToken}
                width="100%" height="100%" />
            )}
        </div>
    )
}

export default Slot;