// Thanks to this tutorial for the tips on delaying iterations in a loop:
// https://scottiestech.info/2014/07/01/javascript-fun-looping-with-a-delay/

var app = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.lineWidth = 3;

    var circles = function(event) {

        var x = 200;
        var y = 200;
        var blackRadius = 200;
        var whiteRadius = 0;
        var startAngle = 0;
        var endAngle = Math.PI*2;

        (function blackCircles(i) {
            setTimeout(function() {
                ctx.strokeStyle = 'black';
                ctx.beginPath();
                ctx.arc(x, y, blackRadius, startAngle, endAngle);
                // console.log("i:", i);
                blackRadius -= 10;
                ctx.moveTo(300-((i+1)*(10)), y);
                console.log("blackRadius:", blackRadius);
                if (--i) {
                    blackCircles(i);
                }
            }, 40);
            ctx.closePath();
            ctx.stroke();
        })(21);
        (function whiteCircles(i) {
            setTimeout(function() {
                ctx.strokeStyle = 'white';
                ctx.beginPath();
                ctx.arc(x, y, whiteRadius, startAngle, endAngle);
                // console.log("i:", i);
                whiteRadius += 10;
                ctx.moveTo(200+((i+1)*(10)), y);
                console.log("whiteRadius:", whiteRadius);
                if (--i) {
                    whiteCircles(i);
                }
            }, 40);
            ctx.closePath();
            ctx.stroke();
        })(21);



    }

    var draw = function() {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        circles.draw();
    }

    canvas.onclick = circles;

}

window.onload = app;










