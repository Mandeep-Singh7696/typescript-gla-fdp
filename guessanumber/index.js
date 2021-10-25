addEventListener("load", function () {
    var startDiv = document.getElementById("start-game");
    var gameDiv = document.getElementById("game");
    var resultDiv = document.getElementById("result");
    var startbtn = document.getElementById("start");
    var checkbtn = document.getElementById("check");
    var guesstext = document.getElementById("guess");
    var randNum;
    gameDiv.style.display = "none";
    startbtn.addEventListener("click", function () {
        randNum = getRandomNumber(1, 100);
        gameDiv.style.display = "block";
        startDiv.style.display = "none";
        resultDiv.innerHTML = "";
        guesstext.disabled = false;
    });
    checkbtn.onclick = function () {
        //const guess :number= parseInt(guesstext.value);
        var guess = +guesstext.value;
        if (guess > randNum) {
            resultDiv.innerHTML += "Guess is higher<br/>";
        }
        else if (guess < randNum) {
            resultDiv.innerHTML += "Guess is less<br/>";
        }
        else {
            resultDiv.innerHTML += "Guess is Correct</br>";
            guesstext.disabled = true;
            // checkbtn.disabled= true;
            startDiv.style.display = "block";
        }
        guesstext.value = '';
    };
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
});
