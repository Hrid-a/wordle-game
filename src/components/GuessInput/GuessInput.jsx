/* eslint-disable react/prop-types */
import { useState } from "react";

const GuessInput = ({ handleGuesses, status }) => {
    const [guess, setGuess] = useState('');
    const addGuess = (e) => {
        e.preventDefault();
        handleGuesses(guess);
        setGuess('');
    }

    return (
        <form className="guess-input-wrapper" onSubmit={addGuess}>
            <label htmlFor="">
                Enter your guess
                <input
                    type="text"
                    value={guess}
                    minLength={5}
                    maxLength={5}
                    pattern="[a-zA-Z]{5}"
                    disabled={status !== 'runing'}
                    onChange={(event) => setGuess(event.target.value.toUpperCase())}
                />
            </label>
        </form>
    )
}

export default GuessInput