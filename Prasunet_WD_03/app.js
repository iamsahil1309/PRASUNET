let boxes = document.querySelectorAll(".box");
let restart = document.getElementById("restart");
let newGame = document.getElementById("newGame");
let message = document.getElementById("message");
let popup = document.querySelector(".popup");
let playerX = true;
let count = 0;

let winChecker = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

//enable popup
const enableButton = () => {
    boxes.forEach((box) => {
        box.innerText = ""
        box.disabled = false
    })
    popup.classList.add("hide")
}

//disable popup
const disableButton = () => {
    boxes.forEach((box) => (box.disabled = true))
    popup.classList.remove("hide")
}


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        // console.log("hey")
        if(playerX){
            box.innerText = "X"
            playerX = false
            box.disabled = true
        }else{
            box.innerText = "O"
            playerX = true
            box.disabled = true
        }
        count++

        if(count == 9){
            // draw
            drawFunction()
        }
        //winner function
        winner();
    })
})

const winner = () => {
    for(let i of winChecker){
        let[pos1Val, pos2Val, pos3Val] = [
            boxes[i[0]].innerText,
            boxes[i[1]].innerText,
            boxes[i[2]].innerText,
        ]

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){  

                winFunction(pos1Val)

            }
        }
    }
}

const drawFunction = () => {
    disableButton()
    message.innerHTML = "&#x1F60E; <br> It's a Draw!"
}

const winFunction = (val) => {
    disableButton()
    if(val == "X"){
        message.innerHTML = "&#x1F389; <br> 'X' Wins";
    }else{
        message.innerHTML = "&#x1F389; <br> 'O' Wins"
    }
}

newGame.addEventListener("click", () => {
    count = 0;
    enableButton();
})

restart.addEventListener("click", () => {
    count = 0;
    enableButton();
})

//enable display and disable popup
window.onload = enableButton
