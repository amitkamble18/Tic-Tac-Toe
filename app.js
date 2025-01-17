let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//playerX ,PlayerO;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
//reset button
const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};
//disable boxes
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerHTML = "O"
            turnO = false;
        }
        else{
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled=true;
        checkWinner();
    })
})
const showWinner = (winner) =>{
    msg.innerText = `Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = ()=>{
    for ( let pattern of winPatterns){   
     let pos1value = boxes[pattern[0]].innerText;
     let pos2value = boxes[pattern[1]].innerText;
     let pos3value = boxes[pattern[2]].innerText;

     if(pos1value != "" && pos1value === pos2value && pos2value === pos3value){
        if(pos1value === pos2value && pos3value){
            console.log("Winner",pos1value);
            showWinner(pos1value);
        }
     }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);