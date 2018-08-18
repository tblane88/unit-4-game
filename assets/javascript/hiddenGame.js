$(document).ready(function() {
    // global variables
    var opponentPicked = false;
    var heroPicked = false;



    // initial click me for heros
   $("#HanHero").on("click", function () {
       if (!heroPicked) {
        //    hide the other heros
            $("#RickHero").addClass("hidden");
            $("#MalcolmHero").addClass("hidden");
            $("#DoctorHero").addClass("hidden");

            // unhide the opponents
            $("#RickOpponent").removeClass("hidden");
            $("#MalcolmOpponent").removeClass("hidden");
            $("#DoctorOpponent").removeClass("hidden");
            
            heroPicked = true;
       };

   });

   $("#RickHero").on("click", function () {
       if (!heroPicked) {
        //    hide the other heros
            $("#HanHero").addClass("hidden");
            $("#MalcolmHero").addClass("hidden");
            $("#DoctorHero").addClass("hidden");

            // unhide the opponents
            $("#HanOpponent").removeClass("hidden");
            $("#MalcolmOpponent").removeClass("hidden");
            $("#DoctorOpponent").removeClass("hidden");

            heroPicked = true;

       };

   });

   $("#MalcolmHero").on("click", function () {
       if (!heroPicked) {
        //    hide the other heros
            $("#RickHero").addClass("hidden");
            $("#HanHero").addClass("hidden");
            $("#DoctorHero").addClass("hidden");

            // unhide the opponents
            $("#RickOpponent").removeClass("hidden");
            $("#HanOpponent").removeClass("hidden");
            $("#DoctorOpponent").removeClass("hidden");

            heroPicked = true;

       };

   });

   $("#DoctorHero").on("click", function () {
       if (!heroPicked) {
        //    hide the other heros
            $("#RickHero").addClass("hidden");
            $("#MalcolmHero").addClass("hidden");
            $("#HanHero").addClass("hidden");

            // unhide the opponents
            $("#RickOpponent").removeClass("hidden");
            $("#MalcolmOpponent").removeClass("hidden");
            $("#HanOpponent").removeClass("hidden");

            heroPicked = true;

       }

   });


//    opponent click handlers
   $("#HanOpponent").on("click", function () {
        if (!opponentPicked) {
            $("#HanDefender").removeClass("hidden");
            $("#HanOpponent").addClass("hidden");
            opponentPicked = true;
        };

   });

   $("#RickOpponent").on("click", function () {
        if (!opponentPicked) {
            $("#RickDefender").removeClass("hidden");
            $("#RickOpponent").addClass("hidden");
            opponentPicked = true;
        };

    });

    $("#MalcolmOpponent").on("click", function () {
        if (!opponentPicked) {
            $("#MalcolmDefender").removeClass("hidden");
            $("#MalcolmOpponent").addClass("hidden");
            opponentPicked = true;
        };

   });

   $("#DoctorOpponent").on("click", function () {
        if (!opponentPicked) {
            $("#DoctorDefender").removeClass("hidden");
            $("#DoctorOpponent").addClass("hidden");
            opponentPicked = true;
        };

    });







});

