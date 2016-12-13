// Thanks to this tutorial for the tips on delaying iterations in a loop:
// https://scottiestech.info/2014/07/01/javascript-fun-looping-with-a-delay/

var app = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var circles = function(event) {

        var x = 200;
        var y = 200;
        var blackRadius = 200;
        var whiteRadius = 0;
        var startAngle = 0;
        var endAngle = Math.PI*2;

        (function drawCircles(i) {
            setTimeout(function() {
                ctx.beginPath();
                if (i > 22) {
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = 'black';
                    ctx.arc(x, y, blackRadius, startAngle, endAngle);
                    blackRadius -= 10;
                }
                else {
                    ctx.lineWidth = 4;
                    ctx.strokeStyle = 'white';
                    ctx.arc(x, y, whiteRadius, startAngle, endAngle);
                    whiteRadius += 10;
                }
                if (--i) {
                    drawCircles(i);
                }
            }, 40);
            ctx.closePath();
            ctx.stroke();
        })(43);


    }

    var draw = function() {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        circles.draw();
    }

    canvas.onclick = circles;

}

window.onload = app;










