export const sample = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

export function checkGuess(guess, answer) {
    // This constant is a placeholder that indicates we've successfully
    // dealt with this character (it's correct, or misplaced).
    const SOLVED_CHAR = '✓';

    if (!guess) {
        return null;
    }

    const guessChars = guess.toUpperCase().split('');
    const answerChars = answer.split('');

    const result = [];

    // Step 1: Look for correct letters.
    for (let i = 0; i < guessChars.length; i++) {
        if (guessChars[i] === answerChars[i]) {
            result[i] = {
                letter: guessChars[i],
                status: 'correct',
            };
            answerChars[i] = SOLVED_CHAR;
            guessChars[i] = SOLVED_CHAR;
        }
    }

    // Step 2: look for misplaced letters. If it's not misplaced,
    // it must be incorrect.
    for (let i = 0; i < guessChars.length; i++) {
        if (guessChars[i] === SOLVED_CHAR) {
            continue;
        }

        let status = 'incorrect';
        const misplacedIndex = answerChars.findIndex(
            (char) => char === guessChars[i]
        );
        if (misplacedIndex >= 0) {
            status = 'misplaced';
            answerChars[misplacedIndex] = SOLVED_CHAR;
        }

        result[i] = {
            letter: guessChars[i],
            status,
        };
    }

    return result;
}

export function getStatusByLetter(validatedGuesses) {
    const statusObj = {};

    const allLetters = validatedGuesses.flat();

    allLetters.forEach(({ letter, status }) => {
        const currentStatus = statusObj[letter];

        if (currentStatus === undefined) {
            statusObj[letter] = status;
            return;
        }


        const STATUS_RANKS = {
            correct: 1,
            misplaced: 2,
            incorrect: 3,
        };

        const currentStatusRank = STATUS_RANKS[currentStatus];
        const newStatusRank = STATUS_RANKS[status];

        if (newStatusRank < currentStatusRank) {
            statusObj[letter] = status;
        }
    });

    return statusObj;
}

