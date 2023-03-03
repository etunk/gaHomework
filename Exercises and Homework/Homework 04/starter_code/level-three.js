/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

arenaEl.addEventListener("click",function(ball) {
    console.log()
    if (ball.target.classList.contains('js-ball')){
        if(ball.target.dataset.increment == 20){
            score = score + 20;
        } else if(ball.target.dataset.increment == 10){
            score = score + 10;
        } else{
            score = score + 5;
        }
        
        
        if (score < 100){
            scoreEl.innerText = score;
        } else {
            declareWinner();
        }
        }
    });
    
    function declareWinner() {
      document.body.classList.add('game-over');
    }
