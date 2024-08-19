let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
let resetBtn=document.querySelector(".reset");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomID=Math.floor(Math.random()*3);
    return options[randomID];
};

const drawGame=()=>{
    msg.innerText="Game has been draw! Play again";
    msg.style.backgroundColor="#081bf3";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win 😊, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lost 🥺, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    let compChoice=genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper,scissors
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //scissors,rock
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});

resetBtn.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    userScorePara.innerText=userScore;
    compScorePara.innerText=compScore;
    msg.innerText="Play your move!";
    msg.style.backgroundColor="#081b31";
})