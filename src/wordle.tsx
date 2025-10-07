import './wordle.css'


const Grid = () => {
    // Create an array with 10 elements

    return (
        <div className="grid-container">
            {Array.from({ length: 5 }).map((_, rowIndex) => (
                <div className="grid-item"> <h1>A</h1> </div>
            ))}
            {Array.from({ length: 5 }).map((_, rowIndex) => (
                <div className="grid-item"> </div>
            ))}
            {Array.from({ length: 5 }).map((_, rowIndex) => (
                <div className="grid-item"> </div>
            ))}
            {Array.from({ length: 5 }).map((_, rowIndex) => (
                <div className="grid-item"> </div>
            ))}
            {Array.from({ length: 5 }).map((_, rowIndex) => (
                <div className="grid-item"> </div>
            ))}
            {Array.from({ length: 5 }).map((_, rowIndex) => (
                <div className="grid-item"></div>
            ))}
        </div>
    );
}


const Keyboard = () => {
    const keys_1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const keys_2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const keys_3 = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL'];

    return (
        <div className="keyboard-container">
            <div className="keyboard-row keyboard-row-1">
                {keys_1.map((key) => (
                    <button key={key} className="key">{key}</button>
                ))}
            </div>
            <div className="keyboard-row  keyboard-row-2">
                {keys_2.map((key) => (
                    <button key={key} className="key">{key}</button>
                ))}
            </div>
            <div className="keyboard-row keyboard-row-3">
                {keys_3.map((key) =>
                    <button key={key} className={`${key.toLowerCase()} key`}>{key}</button>
                )}
            </div>
        </div>
    )

}

const Wordle = () => {

    return (
        <div className="wordle-container">
            <Grid />
            <Keyboard />
        </div>
    )
}

export default Wordle;