function checkPrime() {
  const numberInput = document.getElementById("numberInput");
  const number = parseInt(numberInput.value);

  if (number < 2) {
    return document.write("Not a prime number");
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return document.write("Not a prime number");
    }
  }
  return document.write(`${number} Is a prime number`);
}
