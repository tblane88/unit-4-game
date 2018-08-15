$(document).ready(function() {
//    Set the global variables
    // set the computer guess between 19 and 120
    var computerGuess = Math.floor(Math.random() * 101) + 19 
    // set user number to zero initially
    var usersNumber = 0



    // Display the Computer's guess
    $("#computerNumber").text(computerGuess);
    $("#userNumber").text(usersNumber);


});