/* eslint-disable react/prop-types */

import { checkGuess } from "../../utils/helpers";

const Guess = ({ guess, answer }) => {
    const checkedGuess = checkGuess(guess?.value, answer);

    return (
        <p className="guess">
            {
                new Array(5).fill().map((_, idx) => (<span key={idx}
                    className={`cell ${guess ? checkedGuess[idx].status : ''}`}>
                    {!guess ? undefined : guess.value[idx]}
                </span>))
            }
        </p>
    )
}

export default Guess