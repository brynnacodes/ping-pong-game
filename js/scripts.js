//Back-end logic









//Front-end logic
$(document).ready(function() {
  $("#number-submit").submit(function(event) {
    var userNumber = parseInt($("#user-number").val());
    var numberOutput = pingPong(userNumber);

    $("#ping-pong-results").text(numberOutput);
  });
});
