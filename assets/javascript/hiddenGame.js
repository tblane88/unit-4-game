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
    var defenderAmt = 0;
    var addScore = 0;

    function reset() {
        $("#HanHero").removeClass("hidden");
        $("#RickHero").removeClass("hidden");
        $("#MalcolmHero").removeClass("hidden");
        $("#DoctorHero").removeClass("hidden");

        $("#HanOpponent").addClass("hidden");
        $("#RickOpponent").addClass("hidden");
        $("#MalcolmOpponent").addClass("hidden");
        $("#DoctorOpponent").addClass("hidden");

        $(defenderID).addClass("hidden");

        $("#HanScore").text("120");
        $("#RickScore").text("100");
        $("#MalcolmScore").text("150");
        $("#DoctorScore").text("180");

        $("#fightText").empty();

        defenderAmt = 0;

        heroPicked = false;
        opponentPicked = false;



    }




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
            addScore = heroAttack;
            
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
            addScore = heroAttack;


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
            addScore = heroAttack;


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
            addScore = heroAttack;


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
            $("#fightText").empty();
            defenderAmt++;
            $(".defenderScore").text(defenderScore);


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
            $("#fightText").empty();
            defenderAmt++;
            $(".defenderScore").text(defenderScore);



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
            defenderAttack = 12;

            opponentPicked = true;
            $("#fightText").empty();
            defenderAmt++;
            $(".defenderScore").text(defenderScore);



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
            defenderAttack = 15;

            opponentPicked = true;
            $("#fightText").empty();
            defenderAmt++;
            $(".defenderScore").text(defenderScore);

        };
        

    });


        // Attack Button click function
    $("#attack").on("click", function() {

        // check to see a hero has been picked
        if (heroPicked) {
            // check to see if an opponent has been picked
            if(opponentPicked) {

                if ((heroScore > 0) && (defenderScore > 0)) {
                        $("#fightText").html("<h4>You attacked " + defender + " for " + heroAttack + " damage.</h4>  <h4>" + defender + " attacked you back for " + defenderAttack + " damage.</h4>");
                        defenderScore = defenderScore - heroAttack;
                        heroScore = heroScore - defenderAttack;
                        $(".heroScore").text(heroScore);
                        $(".defenderScore").text(defenderScore);
                        heroAttack = heroAttack + addScore;

                        if (heroScore <= 0){

                            $("#fightText").html("<h4>GAME OVER! Sorry You lose!</h4> <button id='reset'>Reset Game</button>");
        
                        } else if (defenderScore <= 0) {
        
                            if (defenderAmt < 3) {
        
                                $(defenderID).addClass("hidden");
                                $("#fightText").html("<h4>You have defeated " + defender + "! Choose another opponent</h4>");
                                opponentPicked = false;
        
                            } else {
        
                                $("#fightText").html("<h4>You have Defeated everyone!!</h4> <button id='reset'>Reset Game</button>");
                                
        
                            }
                        }

                } else if (heroScore <= 0){

                    $("#fightText").html("<h4>GAME OVER! Sorry You lose!</h4> <button id='reset'>Reset Game</button>");

                } else if (defenderScore <= 0) {

                    if (defenderAmt < 3) {

                        $(defenderID).addClass("hidden");
                        $("#fightText").html("<h4>You have defeated " + defender + "! Choose another opponent</h4>");
                        opponentPicked = false;

                    } else {

                        $("#fightText").html("<h4>You have Defeated everyone!!</h4> <button id='reset'>Reset Game</button>");
                        

                    }
                }


            } else {
                $("#fightText").html("<h4>You need to choose an opponent!</h4>");
            }
            
        } else {

            $("#fightText").html("<h4>You need to choose a Hero!</h4>");
        }

         // Reset Function
        $("#reset").on("click", function(){
            reset();

        });

    });

   

});

