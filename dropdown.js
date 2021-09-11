clickSound = new Audio('sounds/sounds_click.mp3');
correctSound = new Audio('sounds/sounds_correct.mp3');
wrongSound = new Audio('sounds/sounds_wrong.mp3');
alertSound = new Audio('sounds/sounds_alert.mp3');

function init() {
    //alert("Alert box!")
}

function check(rownumber){
    //alert("checking response for row " + rownumber);
    clickSound.play()
    const select = document.getElementById("select" + rownumber);
    const value = select.options[select.selectedIndex].value;
    const btn = document.getElementById("checkbtn" + rownumber);
    const correct = document.getElementById("correct" + rownumber);
    const wrong = document.getElementById("wrong" + rownumber);
    btn.style.display = "none";
    if(value === "correct") {
        correct.style.display = "block";
        correctSound.play();
    } else {
        wrong.style.display = "block";
        wrongSound.play();
    }
        //alert("you got it right!");
    
}

function reset(){
    clickSound.play()
    for (let index = 1; index < 5; index++) {
        resetRow(index);
        document.getElementById("select" + index.toString()).selectedIndex = 0;
    }
}

function resetRow(rownumber){
    document.getElementById("checkbtn" + rownumber.toString()).style.display = "table-cell";
    document.getElementById("correct" + rownumber.toString()).style.display = "none";
    document.getElementById("wrong" + rownumber.toString()).style.display = "none";
}