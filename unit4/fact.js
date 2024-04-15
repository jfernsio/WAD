let number1 = document.getElementById("num1");

function warn() {
  number1 = parseInt(document.getElementById("num1").value);
  fact = 1;
  for (i = 1; i <= number1; i++) {
    fact = fact * i;
  }
  document.write("the fcat is ", fact);
}
