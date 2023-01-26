import { useState } from 'react';
import { createStringArray } from '../helpers/helpers';
import { GameBoard } from '../components/GameBoard';

export const MainPage = ({ }) => {

    const [currentPlayer, setCurrentPlayer] = useState<string>("x")
    const [errMsg, setErrMsg] = useState<string>("")
    const [fields, setFields] = useState<Array<string>>(createStringArray(9))
    const [isRunning, setIsRunning] = useState<boolean>(true)

    const resetGame = () => {
        setIsRunning(true)
        setFields(createStringArray(9))
    }

    return (
        <main>
            <p>currently player: {currentPlayer}</p>
            <GameBoard
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer}
                setErrMsg={setErrMsg}
                fields={fields}
                setFields={setFields}
                isRunning={isRunning}
                setIsRunning={setIsRunning}
            />
            <section>
                <p>{errMsg}</p>
                <button onClick={() => resetGame()}>RESET</button>
            </section>
        </main>
    )
}