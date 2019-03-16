var wins = 0;
var losses = 0;
var counter = 0;

// random number chosen that we need to add to with our gems
// for loop to create crystal numberOptions
// random needed score generator//

var randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
$("#random-number").text(randomNumber);
console.log("Target Number: " + randomNumber);


//*********//
//random value of crystals//
var numberOptions = [];

for(i = 0; i < 4; i++){
    randomCrystalNumber = Math.floor(Math.random() * ((12 - 1) +1) +1);
    numberOptions.push(randomCrystalNumber);
}
//

function newRandom(){
    randomNumber = Math.floor(Math.random() * ((120-19) + 1) + 19);
    $("#random-number").text(randomNumber);
    console.log("Target Number 2: " + randomNumber);

    for (i = 0; i < 4; i++){
        randomCrystalNumber = Math.floor(Math.random() * ((12-1) + 1) + 1);
        numberOptions.push(randomCrystalNumber);
        console.log(numberOptions);
    }
};

//images renamed to create array
var blueImage = "assets/images/blueCrystal.jpg";
var greenImage = "assets/images/greenCrystal.jpg";
var redImage = "assets/images/redCrystal.jpg";
var yellowImage = "assets/images/yellowCrystal.jpg";

//crystals array
var colorImages = [blueImage, greenImage, redImage, yellowImage];

//add class for CSS to work later, src array to class, random value attached to random crystal and a for loop

for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", colorImages[i]);
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $(".crystals").append(imageCrystal);
};

function newRandomCrystal() {
    newRandom();
     for (var i = 0; i< numberOptions.length; i++) {
         var imageCrystal = $("<img>");
         imageCrystal.addClass("crystal-image");
         imageCrystal.attr("data-crystalvalue", numberOptions[i]);
         $(".crystals").append(imageCrystal);
     }};
console.log(numberOptions);

     //on click even for all crystals with if else statements. 
$(".crystal-image").on("click", function() {
    console.log("clicked")
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#player-number").text(counter);

    //if and else/if when score is reached
if (counter === randomNumber) {
    alert("YOU WIN GREAT JOB!");
    wins++;
    $("#wins").text(wins);
    counter = 0;
    $("#player-number").text("");
    numberOptions = [];
    $(".crystal-image").empty();
    newRandomCrystal();
}

else if (counter >= randomNumber) {
    alert("YOU LOSE! I THOUGHT YOU WERE BETTER THAN THAT!");
    losses++;
    $("#losses").text(losses);
    counter = 0;
    $("#player-number").text("");
    numberOptions=[];
    $(".crystal-image").empty();
    newRandomCrystal();
}

    });
