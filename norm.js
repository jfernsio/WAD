// var n1;
// var n2;

// function add () {
//     n1 = (document.getElementById("1").value);
//     n2 = (document.getElementById("2").value);

//     var result = parseInt(n1) + parseInt(n2);
//     document.write("Result : " , result);
// }

// Get references to the input fields and the button
// var input1 = document.getElementById("1");
// var input2 = document.getElementById("2");
// var addButton = document.getElementById("addButton");

// // Function to perform addition
// function add() {
//     var a = parseFloat(input1.value);
//     var b = parseFloat(input2.value);
//     var result = a + b;
//     alert("Result: " + result);
// }

// Attach click event listener to the button
// addButton.addEventListener("click", add);



function add()  {
  console.log("called");
var a = (document.getElementById("num1").value);
var b = (document.getElementById("num2").value);
var c;
  
    var c = parseInt(a) + parseInt(b);
  
  document.getElementById("result").innerHTML = c;

//  let one = parseInt(a);
//  let  two =  parseInt(b);
//  const result = one+two;
//  document.write(result);  

}

// function add() {
//     function add() {
//         console.log("Function add() called"); // Debug statement
//         var a = document.getElementById("num1").value;
//         var b = document.getElementById("num2").value;
//         console.log("Input values:", a, b); // Debug statement
//         var c = parseFloat(a) + parseFloat(b);
//         console.log("Result:", c); // Debug statement
//         document.getElementById("result").innerHTML = c;
//     }
    
// }