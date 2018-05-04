$(document).ready(function () {

    // Global Variable
    var intervalId;
    var countdownRunning = false;
    var countdownTime = 30;
    var correctCount = 0;

    // Global Functions
    var countdown = function() {
        countdownTime--;
        $("#timer").text(countdownTime);
    };

    var gameFinish = function() {
        clearInterval(intervalId);
        var answer1 = $("#sixteenSeed").val();
        var answer2 = $("#lowestSeed").val();
        var answer3 = $("#oneSeeds").val();
        var answer4 = $("#firstTournament").val();
        var answer5 = $("#goDores").val();

        if (answer1 === 'UMBC') {
            correctCount++
        };
        if (answer2 === '8') {
            correctCount++
        };
        if (answer3 === '2008') {
            correctCount++
        };
        if (answer4 === '1939') {
            correctCount++
        };
        if (answer5 === 'Vandy') {
            correctCount++
        };

        $(this).attr("hidden", true);
        $("#hiddenTimer").attr("hidden", true);

        if (correctCount < 2) {
            $("#triviaQuestions").text("Wow! You have a lot of faith in Vandy! Congrats on getting your " + correctCount + " questions correct.");
        }

        else {
            $("#triviaQuestions").text("You must love March Madness or have mad Google skills. You got " + correctCount + " questions correct.");
        }

        $("#triviaQuestions").toggleClass("text-secondary text-white");
    };

    $("#start").on("click", function() {
        event.preventDefault();
        var timeoutLimit = countdownTime * 1000;
        $("#hiddenTimer").removeAttr("hidden");
        $("#triviaQuestions").removeAttr("hidden");
        $(this).attr("hidden", true);
        $("#timer").text(countdownTime);
        intervalId = setInterval(countdown, 1000);
        setTimeout(function() { gameFinish(); }, timeoutLimit)
    });

    $("#submit").on("click", function() {
        event.preventDefault();
        gameFinish();        
    })

})