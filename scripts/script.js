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

let html = ''
let playerSelected = false
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
    playerSelect.innerHTML = html;
});

timbersawThumb.addEventListener('click', (e) => {
    html = ''
    e.preventDefault();
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
    // opponentSelect.style.display = "none";
    html += `<h3>Opponent</h3>`;
    html += `<img class="player" src="images/tidehunter.jpg" alt="tidehunter">`;
    html += `<button class="reset" onClick="window.location.reload();">Reset Pick</button>`
    html += `<p class="bio"><strong>Tidehunter</strong> Born from the depths of a sea near you - this horror from the deep can crush you in your sleep.</p>`
    opponentSelect.innerHTML = html;
});
