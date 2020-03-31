import isYes from './isYes.js';

//DOM elements go here
const quizButton = document.getElementById('button');
const result = document.getElementById('result');

// Initialization
function beginQuiz() {
    let correctAnswers = 0; // Setting initial state of correct answers
    let name = ''; // Empty string to be modified

    // Initial prompt
    alert('Hey there, buddy. Are you ready for the wizard\'s trial?');

    // Offers ok/cancel prompt to continue or break
    const confirmed = confirm('Really? It\'s only meant for wizards.');
    if (confirmed === false) {
        return; // If canceled function ends
    }

    // Name and adjective assignment
    const firstName = prompt("What's your name?");
    name = firstName;

    const adjective = prompt('What word would your friends use to describe you?');
    name = firstName + ' the ' + adjective;

    // Pyramid scheme offer
    const investTest = prompt('Are you willing to invest in my multi-tiered business operation that promises massive returns? (Y/N)');

    // If true this adds to correctAnswers which is the parameter to determine the result
    if (isYes(investTest) === true) {
        correctAnswers++;
    }

    const capitalTest = prompt('Are you willing to donate at least 50 percent of your liquidity to my operation? (Y/N)');

    // If true this adds to correctAnswers which is the parameter to determine the result
    if (isYes(capitalTest) === true) {
        correctAnswers++;
    }

    const cultTest = prompt('Are you ready to declare business as your new religion? (Y/N)');

    // If true this adds to correctAnswers which is the parameter to determine the result
    if (isYes(cultTest) === true) {
        correctAnswers++;
    }

    // Initial string built with name (composed of firstName and adjective)
    let response = 'Your name is ' + name;

    if (correctAnswers >= 2) {
        response += ' and you have passed the Wizard\'s Trial with ' + correctAnswers + '/3 correct answers. Soon we will both be rich. Pretty cool.';
    }
    else {
        response += ' and you have failed the Wizard\'s Trial with ' + correctAnswers + '/3 correct answers.. You have horrible business sense and by not partnering with me in this operation you have cost yourself millions!';
    }
    // Editing the html response
    result.textContent = response;
}



// Event Listener
quizButton.addEventListener('click', beginQuiz);
