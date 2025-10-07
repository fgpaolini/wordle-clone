import './wordle.css'
import {useEffect, useState} from "react";

const WordBox = ({ letter }: { letter: string }) => {
    return <div className="grid-item"><h1>{letter}</h1></div>;
}

const Grid = ({attempt, guess } : { attempt: number, guess: string[] }) => {


    useEffect(() => {
        console.log(guess);
    }, [guess]);


    return (
        <div className="grid-container">
            {Array.from({ length: 6 }).map((_, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                    {Array.from({ length: 5 }).map((_, colIndex) => (
                        <WordBox key={`${rowIndex}-${colIndex ?? 0}`} letter={''} />
                    ))}
                </div>
            ))}
        </div>
    );
}


const Keyboard = ({ onKeyPress }: { onKeyPress: (key: string) => void }) => {
    const KEYS = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']
    ];

    return (
        <div className="keyboard-container">
            {KEYS.map((row, rowIndex) => (
                <div key={rowIndex} className={`keyboard-row keyboard-row-${rowIndex+1}`}>
                    {row.map((key) => (
                        <button key={key} className={`${key.toLowerCase()} key ${key === 'L' ? 'green' : ''}`} onClick={() => onKeyPress(key)}>{key}</button>
                        ))}
                </div>
            ))}
        </div>
    )
}

const Wordle = () => {

    const PALABRA_DEL_DIA = "PERRO";

    const [attempt, setAttempt] = useState(5);
    const COUNT_ATTEMPTS = 6;
    const MAX_WORD_LENGTH = 5;

    const [guess, setGuess] = useState([] as string[]);

    useEffect(() => {
        //console.log(guess);
    }, [guess]);

    useEffect(() => {
        console.log('Component mounted');
    }, []);


    const handleKeyPress = (key: string) => {
        switch (key) {
            case 'ENTER':
                if (guess.length == MAX_WORD_LENGTH) {

                    if (guess.toString() != PALABRA_DEL_DIA) {
                        console.log('Incorrecto');
                        setAttempt((prevState) => prevState + 1);
                        if (attempt >= COUNT_ATTEMPTS) {
                            console.log('Game Over');
                        }
                        setGuess([]);
                    }

                }
                break;
            case 'DEL':
                setGuess((prev) => prev.slice(0, -1));
                break;
            default:
                if (guess.length < MAX_WORD_LENGTH) {
                    setGuess((prev) => [...prev, key]);
                }
                break;
        }
    }

    return (
        <div className="wordle-container">
            <h1>{PALABRA_DEL_DIA}</h1>
            <h1>
                intento: {attempt}
                <br/>

            {guess}

            </h1>
            <Grid guess={guess} attempt={attempt}/>
            <Keyboard onKeyPress={handleKeyPress} />
        </div>
    )
}

export default Wordle;