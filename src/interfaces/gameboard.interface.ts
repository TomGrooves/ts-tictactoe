export interface GameBoardInterface {
    setErrMsg: React.Dispatch<React.SetStateAction<string>>,
    currentPlayer: string,
    setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>,
    fields: Array<string>,
    setFields: React.Dispatch<React.SetStateAction<Array<string>>>,
    isRunning: boolean,
    setIsRunning: React.Dispatch<React.SetStateAction<boolean>>,
}