//grabbing elements
const slardarThumb = document.querySelector('#slardar-a');
const timbersawThumb = document.querySelector('#timbersaw-a');
const abaddonThumb = document.querySelector('#abaddon-a');
const queenOfPainThumb = document.querySelector('#queen-of-pain-a');
const earthshakerThumb = document.querySelector('#earthshaker-a');
const tidehunterThumb = document.querySelector('#tidehunter-a');

const playerSelect = document.querySelector('.player-select');
const opponentSelect = document.querySelector('.opponent-select');

const playButton = document.querySelector('.play-button');
//dice game
const playerGame = document.querySelector('.player-game');
const opponentGame = document.querySelector('.opponent-game');

//game over
const gameOver = document.querySelector('.game-over');
const winner = document.querySelector('.winner');

//class and object definitions
class DotaCharacter{
    constructor(name, heroType, link){
        this.name = name;
        this.heroType = heroType;
        this.link = link
    }
    linkToCharacterInfo(){
        return `<a href="${this.link}" target="_blank">${this.name} Wiki.</a>`;
    }
};
//instantiate objects
const slardar = new DotaCharacter("Slardar","Strength","https://dota2.fandom.com/wiki/Slardar");
const timbersaw = new DotaCharacter("Timbersaw","Strength","https://dota2.fandom.com/wiki/Timbersaw");
const abaddon = new DotaCharacter("Abaddon","Strength","https://dota2.fandom.com/wiki/Abaddon");
const queenOfPain = new DotaCharacter("Queen of Pain","Intelligence","https://dota2.fandom.com/wiki/Queen_of_Pain");
const earthshaker = new DotaCharacter("Earthshaker","Strength","https://dota2.fandom.com/wiki/Earthshaker");
const tidehunter = new DotaCharacter("Tidehunter","Strength","https://dota2.fandom.com/wiki/Tidehunter");

let html = '';
let htmlPlayer = '';
let htmlOpponent = ''; 
let playerSelected = false;
let opponentSelected = false;
//
playerGame.style.display = "none";
opponentGame.style.display = "none";

//add event listener for player select
slardarThumb.addEventListener('click', (e) => {
    html = ''
    e.preventDefault();
    playerSelected = true;
    // playerSelect.style.display = "none";
    html += `<h3>Player One</h3>`;
    html += `<img class="player" src="images/slardar.jpg" alt="slardar naga">`;
    html += `<button class="reset" onClick="window.location.reload();">Reset Pick</button>`
    html += `<p class="bio"><strong>Slardar</strong> Born from the icy depths of Mensch Trench he is always looking forward to his next scrap. ${slardar.linkToCharacterInfo()}</p>`;
    playerSelect.innerHTML = html;
    console.log(playerSelected);
});

timbersawThumb.addEventListener('click', (e) => {
    html = ''
    e.preventDefault();
    playerSelected = true;
    // playerSelect.style.display = "none";
    html += `<h3>Player One</h3>`;
    html += `<img class="player" src="images/timbersaw.jpg" alt="timbersaw">`;
    html += `<button class="reset" onClick="window.location.reload();">Reset Pick</button>`
    html += `<p class="bio"><strong>Timbersaw</strong> Born from the mines of Moonraker Flowe - Timbersaw is an anti-environmentalist. ${timbersaw.linkToCharacterInfo()}</p>`;
    playerSelect.innerHTML = html;
});

abaddonThumb.addEventListener('click', (e) => {
    html = ''
    e.preventDefault();
    playerSelected = true;
    // playerSelect.style.display = "none";
    html += `<h3>Player One</h3>`;
    html += `<img class="player" src="images/abaddon.jpg" alt="abaddon">`;
    html += `<button class="reset" onClick="window.location.reload();">Reset Pick</button>`
    html += `<p class="bio"><strong>Abaddon</strong> Born from the empty void where untold horrors are an everyday reality he thirsts for your soul. ${abaddon.linkToCharacterInfo()}</p>`;
    playerSelect.innerHTML = html;
})

//add event listener for opponent select
queenOfPainThumb.addEventListener('click', (e) => {
    html = ''
    e.preventDefault();
    opponentSelected = true;
    // oppentSelect.style.display = "none";
    html += `<h3>Opponent</h3>`;
    html += `<img class="player" src="images/queenofpain.jpg" alt="queen of pain">`;
    html += `<button class="reset" onClick="window.location.reload();">Reset Pick</button>`
    html += `<p class="bio"><strong>Queen of Pain</strong> Born from the depths of hell this seductive succubus will give you pleasure before she takes your life away. ${queenOfPain.linkToCharacterInfo()}</p>`;
    opponentSelect.innerHTML = html;
});

