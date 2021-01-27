class ScorePanel{
    score = 0
    level = 1
    scoreEle:HTMLElement
    levelEle:HTMLElement
    //设置一个变量 来限制我们的登记
    maxLevel:number

    //设置一个变量，表示我们多少分升一级 
    upScore:number

    constructor(maxLevel:number =10,upScore:number = 10){
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
        this.maxLevel = maxLevel
        this.upScore = upScore
    }    

    //设置一个加分的方法
    addScore(){
        this.scoreEle.innerHTML =++this.score + ""

        if(this.score % this.upScore === 0){
            this.levelUp()
        }

    }
    levelUp(){
        if (this.level <this.maxLevel) {
            this.levelEle.innerHTML =++this.level + ""
        }
    }


}

export default ScorePanel