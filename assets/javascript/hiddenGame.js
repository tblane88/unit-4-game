$(document).ready(function() {
   $("#HanHero").on("click", function () {
    //    hide the other heros
        $("#RickHero").addClass("hidden");
        $("#MalcolmHero").addClass("hidden");
        $("#DoctorHero").addClass("hidden");

        // unhide the opponents
        $("#RickOpponent").removeClass("hidden");
        $("#MalcolmOpponent").removeClass("hidden");
        $("#DoctorOpponent").removeClass("hidden");

   });

   $("#RickHero").on("click", function () {
    //    hide the other heros
        $("#HanHero").addClass("hidden");
        $("#MalcolmHero").addClass("hidden");
        $("#DoctorHero").addClass("hidden");

        // unhide the opponents
        $("#HanOpponent").removeClass("hidden");
        $("#MalcolmOpponent").removeClass("hidden");
        $("#DoctorOpponent").removeClass("hidden");

   });

   $("#MalcolmHero").on("click", function () {
    //    hide the other heros
        $("#RickHero").addClass("hidden");
        $("#HanHero").addClass("hidden");
        $("#DoctorHero").addClass("hidden");

        // unhide the opponents
        $("#RickOpponent").removeClass("hidden");
        $("#HanOpponent").removeClass("hidden");
        $("#DoctorOpponent").removeClass("hidden");

   });

   $("#DoctorHero").on("click", function () {
    //    hide the other heros
        $("#RickHero").addClass("hidden");
        $("#MalcolmHero").addClass("hidden");
        $("#HanHero").addClass("hidden");

        // unhide the opponents
        $("#RickOpponent").removeClass("hidden");
        $("#MalcolmOpponent").removeClass("hidden");
        $("#HanOpponent").removeClass("hidden");

   });










});

