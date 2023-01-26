import { useEffect, useState } from 'react';
import GameStyles from '../styles/gamestyles.module.scss';
import { createStringArray, winConditions } from '../helpers/helpers';

export const MainPage = ({ }) => {

    const [fields, setFields] = useState<Array<string>>(createStringArray(9))
    const [errMsg, setErrMsg] = useState<string>("")
    const [currentPlayer, setCurrentPlayer] = useState<string>("x")
    const [isRunning, setIsRunning] = useState<boolean>(true)

    useEffect(() => {
        if(checkWin()){
            setIsRunning(false)
        }
        else{
            setCurrentPlayer(currentPlayer === "x" ? "o" : "x")
        }
    }, [fields, isRunning])

    const setPosition = (index: number) => {

        if (fields[index] === "" && isRunning) {
            const arrClone = [...fields]
            arrClone[index] = currentPlayer;
            setFields(arrClone)
        }

        else if (!isRunning){
            setErrMsg("Game is complete. Please restart")
            setTimeout(() => {
                setErrMsg("")
            }, 2000)
        }
        else {
            setErrMsg("Field is occupied")
            setTimeout(() => {
                setErrMsg("")
            }, 2000)
        }
    }


    const checkWin = () => {
        for (let win of winConditions) {
            if (
                fields[win[0]] === fields[win[1]] &&
                fields[win[1]] === fields[win[2]] &&
                fields[win[0]] !== "") {
                setErrMsg(`Player ${currentPlayer} wins this round!!`)
                return true
            }
        }
    }

    const resetGame = () => {
        setFields(createStringArray(9))
        setIsRunning(true)
    }

    return (
        <main>
            <p>currently player: {currentPlayer}</p>
            <section className={GameStyles.gameboard}>
                {fields.map((item, index) => {
                    return (
                        <div onClick={() => setPosition(index)} key={index} className={GameStyles.field}>{item}</div>
                    )
                })}
            </section>
            <section>
                <p>{errMsg}</p>
                <button onClick={() => resetGame()}>RESET</button>
            </section>
        </main>
    )
}