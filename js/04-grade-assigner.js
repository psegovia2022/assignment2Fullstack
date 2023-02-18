let score = parseInt(prompt('Please, enter the student\'s score'));

if (score < 0 || score > 100) {
    alert('The score is invalid. Make sure it is a number between 0 and 100');
}

switch(true) {
    case(score >= 60 && score <= 69):
        console.log('You received a D');
        break;
    case(score >= 70 && score <= 79):
        console.log('You received a C');
        break;
    case(score >= 80 && score <= 89):
        console.log('You received a B');
        break;
    case(score >= 90 && score <=100):
        console.log('You received an A');
        break;
    default:
        console.log('You received an F');
}