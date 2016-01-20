import { filter } from 'ramda'

var board = ['', '', '', '', '', '', '', '', '']

const wins = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
  [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]

const isAWin = function (board, player, win) {
  return filter(function(i) {return board[i] === player }, win).length === 3
}

const playerWins = function (board, player) {
  return filter((win) => isAWin(board, player, win), wins).length > 0
}

const winner = ['X', 'O', 'X', 'O', 'X', '', 'X', '', 'O']

console.log("Is O a winner? " + playerWins(winner, 'O'))
console.log("Is X a winner? " + playerWins(winner, 'X'))

const whoseMoveIsIt = function (moves) {
  return (moves.length % 2 === 0) ? 'X' : 'O'
}

const makeMoves = function (board )
