/* eslint-disable react/prop-types */

import Guess from "../Guess";

const GuessResult = ({ guesses, answer }) => {
    const NUM_OF_GUESSES_ALLOWED = 6;
    return (
        <div className="guess-results">
            {new Array(NUM_OF_GUESSES_ALLOWED).fill().map((_, index) => {
                return (
                    <Guess key={index} guess={guesses[index]} answer={answer} />
                )
            })}

        </div>
    )
}

export default GuessResult