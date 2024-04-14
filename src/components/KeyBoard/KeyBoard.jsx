/* eslint-disable react/prop-types */
import { checkGuess, getStatusByLetter } from "../../utils/helpers";

const KeyBoard = ({ guesses, answer }) => {
    const ROWS = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ];
    const validateGuesses = guesses.map(({ value }) => {
        return checkGuess(value, answer);
    })
    const lettersStatus = getStatusByLetter(validateGuesses);
    return (
        <div className="keyboard">
            {ROWS.map((row, index) => {
                return (
                    <div className="keyboard-row" key={index}>
                        {row.map((letter) => (
                            <div
                                key={letter}
                                className={`letter ${lettersStatus[letter]}`}
                            >
                                {letter}
                            </div>
                        ))}
                    </div>
                )
            })}
        </div>
    )
}

export default KeyBoard