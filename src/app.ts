import './main.scss'
console.log("here  ready to go")

import Food from './lib/Food'
import ScorePanel from './lib/Score'

let food = new Food()
console.log(food.X,food.Y)
food.change()


let scorePanel = new ScorePanel(100,2)
// for(let i=0;i<200;i++){
//     scorePanel.addScore()
// }