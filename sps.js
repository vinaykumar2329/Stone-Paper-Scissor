let userscore=0;
let compscore=0;
const boxes=document.querySelectorAll(".box");
const result=document.querySelector("#result");
const userScore=document.querySelector("#userscore");
const compScore=document.querySelector("#compscore");

const randcompchoice=()=>{
     const options=["rock","paper","scissor"];
     const randIdx=Math.floor(Math.random()*3);
     return options[randIdx];

};
  
const drawgame=()=>{
    result.innerText="Game Drawn.Play Again!";
    result.style.backgroundColor="yellow";
   
};
const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userScore.innerText=userscore;
        result.innerText=`Hurray...You Won! ${userchoice} beat ${compchoice}`;
        result.style.backgroundColor="green"
        
    }
    else{
        compscore++;
        compScore.innerText=compscore;
        result.innerText=`You Lost! ${compchoice} beat ${userchoice}`;
        result.style.backgroundColor="#db222a"
        console.log("You Lose");
    }
}


const playgame=(userchoice)=>{
    console.log("userchoice=",userchoice);
    const compchoice=randcompchoice();
    console.log("compchoice=",compchoice);


    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"? false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissor"? false:true;
        }
        else{
            userwin=compchoice==="rock"? false:true;
        }   
        showWinner(userwin,userchoice,compchoice);   
     };

};


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        const userchoice= box.getAttribute("id");
        playgame(userchoice);
    });
});