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


let html = '';
let playerSelected = false;
let opponentSelected = false;
//add event listner for player select
slardarThumb.addEventListener('click', (e) => {
    html = ''
    e.preventDefault();
    playerSelected = true;
    // playerSelect.style.display = "none";
    html += `<h3>Player One</h3>`;
    html += `<img class="player" src="images/slardar.jpg" alt="slardar naga">`;
    html += `<button class="reset" onClick="window.location.reload();">Reset Pick</button>`
    html += `<p class="bio"><strong>Slardar</strong> Born from the icy depths of Mensch Trench he is always looking forward to his next scrap.</p>`;
    html += `<div class="goblin">`
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
    html += `<p class="bio"><strong>Timbersaw</strong> Born from the mines of Moonraker Flowe - Timbersaw is an anti-environmentalist.</p>`;
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
    html += `<p class="bio"><strong>Abaddon</strong> Born from the empty void where untold horrors are an everyday reality he thirsts for your soul.</p>`;
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
    html += `<p class="bio"><strong>Queen of Pain</strong> Born from the depths of hell this seductive succubus will give you pleasure before she takes your life away.</p>`;
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
    html += `<p class="bio"><strong>Earthshaker</strong> Born from the pastures of another planet where bovines rule supreme. Watch out for this one - you might get milked!</p>`
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
    html += `<p class="bio"><strong>Tidehunter</strong> Born from the depths of a sea near you - this horror from the deep can crush you in your sleep.</p>`
    opponentSelect.innerHTML = html;
});


const dice = {
    values : [1,2,3,4,5,6],
    rollDice: function(){
        html = '';
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
        playerGame.innerHTML = html;
        console.log('rolled dice');
        console.log(dice1);
    }
}

// playButton.addEventListener('click', dice.rollDice());
// let playerSum = 0;
// let opponentSum = 0;
//event listener on the roll dice button and adding function capabilities
let rolls = [];
playButton.addEventListener('click', function(){
    htmlPlayer = '';
    htmlOpponent = '';
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let dice3 = Math.floor(Math.random() * 6) + 1;
    let dice4 = Math.floor(Math.random() * 6) + 1;
    let playerOneScore = dice1 + dice2;
    rolls.push(dice1);
    rolls.push(dice2);
    let playerOneTotalScore = rolls.reduce((a,b) => a + b, 0);
    htmlPlayer += `<img class="dice" src="images/dice${dice1}.png">`
    htmlPlayer += `<img class="dice" src="images/dice${dice2}.png">`
    htmlPlayer += `<p>Round Score = ${playerOneScore}</p>`
    htmlPlayer += `<p>Total Score = ${playerOneTotalScore}.</p>`
    htmlOpponent += `<img class="dice" src="images/dice${dice3}.png">`
    htmlOpponent += `<img class="dice" src="images/dice${dice4}.png">`
    playerGame.innerHTML = htmlPlayer;
    opponentGame.innerHTML = htmlOpponent;
    console.log(dice1);
    console.log(rolls)
    console.log(rolls.reduce((a,b) => a + b, 0));
    return dice1;
});

console.log(rolls);