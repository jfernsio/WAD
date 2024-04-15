let userinput = document.getElementById("num");

function fibz() {
  userinput = parseInt(document.getElementById("num").value);
  var a = 0;
  var b = 1;

  for (let i = 0; i <= userinput; i++) {
    fib = a + b;
    a = b;
    b = fib;
  }
  document.write("The fibonacci series for given number is", fib);
}
