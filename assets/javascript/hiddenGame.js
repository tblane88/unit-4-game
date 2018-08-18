$(document).ready(function() {
    // global variables
    var opponentPicked = false;
    var heroPicked = false;
    var hero = "";
    var defender = "";
    var heroScore = 0;
    var defenderScore = 0;
    var heroAttack = 0;
    var defenderAttack = 0;
    var defenderID = "";






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

            // set hero name
            hero = "Han Solo";
            heroScore = 120;
            heroAttack = 8;
            
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

            // set hero name
            hero = "Rick Sanchez";
            heroScore = 100;
            heroAttack = 10;

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

            // set hero name
            hero = "Captain Mal Reynolds";
            heroScore = 150;
            heroAttack = 6;

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

            // set hero name
            hero = "The Doctor";
            heroScore = 180;
            heroAttack = 7;

            heroPicked = true;

       };

   });


//    opponent click handlers
   $("#HanOpponent").on("click", function () {
        if (!opponentPicked) {
            $("#HanDefender").removeClass("hidden");
            $("#HanOpponent").addClass("hidden");

            // set Defender
            defender = "Han Solo";
            defenderScore = 120;
            defenderID = "#HanDefender";
            defenderAttack = 8;

            opponentPicked = true;
        };
   });

   $("#RickOpponent").on("click", function () {
        if (!opponentPicked) {
            $("#RickDefender").removeClass("hidden");
            $("#RickOpponent").addClass("hidden");

            // set Defender
            defender = "Rick Sanchez";
            defenderScore = 100;
            defenderID = "#RickDefender";
            defenderAttack = 5;

            opponentPicked = true;
        };

    });

    $("#MalcolmOpponent").on("click", function () {
        if (!opponentPicked) {
            $("#MalcolmDefender").removeClass("hidden");
            $("#MalcolmOpponent").addClass("hidden");

            // set Defender
            defender = "Captain Mal Reynolds";
            defenderScore = 150;
            defenderID = "#MalcolmDefender";
            defenderAttack = 15;

            opponentPicked = true;
        };

   });

   $("#DoctorOpponent").on("click", function () {
        if (!opponentPicked) {
            $("#DoctorDefender").removeClass("hidden");
            $("#DoctorOpponent").addClass("hidden");

            // set Defender
            defender = "The Doctor";
            defenderScore = 180;
            defenderID = "#DoctorDefender";
            defenderAttack = 20;

            opponentPicked = true;
        };
        

    });



    $("#attack").on("click", function() {
        if ((heroPicked) && (opponentPicked)) {
            $(defenderID).addClass("hidden");

        };


    });



});

