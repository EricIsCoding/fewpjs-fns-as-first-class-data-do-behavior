/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
 let timeNum = parseInt(timeString.split(":").join(""))
 debugger;
 if (timeNum < 1200) {
  debugger;
   return "Good Morning"
 } else if (timeNum >= 1200 && timeNum < 1700) {
  debugger;
   return "Good Afternoon"
 } else if (timeNum > 1700) {
  debugger;
   return "Good Evening"
 }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let greeting = document.getElementById("greeting")
  greeting.innerText = message
}