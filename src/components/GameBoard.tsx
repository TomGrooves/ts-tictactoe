import { useEffect } from 'react'
import { checkWin } from '../helpers/helpers';
import { GameBoardInterface } from '../interfaces/gameboard.interface';
import GameStyles from '../styles/gamestyles.module.scss';

export const GameBoard: React.FC<GameBoardInterface> = ({ setErrMsg, currentPlayer, setCurrentPlayer, fields, setFields, isRunning, setIsRunning }) => {

    useEffect(() => {
        if (checkWin(fields)) {
            setIsRunning(false)
            setErrMsg(`Player ${currentPlayer} wins this round!!`)
        }
        else {
            setCurrentPlayer(currentPlayer === "x" ? "o" : "x")
        }
    }, [fields, isRunning])

    const setPosition = (index: number) => {

        if (fields[index] === "" && isRunning) {
            const arrClone = [...fields]
            arrClone[index] = currentPlayer;
            setFields(arrClone)
        }

        else if (!isRunning) {
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

    return (
        <section className={GameStyles.gameboard}>
            {fields.map((item, index) => {
                return (
                    <div onClick={() => setPosition(index)} key={index} className={GameStyles.field}>{item}</div>
                )
            })}
        </section>
    )
}