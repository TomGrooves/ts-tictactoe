export const createStringArray = (value: number) => {
    let arr = [...Array(value)].map((v, i) => "")
    return arr
}

export const checkWin = (arrToCheck: Array<string>) => {
    for (let win of winConditions) {
        if (
            arrToCheck[win[0]] === arrToCheck[win[1]] &&
            arrToCheck[win[1]] === arrToCheck[win[2]] &&
            arrToCheck[win[0]] !== "") {
            return true
        }
    }
}

const winConditions = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
]