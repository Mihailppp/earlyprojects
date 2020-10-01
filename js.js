function ageInDays (){
    var age= prompt('When were you born');
    var mathh= (2020-age)*365;
    var text=document.createElement('h1');
    var result=('You are '+ mathh+ ' days old');
    var answer=document.createTextNode(result);
    text.setAttribute('id','answerr');
    text.appendChild(answer);
    document.getElementById('flex-box-result').appendChild(text);
}

function reset(){
    document.getElementById('answerr').remove();

}

function generateCat (){
    var image= document.createElement('img');
    var div=document.getElementById('flex-box-container-2');
    image.src='cat2.gif';
    image.setAttribute('id','catresult');
    div.appendChild(image);
}

function removeCat () {
    document.getElementById('catresult').remove();
}

function rpsGame(yourChoice){
    var humanChoice, botChoice;
    botChoice=numberToChoice(randBotChoice());
    humanChoice=yourChoice.id;
    var result=rpsDecideWinner(humanChoice,botChoice);
    var message=finalMessage(result);
    rpsFrontEnd(yourChoice.id,botChoice,message);

}

function randBotChoice(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}

function rpsDecideWinner(yourChoice,computerChoice){
var rpsDataBase={
'rock' :{'scissors':1,'rock':0.5,'paper':0},
'scissors' :{'paper':1,'scissors':0.5,'rock':0},
'paper' :{'rock':1,'paper':0.5,'scissors':0}
};
yourScore=rpsDataBase[yourChoice][computerChoice];
computerScore=rpsDataBase[computerChoice][yourChoice];
return [yourScore,computerScore];
}
function finalMessage([yourScore,computerScore]){
    if(yourScore===0){
        return{'message':'You lost','color':'red'};}
        else if (yourScore===0.5) {
            return{'message':'You tied','color':'yellow'} ;}
        else {
            return{'message':'You won','color':'green'};};
    

}

function rpsFrontEnd(humanImage,computerImage,finalMessage){
    var imageDataBase={
    'rock':document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissors':document.getElementById('scissors').src
    };
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();


    var humanDiv=document.createElement('div');
    var computerDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

    humanDiv.innerHTML="<img src='"+imageDataBase[humanImage]+"'height=150px width=150px >";
    messageDiv.innerHTML="<h2 style='color: "+finalMessage['color']+";'>"+finalMessage['message']+"</h2>";
    computerDiv.innerHTML="<img src='"+imageDataBase[computerImage]+"'height=150px width=150px >";

    document.getElementById('nomer').appendChild(humanDiv);
    document.getElementById('nomer').appendChild(messageDiv);
    document.getElementById('nomer').appendChild(computerDiv);
}

var allButtons=document.getElementsByTagName('button');

var copyButtons=[];
for (let i=0; i< allButtons.length ; i++){
    copyButtons.push(allButtons[i].classList[1]);}

console.log(copyButtons);

function buttonColorChange(buttonThingy){
    if (buttonThingy.value === 'red'){
        buttonsRed();
    }
    else if(buttonThingy.value==='green'){
        buttonsGreen();}
    else if(buttonThingy.value==='random'){
        buttonsRandom();}
    else if(buttonThingy.value==='reset'){
        buttonsReset();
    }

}
function buttonsRed(){
    for(let i=0 ;i < allButtons.length ; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('dangerr');
    }


}

function buttonsGreen(){
    for(i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('primaryy');}
    

}

function buttonsReset(){
    for(i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyButtons[i])

    }

}

function buttonsRandom(){
    var dataBase=['dangerr','primaryy','happyy','successs']

    for(i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(randomClas(randomm()));

    }


}
function randomm(){
     return Math.floor(Math.random()*4);
}
function randomClas(number){
    return  ['dangerr','primaryy','happyy','successs'][number];
}


let bjGame={
    'you':{'score-span':'#your-score','divv':'#your-box','score':0},
   'Dealer':{'score-span':'#bot-score' ,'divv':'#bot-box','score':0},
   'cards':['2','3','4','5','6','7','8','9','10','vale','dama','pop','aso'],
   'cardMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'vale':10,'dama':10,'pop':10,'aso':[1,11]},
   'wins':0,
   'losses':0,
   'draws':0,
   'isStand':false,
   'turnsOver':false,
};
const YOU=bjGame['you'];
const DEALER=bjGame['Dealer'];

