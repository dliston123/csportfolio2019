var chris = document.getElementById("chris");
var jess = document.getElementById("jess");
var display = document.getElementById("display");

chris.addEventListener("click", function() {
    display.innerHTML = "Chris Froome is a professional road bike rider on team Sky. He has won 4 Tour de Frances (2013-2017). He started out as a champion mountain biker then got into road biking";
});

jess.addEventListener("click", function() {
    display.innerHTML ="";
});