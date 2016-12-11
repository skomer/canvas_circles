
var app = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var circles = function(event) {
        console.log("circles");

        var x = 200;
        var y = 200;
        var radius = 200;
        var startAngle = 0;
        var endAngle = Math.PI*2;

        (function timedCircles(i) {
            setTimeout(function() {
                ctx.beginPath();
                ctx.arc(x, y, radius, startAngle, endAngle);
                console.log("i:", i);
                radius -= 10;
                ctx.moveTo(300-((i+1)*(10)), x);
                console.log("radius:", radius);
                if (--i) {
                    timedCircles(i);
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










