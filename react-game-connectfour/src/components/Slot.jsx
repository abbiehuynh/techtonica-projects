import greenToken from '../assests/green-token.svg';
import pinkToken from '../assests/pink-token.svg';

// create props to track player tokens (ch) and positions (y, x) inside of game board
    // player tokens (X, O) - greenToken = X, pinkToken = O
const Slot = ({ch, y, x}) => {
    return (
        <div className="slot" x={x} y={y}>
            {/* checks if slot is occupied, if ch is defined */}
            {/* if ch is X, show green token, else show pink token*/}
            {ch && (
                <img src={ch === "X" ? greenToken : pinkToken}
                width="100%" height="100%" />
            )}
        </div>
    );
};

export default Slot;