function init() {
    //alert("Alert box!")
}

function check(rownumber){
    //alert("checking response for row " + rownumber);
    const select = document.getElementById("select" + rownumber);
    const value = select.options[select.selectedIndex].value;
    const btn = document.getElementById("checkbtn" + rownumber)
    const correct = document.getElementById("correct" + rownumber)
    if(value === "correct") {
        btn.style.display = "none";
        correct.style.display = "block";
        for (let index = 0; index < select.options.length; index++) {
            if(select.options[index].value != "correct")
                document.removeChild(select.options[index]);
        }
        //alert("you got it right!");
    }
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
}

function changedSelect(rownumber){
    const select = document.getElementById("select" + rownumber.toString());
    const value = select.options[select.selectedIndex].value;
    if(value != "correct")
        resetRow(rownumber);
}