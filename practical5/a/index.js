const userInput = document.getElementById('input');
const submit = document.getElementById('submit');
let val;
let fact =1;
const Click = () => {

 val = userInput.value;
//  var fibSeries = [0, 1];
//  for (var i = 2; i < val; i++) {
//      fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
// }
// userInput.innerText = document.write(fibSeries);

for(x =1; x <=val; x++) {

    fact = fact*x;
}
document.write(fact);
}
submit.addEventListener('click',Click);