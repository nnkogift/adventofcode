// const input = "A Y\n" +
//     "B X\n" +
//     "C Z"

import {input} from "./input"

/*
* A, X - Rock,
* B, Y - Paper,
* C, Z - Scissors
* */

const playScores: Record<string, number> = {
    X: 1,
    Y: 2,
    Z: 3
}


const playRules = [
    [3, 0, 6],
    [6, 3, 0],
    [0, 6, 3]
];


const opponent = ['A', 'B', 'C']
const myPlays = ['X', 'Y', 'Z']


function getPlayScore(myPlay: string, opponentPlay: string): number {
    const myIndex = myPlays.indexOf(myPlay);
    const opponentIndex = opponent.indexOf(opponentPlay);
    return playRules[myIndex][opponentIndex];
}

function getSelectionScore(myPlay: string): number {
    return playScores[myPlay];
}


function getTotalScore() {
    const plays = input.split("\n");
    const scores = plays.map((play) => {
        const [opponentPlay, myPlay] = play.split(' ');
        return getPlayScore(myPlay, opponentPlay) + getSelectionScore(myPlay);
    })

    return scores.reduce((total, score) => total + score, 0)
}


console.log(getTotalScore());


const actualPlayScores: Record<string, number> = {
    X: 0,
    Y: 3,
    Z: 6
}

const actualPlayRules = [
    [3, 1, 2],
    [1, 2, 3],
    [2, 3, 1]
]

function getActualPlayScore(myPlay: string): number {
    return actualPlayScores[myPlay];
}

function getActualSelectionScore(myPlayControl: string, opponentControl: string): number {
    const myIndex = myPlays.indexOf(myPlayControl)
    const opponentIndex = opponent.indexOf(opponentControl)
    return actualPlayRules[opponentIndex][myIndex]
}


function getActualTotalScore() {
    const plays = input.split("\n");
    const scores = plays.map((play) => {
        const [opponentPlay, myPlayControl] = play.split(' ');
        return getActualPlayScore(myPlayControl) + getActualSelectionScore(myPlayControl, opponentPlay);
    })
    return scores.reduce((total, score) => total + score, 0)
}


console.log(getActualTotalScore())