earthshakerThumb.addEventListener('click', (e) => {
    html = ''
    e.preventDefault();
    opponentSelected = true;
    // opponentSelect.style.display = "none";
    html += `<h3>Opponent</h3>`;
    html += `<img class="player" src="images/earthshaker.webp" alt="earthshaker cow man">`;
    html += `<button class="reset" onClick="window.location.reload();">Reset Pick</button>`
    html += `<p class="bio"><strong>Earthshaker</strong> Born from the pastures of another planet where bovines rule supreme. Watch out for this one - you might get milked! ${earthshaker.linkToCharacterInfo()}</p>`
    opponentSelect.innerHTML = html;
});

tidehunterThumb.addEventListener('click', (e) => {
    html = '';
    e.preventDefault();
    opponentSelected = true;
    // opponentSelect.style.display = "none";
    html += `<h3>Opponent</h3>`;
    html += `<img class="player" src="images/tidehunter.jpg" alt="tidehunter">`;
    html += `<button class="reset" onClick="window.location.reload();">Reset Pick</button>`
    html += `<p class="bio"><strong>Tidehunter</strong> Born from the depths of a sea near you - this horror from the deep can crush you in your sleep. ${tidehunter.linkToCharacterInfo()}</p>`
    opponentSelect.innerHTML = html;
});


//event listener on the roll dice button and adding function capabilities
let playerRolls = [];
let opponentRolls = [];
let roundCount = 0;
//roll dice function
playButton.addEventListener('click', function(){
    roundCount ++;
    playerGame.style.display = "block";
    opponentGame.style.display = "block";
    htmlPlayer = '';
    htmlOpponent = '';
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const dice3 = Math.floor(Math.random() * 6) + 1;
    const dice4 = Math.floor(Math.random() * 6) + 1;
    let playerOneScore = dice1 + dice2;
    if(dice1 == dice2){
        playerOneScore = (dice1 + dice2) * 2;
    }
    if(dice1 == 1 || dice2 == 1){
        playerOneScore = 0;   
    };
    let opponentScore = dice3 + dice4;
    if(dice3 == dice4){
        opponentScore = (dice3 + dice4) * 2;
    }
    if(dice3 == 1 || dice4 == 1){
        opponentScore = 0;
    }
    playerRolls.push(playerOneScore);
    opponentRolls.push(opponentScore);
    let playerOneTotalScore = playerRolls.reduce((a,b) => a + b, 0);
    let opponentTotalScore = opponentRolls.reduce((a,b) => a + b, 0);
    htmlPlayer += `<img class="dice" src="images/dice${dice1}.png">`
    htmlPlayer += `<img class="dice" src="images/dice${dice2}.png">`
    htmlPlayer += `<p>Round Score = ${playerOneScore}</p>`
    htmlPlayer += `<p><strong>Total Score = ${playerOneTotalScore}</strong></p>`
    htmlOpponent += `<img class="dice" src="images/dice${dice3}.png">`
    htmlOpponent += `<img class="dice" src="images/dice${dice4}.png">`
    htmlOpponent += `<p>Round Score = ${opponentScore}.</p>`
    htmlOpponent += `<p><strong>Total Score = ${opponentTotalScore}</strong></p>`
    playerGame.innerHTML = htmlPlayer;
    opponentGame.innerHTML = htmlOpponent;
    let victor = '';
    if(playerOneTotalScore > opponentTotalScore){
        victor = playerOneTotalScore;
    } else if (opponentTotalScore > playerOneTotalScore){
        victor = opponentTotalScore;
    } 
    if(roundCount == 3){
        winner.style.visibility = "visible";
        winner.style.opacity = "0.94";
        playButton.style.display = "none";
        console.log('Heres round 3');
        
        if(victor == playerOneTotalScore){
            winner.innerHTML += `<p><img class="aegis" src="images/aegis.jpeg" alt="the aegis"><button class="close-pop-up" onClick="window.location.reload();">❌</button>Player One is victorius and finished with ${playerOneTotalScore} points!! The opponent finished with ${opponentTotalScore} points. Click the "X" to start a new game.</p>`
        } else if(victor == opponentTotalScore){
            winner.innerHTML += `<p><img class="aegis" src="images/aegis.jpeg" alt="the aegis"><button class="close-pop-up" onClick="window.location.reload();">❌</button>The Opponent is victorius and finished with ${opponentTotalScore} points!! Player One finished with ${playerOneTotalScore} points. Click the "X" to start a new game.</p>`
        } else{
            winner.innerHTML += `<p><img class="aegis" src="images/aegis.jpeg" alt="the aegis"><button class="close-pop-up" onClick="window.location.reload();">❌</button>We finished with a draw - wow! Player One finished with ${playerOneTotalScore} points and the Opponent finished with ${opponentTotalScore} points. Click the "X" to start a new game.</p>`
        }
        
    }
});

