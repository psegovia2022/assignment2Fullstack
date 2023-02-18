let coinFlip = Math.round(Math.random());

let choice = prompt('Please choose heads or tails').toLowerCase();

if (coinFlip === 0) {
   if(choice === 'heads') {
    alert('The flip was heads and you chose heads...you win!');
   } else if (choice === 'tails') {
    alert('The flip was heads but you chose tails...you lose!');
   } else {
    alert('You chose something different from heads or tails. Start again');
   }
} else if (coinFlip === 1) {
    if(choice === 'tails') {
    alert('The flip was tails and you chose tails...you win!');
}else if(choice === 'heads') {
    alert('The flip was tails but you chose heads...you lose!');
} else {
    alert('You chose something different from heads or tails. Start again');
   }
}
