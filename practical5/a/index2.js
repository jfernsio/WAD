let userInput = (document.getElementById('input').value);
const submit = document.getElementById('submit');



const calculateSum = () => {
var sum = 0;
for (var i = 0; i <userInput.length; i++) {
    var num = parseInt(userInput[i]);
    if (!isNaN(num)) {
        sum += num;
    }
    console.log(sum);
}

}