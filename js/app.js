'use strict'; //declares strict

/* preloads audio sounds for immediate buffer, chrome disrupts from spamming */
var dingSound = new Audio();
dingSound.src = './content/ding.wav';
dingSound.preload = 'auto';
var zonkSound = new Audio();
zonkSound.src = './content/zonk.wav';
zonkSound.preload = 'auto';
var queuSound = new Audio();
queuSound.src = './content/queu.wav';
queuSound.preload = 'auto';

/* guessing game about me that involves 7 questions */
function guessingGame() {

    /* enter user name*/
    var userName = prompt('Please enter your name.'); 
        console.log('The users name is ' + userName);
        alert('Hi there ' + userName + '! Now, lets play the guessing game!');

    /* array of initial responses. Number of dings and zonks must be the same, or alert may return undefined */
    var ding = ['Correct!', 'Great guess, ' + userName + '!', 'That is true!', 'That is correct!', 'Wow! ' + userName + ' You\'re good at this!', 'Ding! Ding! Ding! We have a winner!', 'Did you peak at the code ' + userName + '?']; // array of dings
    var zonk = ['Wrong!', 'Incorrect!', 'That is false!', 'That is incorrect!', 'A four year old can guess better, ' + userName + '!', 'Zooooooonk!', 'Don\'t quit your day job, ' + userName + '.']; //array of zonks
    
    var dLength = ding.length; // gets total number of strings in array
    var zLength = zonk.length; // gets total number of strings in array

    /* randomizes dings and zonks based on total number of dings and zonks divided by 2*/
    function randomIndex(array) { 
        var i = Math.floor((Math.random()*(dLength + zLength)/2)); 
        return (array[i]);
    }

    var answers = {}; // array that tracks answers/questions total

    var totalScore = 0; // keeps track of score total

    /* question One */
    queuSound.play();
    answers.qOne = prompt('Is Elijah 5 feet, 9 inches tall?');  
    answers.qOne = answers.qOne.toLowerCase(); // normalizes strings to lowercase
    if(answers.qOne === 'yes' || answers.qOne === 'y') {
        console.log('Elijah is 5 feet, 9 inches tall.');
        alert(randomIndex(ding) + ' Elijah is 5 feet, 9 inches tall.');
        totalScore ++;
    } else if(answers.qOne === 'no' || answers.qOne === 'n') {
        console.log('Elijah is 5 feet, 9 inches tall.');
        alert(randomIndex(zonk) + ' Elijah is 5 feet, 9 inches tall.');
    } else {
        console.log('Elijah is 5 feet, 9 inches tall.');
        alert('Please enter a response into the prompt.'); 
    }

    /* question Two */
    answers.qTwo = prompt('Does Elijah weigh 195 lbs?'); 
    answers.qTwo = answers.qTwo.toLowerCase(); // normalizes strings to lowercase
    if(answers.qTwo === 'yes' || answers.qTwo === 'y') { 
        console.log('Elijah weighs 175 lbs, not 195 lbs.');
        alert(randomIndex(zonk) + ' Elijah weighs 175 lbs, not 195 lbs.');
    } else if(answers.qTwo === 'no' || answers.qTwo === 'n') {
        console.log('Elijah weighs 175 lbs, not 195 lbs.');
        alert(randomIndex(ding) + ' Elijah weighs 175 lbs, not 195 lbs.');
        totalScore ++;
    } else {
        console.log('Elijah weighs 175 lbs, not 195 lbs.');
        alert('Please enter a response into the prompt.');
    }

    /* question Three */
    answers.qThree = prompt('Did Elijah serve in the military?');
    answers.qThree = answers.qThree.toLowerCase(); // normalizes strings to lowercase
    if(answers.qThree === 'yes' || answers.qThree === 'y') {
        console.log('Elijah served in the Army.');
        alert(randomIndex(ding) + ' Elijah served in the Army.');
        totalScore ++;
    } else if(answers.qThree === 'no' || answers.qThree === 'n') {
        console.log('Elijah served in the Army.');
        alert(randomIndex(zonk) + ' Elijah served in the Army.');
    } else {
        console.log('Elijah served in the Army.');
        alert('Please enter a response into the prompt.');
    }

    /* question Four */
    answers.qFour = prompt('Was Elijah born in Germany?'); 
    answers.qFour = answers.qFour.toLowerCase(); // normalizes strings to lowercase
    if(answers.qFour === 'yes' || answers.qFour === 'y') {
        console.log('Elijah was born in Germany.');
        alert(randomIndex(ding) + ' Elijah was born in Germany.');
        totalScore ++;
    } else if(answers.qFour === 'no' || answers.qFour === 'n') {
        console.log('Elijah was born in Germany.');
        alert(randomIndex(zonk) + ' Elijah was born in Germany.');
    } else {
        console.log('Elijah was born in Germany.');
        alert('Please enter a response into the prompt.');
    }

    /* question Five */
    answers.qFive = prompt('Is Elijah Korean?'); 
    answers.qFive = answers.qFive.toLowerCase(); // normalizes strings to lower case
    if(answers.qFive === 'yes' || answers.qFive === 'y') {

        console.log('Elijah is Korean.');
        alert(randomIndex(ding) + ' Elijah is Korean.');
        totalScore ++;
    } else if(answers.qFive === 'no' || answers.qFive === 'n') {
        console.log('Elijah is Korean.');
        alert(randomIndex(zonk) + ' Elijah is Korean.');
    } else {
        console.log('Elijah is Korean.');
        alert('Please enter a response into the prompt.');
    }

    /* calculates DOB based on current time - dob(y, m, d) */
    function calculateAge(dob) { 
        var diffMS = Date.now() - dob.getTime();
        var ageDate = new Date(diffMS); 
        dob = new Date(1984, 6, 11);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    
    var elijahsAge = calculateAge(new Date(1984, 6, 11)); // gets Elijah's DOB from calculateAge

    /* question Six */
    for(var tries = 0; tries < 4; tries++) {
        var tries = tries;

        answers.qSix = prompt('What is Elijah\'s Age?');
        console.log(' Elijah is ' + elijahsAge + ' years old.');
        if(answers.qSix == elijahsAge) {
            console.log(' Elijah is ' + elijahsAge + ' years old.');
            alert(randomIndex(ding) + ' Elijah is ' + elijahsAge + ' years old.');
            totalScore ++;
            break;
        } else {
            console.log(' Elijah is ' + elijahsAge + ' years old.');
            alert(randomIndex(zonk) + ' Try again. You have ' + (3 - tries) + ' tries left.');
        }
    }

    var qSevenArray = ['spiderman', 'ironMan', 'doctor strange', 'batman', 'superman', 'starlord', 'deadpool']
    var triesTotal = 6
    var correct = false;

    /* question Seven */
    for(var tries = 0; tries < 6; tries++) {
        var tries = tries;
        answers.qSeven = prompt('What is one of Elijah\'s Favorite Comicbook Superheros?');
        answers.qSeven = answers.qSeven.toLowerCase(); // normalizes strings to lowercase
        console.log('Spiderman, Ironman, Doctor Strange, Batman, Superman, Starlord, Deadpool.');
        if(answers.qSeven === qSevenArray[0] || answers.qSeven === qSevenArray[1] || answers.qSeven === qSevenArray[2] || answers.qSeven === qSevenArray[3] || answers.qSeven === qSevenArray[4] || answers.qSeven === qSevenArray[5] || answers.qSeven === qSevenArray[6]) {
            console.log('Spiderman, Ironman, Doctor Strange, Batman, Superman, Starlord, Deadpool.');
            alert(randomIndex(ding) + ' Elijah likes Spiderman, Ironman, Doctor Strange, Batman, Superman, Starlord, and Deadpool.');
            totalScore ++; 
            correct = true;
            break;
        } else {
            triesTotal --;
            console.log('Spiderman, Ironman, Doctor Strange, Batman, Superman, Starlord, Deadpool.');
            alert(randomIndex(zonk) + ' Try again. You have ' + (triesTotal) + ' tries left.');
        }
    }

    if(triesTotal === 0 && correct === false) {
        alert('Elijah likes Spiderman, Ironman, Doctor Strange, Batman, Superman, Starlord, and Deadpool.');
    }

    answers.push;

    function displayScore() {
        var elScore = document.getElementById('button');
        elScore.textContent = 'You Scored ' + totalScore + ' Points! Play Again?';
    } 
    
    /* gives alert based on total score, must update IMPORTANT! for loop when adding questions to prevent breaking! */
    if(totalScore === 7) {
        alert('Congratulations, ' + userName + '! You scored ' + totalScore + ' points! You guessed right on all the questions!');
        console.log(userName + ' scored ' + totalScore + ' points.');
        displayScore();
    } else if(totalScore >= 4) {
        alert('Not bad, ' + userName + '! You scored ' + totalScore + ' points! You guessed right on more than half the questions!');
        console.log(userName + ' scored ' + totalScore + ' points.');
        displayScore();
    } else if(totalScore < 4) {
        alert('Wow that was bad, ' + userName + '! You scored ' + totalScore + ' points and guessed right on less than half of the questions.');
        console.log(userName + ' scored ' + totalScore + ' points.');
        displayScore();
    } else { 
        alert('You should try participating next time!');
        console.log(userName + ' scored ' + totalScore + ' points.');
    }

};

/* broken legacy code, helps automate score response based on number of questions, possibly broken at Math.floor(numQuestionsArray.length/2, appeared to work with total questions was an even number
var numQuestionsArray = []; // tracks number of questions
IMPORTANT! for loop pushes number of questions into array, update total questions in counter whenever a new question is added
for(var i = 0; i < 7; i++) {
    numQuestionsArray.push(1); 
    }
returns number of total questions in console log for debugging purposes
    console.log('Total number of questions = ' + numQuestionsArray.length) 
gives alert based on total score, must update IMPORTANT! for loop when adding questions to prevent breaking! 
  if(totalScore === numQuestionsArray.length) {
    alert('Congratulations, ' + userName + '! You scored ' + totalScore + ' points! You guessed right on all the questions!');
    console.log(userName + ' scored ' + totalScore + ' points.');
} else if(totalScore > Math.floor(numQuestionsArray.length/2)) {
    alert('Not bad, ' + userName + '! You scored ' + totalScore + ' points! You guessed right on more than half the questions!');
    console.log(userName + ' scored ' + totalScore + ' points.');
} else if(totalScore < Math.floor(numQuestionsArray.length/2)) {
    alert('Wow that was bad, ' + userName + '! You scored ' + totalScore + ' points and guessed right on less than half of the questions.');
    console.log(userName + ' scored ' + totalScore + ' points.');
} */