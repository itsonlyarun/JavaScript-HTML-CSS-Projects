// Global variable

let scoreStr=localStorage.getItem('Score');
let score;

resetScore(scoreStr);

function resetScore(scoreStr){
    score=scoreStr?JSON.parse(scoreStr):{
        win:0,
        lost:0,
        tie:0,
    };
    score.displayScore= function(){
        return `Won : ${score.win},    Lost : ${score.lost},    Tie : ${score.tie}`;
    }
    showResult();
}

score.displayScore= function(){
    return `Final Score : Won : ${score.win},    Lost : ${score.lost},    Tie : ${score.tie}`;
}

function generateComputerChoice(){
    //inside scope
    let randomNumber=Math.random()*3;
    if(randomNumber>0&&randomNumber<=1){
        return 'Bat';
    }
    else if(randomNumber>1&&randomNumber<=2){
        return 'Ball';
    }
    else{
        return 'Stump';
    }
}


function getResult(userMove,computerMove){
    if(userMove==='Bat'){
        if(computerMove=='Ball'){
            score.win++;
            return 'You won!';
        }
        else if(computerMove=='Bat'){
            score.tie++;
            return `It's a tie`;
        }
        else if(computerMove==='Stump'){
            score.lost++;
            return 'You loose!';
        }
    }
    else if(userMove==='Ball'){
        if(computerMove=='Bat'){
            score.lost++;
            return 'You loose!';
        }
        else if(computerMove=='Ball'){
            score.tie++;
            return `It's a tie`;
        }
        else if(computerMove==='Stump'){
            score.win++;
            return 'You won!';
        }                
    }
    else{
        if(computerMove=='Ball'){
            score.win++;
            return 'You won!';
        }
        else if(computerMove=='Bat'){
            score.lost++;
            return `You loose`;
        }
        else if(userMove==='Stump'){
            score.tie++;
            return `It's a tie`;
        }
    }
}

function showResult(userChoice,computerChoice,resultMsg){
    localStorage.setItem('Score',JSON.stringify(score))
    document.querySelector('#user-move').innerHTML=userChoice?`You have chosen ${userChoice}`:'';
    document.querySelector('#computer-move').innerHTML=computerChoice?`Computer has chosen ${computerChoice}`:'';
    document.querySelector('#result').innerHTML=resultMsg||'';
    let data=score.displayScore();
    document.querySelector('#score').innerHTML=score.displayScore();
}