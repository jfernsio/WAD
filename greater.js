let userinput1 = document.getElementById('num1');
let userinput2 = document.getElementById('num2');

function find() {
    userinput1 = parseInt(document.getElementById('num1').value);
    userinput2 = parseInt(document.getElementById('num2').value);

    if(userinput1 > userinput2) {
        document.write('Number 1 is greater');
    } else {
        document.write('Number 2 is greater');
    }
}