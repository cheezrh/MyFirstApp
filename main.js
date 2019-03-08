$(document).ready(function(){
console.log("You are reading this from the console ");
//document.getElementsByName("h1").style.color = "red";

for(var i = 0; i<1000000000; i++);

$("h1").css("color", "red");
$("h1").innerHtml = "Changed from main.js";

paper.install(window);
//paper.setup(document.getElementById("mainCanvas"));
paper.setup($("#mainCanvas")[0]);

var tool = new Tool(); 

tool.onMouseDown = function (event) {
    var c = Shape.Circle(event.point.x, event.point.y, 20);
    c.fillColor = "green";

}


/*

var c = Shape.Circle(200,200, 50);

c.fillColor = 'green';
*/


paper.view.draw();

});
