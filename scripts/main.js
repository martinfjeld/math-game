const displayScore = document.querySelector('#score');
const displayHighscore = document.querySelector('#highscore');
const displayLife = document.querySelector('#life');
const input = document.querySelector('input');
const timer = document.querySelector('#timer');

function redBlink(){
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('html').style.backgroundColor = 'red';
    setTimeout(() => {
        document.querySelector('body').style.backgroundColor = 'lightsalmon';
        document.querySelector('html').style.backgroundColor = 'lightsalmon';
    }, 100);
}

let num1 = Math.trunc(Math.random() * 20) + 1,
    num2 = Math.trunc(Math.random() * 20) + 1,
    sum = num1 + num2,
    life = 3,
    score = 0,
    highscore = 0,
    timeOut,
    counter,
    timeRule;

function countDown(){
    counter = timeRule;
    timeOut = setInterval(() => {
            counter--;
        if (life === 1 && counter === -1){
            life--;
            startGame();
        } else if(counter === -1){
            life--;
            redBlink();
            counter = timeRule;
            timer.textContent = timeRule;
            displayLife.textContent = life;
        } else {
            timer.textContent = counter;
        }
    }, 1000);


};

function startGame(){
    document.querySelector('h1').textContent = 'Calculate!';
    document.querySelector('.firstNumber').textContent = num1;
    document.querySelector('.secondNumber').textContent = num2;
    displayScore.textContent = score;
    displayLife.textContent = life;
    clearInterval(timeOut);
    countDown();
    timer.textContent = timeRule;
    if(life === 0){
        clearInterval(timeOut);
        document.querySelector('#life').textContent = life;
        document.querySelector('#calculation').innerHTML = '';
        document.querySelector('h1').style.marginTop = '250px'; 
        document.querySelector('h1').textContent = 'Game over!';
        input.style.display = 'none';
        document.getElementById('startGame').textContent = 'Try again';
        setTimeout(() => {   
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('html').style.backgroundColor = 'red';
        }, 100);
        if(score > 0 && score > highscore){
                highscore = score;

                displayHighscore.textContent = highscore;
                document.querySelector('h1').innerHTML += `<p style="font-size: 15px;">New highscore: ${highscore}</p>`;
        }
    }
}

function restartSceneSuccess(){
    score++;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('html').style.backgroundColor = 'green';
    setTimeout(() => {
        document.querySelector('body').style.backgroundColor = 'lightsalmon';
        document.querySelector('html').style.backgroundColor = 'lightsalmon';
    }, 100);
    displayScore.textContent = score;
    displayHighscore.textContent = highscore;
    displayLife.textContent = life;
    document.querySelector('input').value = '';
    num1 = Math.trunc(Math.random() * 20) + 1;
    num2 = Math.trunc(Math.random() * 20) + 1;
    sum = num1 + num2;

    startGame();
}

function restartSceneFail(){
    life--;
    redBlink();
    displayScore.textContent = score;
    displayLife.textContent = life;
    document.querySelector('input').value = '';
    num1 = Math.trunc(Math.random() * 20) + 1;
    num2 = Math.trunc(Math.random() * 20) + 1;
    sum = num1 + num2;

    startGame();
}


window.addEventListener('keydown', () => {

    const guess = Number(document.querySelector('#userInput').value);
    
    // Checking if RETURN is pressed
    if(event.keyCode === 13 && guess){

        // Checking if life is more than 0
        if(life > 0){

            // Checking if user guess is correct
            if(guess === sum){
                restartSceneSuccess();
            } else {
                restartSceneFail();
            }

        // If the user has no more life
        } 
    }
});

document.getElementById('startGame').addEventListener('click', () => {
    if(counter && timeRule){
        life = 3;
        score = 0;
        clearInterval(timeOut);
        document.querySelector('#life').textContent = life;
        document.querySelector('#calculation').innerHTML = `
            <p>What's <span class="firstNumber"></span> + <span class="secondNumber"></span>?</p>
        `;
        document.querySelector('h1').style.marginTop = '100px';
        document.querySelector('h1').textContent = 'Chose difficulity:';
        input.style.display = 'block';
        document.getElementById('startGame').textContent = 'New Game';
        document.querySelector('body').style.backgroundColor = 'lightsalmon';
        document.querySelector('html').style.backgroundColor = 'lightsalmon';
        input.focus();
        document.querySelector('#chooseDifficulty').style.display = 'none';
        startGame();
        setTimeout(() => {
            document.querySelector('h1').textContent = 'Calculate!';
        }, 100)
    }
});

document.querySelector('#easy').addEventListener('click', (event) =>{
    counter = 10;
    timeRule = 10;
    timer.textContent = counter;
    event.target.classList.add('chosen');
    document.querySelector('#medium').classList.remove('chosen');
    document.querySelector('#hard').classList.remove('chosen');
});

document.querySelector('#medium').addEventListener('click', () =>{
    counter = 7;
    timeRule = 7;
    timer.textContent = counter;
    event.target.classList.add('chosen');
    document.querySelector('#easy').classList.remove('chosen');
    document.querySelector('#hard').classList.remove('chosen');
});

document.querySelector('#hard').addEventListener('click', () =>{
    counter = 3;
    timeRule = 3;
    timer.textContent = counter;
    event.target.classList.add('chosen');
    document.querySelector('#easy').classList.remove('chosen');
    document.querySelector('#medium').classList.remove('chosen');
});


const martin = {
    firstName: 'Martin',
    lastName: 'Fjeld',
    age: 25
}

const hannah = Object.assign({}, martin);

hannah.firstName = 'Hannah';

console.log(martin.firstName, ' ', hannah.firstName);