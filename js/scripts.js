//Back-end logic
var pingPong = function(userNumber) {

var startNumber = 1;
var endNumber = userNumber;

var countList = [];

  for (var i = startNumber; i <= endNumber; i++) {
    countList.push(i);
    console.log(countList);
  }
  return countList;
}



//Front-end logic
$(document).ready(function() {
  $("#number-submit").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#user-number").val());

      alert(userNumber);
    var numberOutput = pingPong(userNumber);

    $("#ping-pong-results").text("<li>" + numberOutput + "</li>");
  });
});
