//add sounds
clickSound = new Audio('sounds/sounds_click.mp3');
correctSound = new Audio('sounds/sounds_correct.mp3');
wrongSound = new Audio('sounds/sounds_wrong.mp3');
alertSound = new Audio('sounds/sounds_alert.mp3');

function init() {
    //nothing to initialize
}

//function to check if the selected answer is correct and give feedback (called on click of "Check" button)
function check(rownumber){
    clickSound.play()
    const select = document.getElementById("select" + rownumber); //grabs the select element for the row
    const value = select.options[select.selectedIndex].value; //grabs the value of the currently selected field (correct or null)
    const btn = document.getElementById("checkbtn" + rownumber); //grabs the button for the row
    const correct = document.getElementById("correct" + rownumber); //grabs the div for correct feedback for the row
    const wrong = document.getElementById("wrong" + rownumber); //grabs the div for incorrect feedback for the row
    btn.style.display = "none"; //gets rid of the button to leave room to display feedback
    if(value === "correct") {
        correct.style.display = "block"; //give correct feedback
        correctSound.play();
    } else {
        wrong.style.display = "block"; //give incorrect feedback
        wrongSound.play();
    }
}

//function to reset to original state (called on click of "Reset" button)
function reset(){
    clickSound.play()
    for (let index = 1; index < 5; index++) { //iterate over the 4 rows
        resetRow(index); //will get rid of feedback and display check button, but will not change selected option
        document.getElementById("select" + index.toString()).selectedIndex = 0; //changes selected option to be "Select reason..." (first option)
    }
}

//function to get rid of feedback and display check button (per row)
function resetRow(rownumber){
    document.getElementById("checkbtn" + rownumber.toString()).style.display = "table-cell"; //display check button as td
    //hide correct and incorrect feedback
    document.getElementById("correct" + rownumber.toString()).style.display = "none"; 
    document.getElementById("wrong" + rownumber.toString()).style.display = "none";
}