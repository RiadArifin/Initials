

//function to print out text
function intro() {
    
    var canvas = document.getElementById("canvasElement");//get the element
    var canvasContext = canvas.getContext("2d");//get the content
   
    canvasContext.font = "30px Arial";
     var w = $('#canvasElement').width();
    var h = $('#canvasElement').height();
    canvasContext.fillText("Please click on the buttons!", 625, 250);

}

//function to draw R
function draw1() {

    var canvas = document.getElementById("canvasElement");//get the element
    var canvasContext = canvas.getContext("2d");//get the content
    
    var w = $('#canvasElement').width();
    var h = $('#canvasElement').height();
    canvasContext.clearRect(0, 0, w, h);
    drawline(canvasContext, 700, 6, 700, 475);
    drawline(canvasContext, 700, 225, 825, 465);
    drawCircle(canvasContext,700,137.5, 112.5);
}

//function to draw A  
function draw2() {

    var canvas = document.getElementById("canvasElement");//get the element
    var canvasContext = canvas.getContext("2d");//get the content
    
    var w = $('#canvasElement').width();
    var h = $('#canvasElement').height();
    canvasContext.clearRect(0, 0, w, h);
    drawline(canvasContext, 750, 25, 500, 475);
    drawline(canvasContext, 750, 25, 1000, 475);
    drawline(canvasContext, 625, 250, 875, 250);

}

function drawline(canvasContext, lineStartX, lineStartY, lineEndX, lineEndY) {
    
    canvasContext.beginPath();
    canvasContext.moveTo(lineStartX, lineStartY);
    
 
    canvasContext.lineWidth = 40;
    
    canvasContext.lineTo(lineEndX, lineEndY);
    canvasContext.strokeStyle="#00ff00";

    canvasContext.stroke();
   

}

//function to draw circle
function drawCircle(canvasContext, centerX, centerY, radius)
{
    
    var startAngleInRadians = (3 * Math.PI) / 2;
    var endAngleInRadians = Math.PI / 2;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius,
            startAngleInRadians, endAngleInRadians);
    canvasContext.lineWidth = 40;
   
    canvasContext.strokeStyle="#00ff00";
    canvasContext.stroke();
}
  