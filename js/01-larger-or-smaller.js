let int1 = parseFloat(prompt('Please, enter a number'));
let int2 = parseFloat(prompt('Please, enter a second number'));

if (int1 > int2 && int1 != int2) {
    alert(`The first number you chose is ${int1} it the larger one`);
} else if (int2 > int1 && int1 != int2) {
    alert(`The second number you chose is ${int2} it the larger one`)
} else {
    alert(`The first number and the second number you chose are the same`);
}