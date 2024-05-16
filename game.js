let gameSeq=[];
let userSeq=[];
let btns=["yellow" ,"red","purple","green"];
let started = false;
let Level=0;
let h2=document.querySelector("h2");

document.addEventListener("keyPress",function(){
    if(started == false){
        console.log("game is started");
        started=true;
        LevelUp();
    }
});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },250);
}

 function LevelUp(){
    Level++;
    h2.innerText =`Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBtn);
 }
 function btnPress(){
    console.log(this);
    let btn=this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
 }
 let allBtns =document.querySelectorAll(".btn");
 for (btn of allBtns){
    btn.addEventListener("click", btnPress);
 }
 