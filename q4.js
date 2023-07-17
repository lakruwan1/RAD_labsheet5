class Games{
    constructor(level, theme, avatar, state){
        this.level = level;
        this.theme = theme;
        this.avatar = avatar;
        this.state = state;
    }

    Win(){console.log("You win!!!")}
    Lose(){console.log("You lost!!!")}
}

class CarG extends Games{
    
    constructor(level, theme, avatar, state ,yourScore, winningScore=100){
        super(level,theme,avatar, state)
        this.yourScore = yourScore;
        this.winningScore = winningScore;
        if(yourScore > winningScore){
            this.isWin = true;
        }else{
            this.isWin = false;
        }
    }
    
}

class PuzzleG extends Games{
    constructor(level, theme, avatar, state ,yourTime, winningTime=100){
        super(level,theme,avatar, state)
        this.yourTime = yourTime;
        this.winningTime = winningTime;
        if(yourTime < winningTime){
            this.isWin = true;
        }else{
            this.isWin = false;
        }
    }
    
}

class ShootingG extends Games{
    constructor(level, theme, avatar, state ,isCompleted){
        super(level,theme,avatar, state)
        this.isCompleted = isCompleted;
        if(isCompleted == true){
            this.isWin = true;
        }else{
            this.isWin = false;
        }

    }
}

let player1 = new CarG("beginner", "dark", "flower", "pause", 109);
let player2 = new PuzzleG("intermediate", "Light", "frog", "resume", 67);
let player3 = new ShootingG("hard", "dark", "terr", "cancel", true);