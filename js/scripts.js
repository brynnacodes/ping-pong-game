//Back-end logic

var pingPong = function(userNumber) {

var startNumber = 1;
var endNumber = userNumber;
var countNumbers = [];

  for (var i = startNumber; i <= endNumber; i++) {

    if(i%3 !== 0 && i%5 !==0 && i%15 !== 0) {
      countNumbers.push(" " + i);
    } else if (i%15 === 0) {
      countNumbers.push(" ping-pong");
    } else if (i%3 === 0) {
      countNumbers.push(" ping");
    } else if (i%5 === 0) {
      countNumbers.push(" pong");
    }
  }
  return countNumbers;
}

//Front-end logic

$(document).ready(function() {
  $("#number-submit").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#user-number").val());
    var numberOutput = pingPong(userNumber);

    $("#ping-pong-results").text(numberOutput);
  });
});
