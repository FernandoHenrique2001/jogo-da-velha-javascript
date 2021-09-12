let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let button = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador de jogadas

let player1 = 0;
let player2 = 0;

// adicionando evento de click aos boxes

for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", function(){

        let el;
       
        if(player1 == player2){
            // x
            el = x;
        }else{
            // o
            el = o;
        }


        // verifica se já tem x ou o
       if(this.childNodes.length == 0){
            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            // computar jogada

            if(player1 == player2){
                player1++;
            }else{
                player2++;
            }

            // checa quem venceu

            checkWinCondition();
        }

    });
}

// checa quem venceu

function checkWinCondition(){

    let b1 = document.querySelector("#block-1");
    let b2 = document.querySelector("#block-2");
    let b3 = document.querySelector("#block-3");
    let b4 = document.querySelector("#block-4");
    let b5 = document.querySelector("#block-5");
    let b6 = document.querySelector("#block-6");
    let b7 = document.querySelector("#block-7");
    let b8 = document.querySelector("#block-8");
    let b9 = document.querySelector("#block-9");

    let verificadorVelha = 0;

    // horizontal

    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
        
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == "x" && b2Child == "x" && b3Child == "x"){
            // x
            declareWinner("x");
            verificadorVelha = 1;
        }else if(b1Child == "o" && b2Child == "o" && b3Child == "o"){
            // o
            declareWinner("o");
            verificadorVelha = 1;
        }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
        
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == "x" && b5Child == "x" && b6Child == "x"){
            // x
            declareWinner("x");
            verificadorVelha = 1;
        }else if(b4Child == "o" && b5Child == "o" && b6Child == "o"){
            // o
            declareWinner("o");
            verificadorVelha = 1;
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
        
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == "x" && b8Child == "x" && b9Child == "x"){
            // x
            declareWinner("x");
            verificadorVelha = 1;
        }else if(b7Child == "o" && b8Child == "o" && b9Child == "o"){
            // o
            declareWinner("o");
            verificadorVelha = 1;
        }
    }

    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
        
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == "x" && b4Child == "x" && b7Child == "x"){
            // x
            declareWinner("x");
            verificadorVelha = 1;
        }else if(b1Child == "o" && b4Child == "o" && b7Child == "o"){
            // o
            declareWinner("o");
            verificadorVelha = 1;
        }
    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
        
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == "x" && b5Child == "x" && b8Child == "x"){
            // x
            declareWinner("x");
            verificadorVelha = 1;
        }else if(b2Child == "o" && b5Child == "o" && b8Child == "o"){
            // o
            declareWinner("o");
            verificadorVelha = 1;
        }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
        
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == "x" && b6Child == "x" && b9Child == "x"){
            // x
            declareWinner("x");
            verificadorVelha = 1;
        }else if(b3Child == "o" && b6Child == "o" && b9Child == "o"){
            // o
            declareWinner("o");
            verificadorVelha = 1;
        }
    }

    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
        
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == "x" && b5Child == "x" && b9Child == "x"){
            // x
            declareWinner("x");
            verificadorVelha = 1;
        }else if(b1Child == "o" && b5Child == "o" && b9Child == "o"){
            // o
            declareWinner("o");
            verificadorVelha = 1;
        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){
        
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == "x" && b5Child == "x" && b7Child == "x"){
            // x
            declareWinner("x");
            verificadorVelha = 1;
        }else if(b3Child == "o" && b5Child == "o" && b7Child == "o"){
            // o
            declareWinner("o");
            verificadorVelha = 1;
        }
    }

    // deu velha

    let counter = 0;

    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            counter++;
        }
    }

    if(counter == 9 && verificadorVelha == 0){
        declareWinner("Deu velha!");
    }
}

// limpar o jogo, declara o vencedor e atualiza o placar

function declareWinner(winner){

    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardY = document.querySelector("#scoreboard-2"); 
    let msg = "";

    if(winner == "x"){
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 venceu!";
    }else if(winner == "o"){
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
        msg = "O jogador 2 venceu!";
    }else{
        msg = "Deu velha!";
    }

    // exibe msg

    messageText.innerHTML = msg;
    setTimeout(function(){
        messageContainer.classList.remove("hide");
    }, 1000);
    

    // esconde msg

    setTimeout(function(){
        messageContainer.classList.add("hide");
    }, 3000);

    // zera as jogadas
    player1 = 0;
    player2 = 0;

    // remove x e o

    let boxesToRemove = document.querySelectorAll(".box div");

    setTimeout(function(){    
        for(let i = 0; i< boxesToRemove.length; i++){
            boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
        }
    }, 3000);

}