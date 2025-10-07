import './wordle.css'

const WordBox = ({ key }: { key: string }) => {
    return <div className="grid-item"><h1>{key}</h1></div>;
}

const Grid = () => {
    return (
        <div className="grid-container">
            {Array.from({ length: 6 }).map((_, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                    {Array.from({ length: 5 }).map((_, colIndex) => (
                        <WordBox key={`${rowIndex}-${colIndex}`} />
                    ))}
                </div>
            ))}
        </div>
    );
}


const Keyboard = () => {
    const KEYS = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']
    ];


    const handleKeyPress = (key: string) => {
        console.log(key);
    };

    return (
        <div className="keyboard-container">
            {KEYS.map((row, rowIndex) => (
                <div key={rowIndex} className={`keyboard-row keyboard-row-${rowIndex+1}`}>
                    {row.map((key) => (
                        <button key={key} className={`${key.toLowerCase()} key`} onClick={() => handleKeyPress(key)}>{key}</button>
                        ))}
                </div>
            ))}
        </div>
    )
}

const Wordle = () => {

    const PALABRA_DEL_DIA = "PERRO";

    return (
        <div className="wordle-container">
            <h1>{PALABRA_DEL_DIA}</h1>
            <Grid />
            <Keyboard />
        </div>
    )
}

export default Wordle;