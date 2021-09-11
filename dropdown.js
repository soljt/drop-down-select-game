function init() {
    //alert("Alert box!")
}

function check(rownumber){
    //alert("checking response for row " + rownumber);
    const select = document.getElementById("select" + rownumber);
    const value = select.options[select.selectedIndex].value;
    const btn = document.getElementById("checkbtn" + rownumber);
    const correct = document.getElementById("correct" + rownumber);
    const wrong = document.getElementById("wrong" + rownumber);
    btn.style.display = "none";
    if(value === "correct") {
        correct.style.display = "block";
    } else {
        wrong.style.display = "block";
    }
        //alert("you got it right!");
    
}

function reset(){
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