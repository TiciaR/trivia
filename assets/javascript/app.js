var valFilter;
var filtered;
var correct = 0;
var wrong = 0;
var timer;
var counter = 60;
var timeLeft = 60;
var message = [];
var pictures = [];

correctText = $("#correct");
wrongText = $("#wrong");
unansweredText = $("#not-answered");

$("#finished").css("visibility", "hidden");
$("#quiz").css("visibility", "hidden");

function displayFinished() {
    $("#finished").css({
        "visibility": "visible", "position": "absolute", "top": "25%", "left": "30%",
        "text-align": "center"
    });
    $("#radio").css("visibility", "hidden");
    $("#timer").css("visibility", "hidden");

}

function displayMessage() {
    message = ["Yay!!", "Good Job!", "Could you BE anymore wrong!?"]
    pictures = ["assets/images/monicarach.jpg", "assets/images/imfine.jpg", "assets/images/rossmad.jpg"]

    if (correct === 5) {
        $("#message").text(message[0]);
        $("#image").attr("src", pictures[0]);
    }
    if (correct > 0 && correct < 5) {
        $("#message").text(message[1]);
        $("#image").attr("src", pictures[1]);
    }
    if (correct === 0) {
        $("#message").text(message[2]);
        $("#image").attr("src", pictures[2]);
    }

};




function startTime() {

    var timer = $("#timer");
    timer.text("1:00");

    function timeIt() {
        counter--;
        timer.text(counter);
       
        if (counter === 0) {
            console.log("out of time")
            clearInterval();
            displayFinished();
        }
    }
    setInterval(timeIt, 1000)
}

$("#start-button").on("click", function () {
    $("#start-button").css("visibility", "hidden");
    $("#start-screen").css("visibility", "hidden");
    $("#finished").css("visibility", "hidden");
    $("#title").css("visibility", "hidden");
    $("#quiz").css({
        "visibility": "visible", "position": "absolute",
        "top": "10%"
    });


    startTime();
});



$("#button").on("click", function () {
    console.log("submit");
    $(document).ready(function () {
        for (i = 1; i < 6; i++) {

            var radio = $("input[name='question" + i + "']");
            var filtered = radio.filter(":checked");
            console.log(filtered.val());
            var valFilter = filtered.val();

            if (valFilter === "answer") {
                correct++;
                console.log(correct)
            }
            if (valFilter === "wrong") {
                console.log(wrong);
                wrong++;
            }

        };

        displayFinished();
        $("#title").css("visibility", "visible");
        displayMessage();

        correctText.text(correct);
        wrongText.text(wrong);
    });

});
