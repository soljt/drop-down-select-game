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
        //alert("you got it right!");
    }
}