document.querySelector('#btn-new-card').addEventListener('click',blackJackHit);
document.querySelector('#btn-stop').addEventListener('click',dealerLogic);
document.querySelector('#btn-new-game').addEventListener('click',reset);


function blackJackHit(){
    if (bjGame['isStand']===false) {
    let card=randomCard();
    showCard(card,YOU);
    updateScore(card,YOU);
    showScore(YOU);
    console.log(YOU['score']);}
    
}

function showCard (card, activePlayer){
    if(activePlayer['score']<=21){let cardImage=document.createElement('img');
    cardImage.src=`images/${card}.png`;
    document.querySelector(activePlayer['divv']).appendChild(cardImage);}
    
}
function randomCard() {
let randomNumber= Math.floor(Math.random()*13);
return bjGame['cards'][randomNumber];

}
//stu2004221017,mpp2010QwE,mailbox#@!uni,stu2004221017@uni-plovdiv.bg
function reset(){
    //showResult(computeWinner());
    if(bjGame['turnsOver']===true){let selectImages=document.querySelector('#your-box').querySelectorAll('img');
    let selectImagesBot=document.querySelector('#bot-box').querySelectorAll('img');
    for (i=0;i<selectImages.length;i++){
        selectImages[i].remove();
    }
    for (i=0;i<selectImagesBot.length;i++){
        selectImagesBot[i].remove();
    }
    YOU['score']=0;
    DEALER['score']=0;
    document.querySelector('#your-score').textContent=0;
    document.querySelector('#your-score').style.color='black';
    document.querySelector('#bot-score').textContent=0;
    document.querySelector('#bot-score').style.color='black';
    document.querySelector('#black-jack-result').textContent="Let's play";
    document.querySelector('#black-jack-result').style.color='black';
    bjGame['isStand']=false;
    bjGame['turnsOver']=false;
}




}
function updateScore(card,activePlayer){
    if(card==='aso'){
        if (activePlayer['score']+bjGame['cardMap'][card][1]<=21){
            activePlayer['score']+=bjGame['cardMap'][card][1];
        }
        else{activePlayer['score']+=bjGame['cardMap'][card][0]
    }
}   else{
    activePlayer['score'] += bjGame['cardMap'][card];}
}
function showScore(activePlayer){
    if(activePlayer['score']>21){
        document.querySelector(activePlayer['score-span']).textContent='You lost!!';
        document.querySelector(activePlayer['score-span']).style.color='red';
    }else{
    document.querySelector(activePlayer['score-span']).textContent =activePlayer['score']
    }
}

function dealerLogic(){
    bjGame['isStand']=true;
    while(DEALER['score']<15){let card=randomCard();
    showCard(card,DEALER);
    updateScore(card,DEALER);
    showScore(DEALER);
    if(DEALER['score']>=16){
        bjGame['turnsOver']=true;
    showResult(computeWinner());}}

}

function computeWinner(){
    let winner;
    if(YOU['score']<=21){
        if(YOU['score']>DEALER['score'] || DEALER['score']>21){
            bjGame['wins']++;
            winner=YOU ;
            //document.querySelector('winss').textContent=bjGame['wins'];
        }
        else if(YOU['score']<DEALER['score']){
            bjGame['losses']++;
            winner=DEALER;
        }
        else if(YOU['score']=DEALER['score']){
            bjGame['draws']++;
        }
    }
    else if(YOU['score']>21){
        if (DEALER['score']<=21){
            bjGame['losses']++;
            winner=DEALER;
        }
        else if(DEALER['score']>21){
            bjGame['draws']++;
        }
    }
    console.log(bjGame);
    return winner;
}

    function showResult (winner){
        let messagen, messageColor;
        if(winner===YOU){
            document.querySelector('#winss').textContent=bjGame['wins'];
            message='You won';
            messageColor='green';
        }
        else if(winner===DEALER){
            document.querySelector('#losses').textContent=bjGame['losses'];
            message='You lost';
            messageColor='red';
        }
        else{
            document.querySelector('#draws').textContent=bjGame['draws'];
            message='You drew';
            messageColor='black';
        }
        document.querySelector('#black-jack-result').textContent=message;
        document.querySelector('#black-jack-result').style.color=messageColor;


    }





