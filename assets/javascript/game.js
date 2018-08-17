$(document).ready(function() {
//    Set the global variables
    // set the computer guess between 19 and 120
    var computerGuess = Math.floor(Math.random() * 101) + 19; 
    // set user number to zero initially
    var usersNumber = 0;
    // set the images random numbers
    var falcon = Math.floor(Math.random() * 11) + 1;
    var rick    = Math.floor(Math.random() * 11) + 1;
    var serenity = Math.floor(Math.random() * 11) + 1;
    var tardis = Math.floor(Math.random() * 11) + 1;

        // Set wins and losses to 0
    var wins = 0;
    var losses = 0;

    



    // Display the Computer's guess, users number, wins, and losses.
    $("#computerNumber").text(computerGuess);
    $("#userNumber").text(usersNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);

    // Initialize sequence
    function initializeGame() {
        // make new random numbers and set users number back to zero
        computerGuess = Math.floor(Math.random() * 101) + 19;
        usersNumber = 0;
        falcon = Math.floor(Math.random() * 11) + 1;
        rick    = Math.floor(Math.random() * 11) + 1;
        serenity = Math.floor(Math.random() * 11) + 1;
        tardis = Math.floor(Math.random() * 11) + 1;

        // display new computerGuess and UsersNumber
        $("#computerNumber").text(computerGuess);
        $("#userNumber").text(usersNumber);

    };



    // on click events

    $("#theFalcon").on("click", function() {
        usersNumber = usersNumber + falcon;
        $("#userNumber").text(usersNumber);
        checkNumbers();

    });

    $("#RicksShip").on("click", function() {
        usersNumber = usersNumber + rick;
        $("#userNumber").text(usersNumber);
        checkNumbers();
        

    });
    $("#Serenity").on("click", function() {
        usersNumber = usersNumber + serenity;
        $("#userNumber").text(usersNumber);
        checkNumbers();
        

    });
    $("#Tardis").on("click", function() {
        usersNumber = usersNumber + tardis;
        $("#userNumber").text(usersNumber);
        checkNumbers();
        

    });
    
    function checkNumbers() {
    // if/else statement to find if users guess matches the computers guess
    if(usersNumber === computerGuess) {
        wins++;
        $("#wins").text(wins);
        initializeGame();
        checkWins();



    }else if(usersNumber >= computerGuess) {
        losses++;
        $("#losses").text(losses);
        initializeGame();

    }

    };
    
    function checkWins() {
        if (wins === 2){

            $(location).attr('href', 'http://stackoverflow.com');
        };
    };
});