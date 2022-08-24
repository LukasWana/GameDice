// Write Javascript code!

// https://i.ibb.co/jZRZ6V9/dice6.png
// https://i.ibb.co/SJ1YHrP/dice5.png
// https://i.ibb.co/2hLpnV6/dice4.png
// https://i.ibb.co/PZKH1gf/dice3.png
// https://i.ibb.co/VY4zGTX/dice2.png
// https://i.ibb.co/sWPGWDB/dice1.png

// zaokrouhleni cisel
// floor = dolu
// round = matematicke
// ceil = nahoru
// const dice = Math.ceil(Math.random()*6);

//zakladni promene
var totalScore, roundScore, activePlayer, dice, playGame;

newStart();

function newStart(){
  totalScore = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  playGame = true;
  document.querySelector('#container').style.display = 'none';

  // vynulovani a schovani kostky
  document.getElementById('totalScorePlayer-0').textContent = 0;
  document.getElementById('totalScorePlayer-1').textContent = 0;
  document.getElementById('currentScore-0').textContent = 0;
  document.getElementById('currentScore-1').textContent = 0;

  document.querySelector('.diceImage').style.display = 'none';

  // texty do puvodniho stavu
  document.querySelector("#player-0").textContent = "Player 1";
  document.querySelector("#player-1").textContent = "Player 2";

  // vratime zvyrazneni na prvniho hrace
  document.querySelector('.totalScore0').classList.add("active");
  document.querySelector('.totalScore1').classList.remove("active");

}

document.querySelector('.newGame').addEventListener('click', newStart);

document.querySelector('.rollDice').addEventListener('click', function() {
  if(playGame){
    // generuje cislo 1-6
    var dice = Math.ceil(Math.random() * 6);

    // zobrazi obrazek kostky
    var diceElement = document.querySelector('.diceImage');
    diceElement.style.display = 'block';
    console.log((diceElement.src = 'img/dice' + dice + '.gif'));

    // const newLocal = setTimeout(3000);

    // scita cisla z kostky

    setTimeout( function() {
      if (dice !== 1){
        roundScore = roundScore + dice;
        document.getElementById('currentScore-' + activePlayer).textContent = roundScore;
      } else {
        // setInterval(myTimer, 3000);
        nextPlayer();
        // console.log(activePlayer);
      }
    }, 1200 );

  }
});

// meni playera
function nextPlayer(){
  if(activePlayer == 0) {
    setTimeout( function() {
      activePlayer = 1;
    }, 600 );
  } else {
      activePlayer = 0;
  }
    roundScore = 0;
    document.getElementById('currentScore-0').textContent = 0;
    document.getElementById('currentScore-1').textContent = 0;
    document.querySelector('.totalScore0').classList.toggle("active");
    document.querySelector('.totalScore1').classList.toggle("active");
  }

  document.querySelector('.holdScore').addEventListener('click', function() {
    if(playGame){
      // podrzet skore pro aktivniho hrace
      totalScore[activePlayer] = totalScore[activePlayer] + roundScore;
      document.querySelector('#totalScorePlayer-' + activePlayer).textContent = totalScore[activePlayer]
      if(totalScore[activePlayer] >= 5) {
        document.querySelector("#player-" + activePlayer).textContent = "Winner!!!"
        document.querySelector('.diceImage').style.display = 'none';
        document.querySelector('#container').style.display = 'block';
        playGame = false;
      } else {
        nextPlayer();
      }
    }
  });



  // // kostka spadne dolu
  // let ball = document.getElementById("diceAni");

  //     var myVar = setInterval(spostaDiv, 90);
  //     var margin = 0;

  //     let l = window.screen.height;
  //     let w = 1300;

  //     function spostaDiv() {
  //       console.log(w);
  //       if (margin == w) {
  //         margin = 0 + "px";
  //       } else {
  //         ball.style.marginLeft = margin + "px";
  //       }
  //       margin += 10;
  //     }