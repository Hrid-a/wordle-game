import { useState } from "react"
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
import Banner from "../Banner/Banner";
import KeyBoard from "../KeyBoard";

// eslint-disable-next-line react/prop-types
const Game = ({ answer }) => {
    console.info({ answer });
    const [guesses, setGuesses] = useState([]);
    const [gameStatus, setGameStatus] = useState('runing');
    const handleGuesses = (guess) => {
        const nextGuesses = [...guesses, { id: crypto.randomUUID(), value: guess }]
        if (guess === answer) {
            setGameStatus('won');
        }
        else if (nextGuesses.length >= 6) {
            setGameStatus('lost');
        }
        setGuesses(nextGuesses);
    }
    return (
        <>
            {gameStatus === 'won' && <Banner type={'happy'} triesNum={guesses.length} />}
            {gameStatus === 'lost' && <Banner type={'sad'} answer={answer} />}
            <GuessResult guesses={guesses} answer={answer} />
            <GuessInput handleGuesses={handleGuesses} status={gameStatus} />
            <KeyBoard guesses={guesses} answer={answer} />
        </>
    )
}

export default Game