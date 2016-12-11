
var app = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var circles = function(event) {
        console.log("circles");
        ctx.beginPath();

        var radius = 100;
        var startAngle = 0;
        var endAngle = Math.PI*2;

        for (var i = 0; i < 6; i++) {
            ctx.arc(200,200, radius, startAngle, endAngle);
            ctx.moveTo(300-((i+1)*(20)), 200);
            radius -= 20;
        }
        ctx.closePath();
        ctx.stroke();
    }

    var draw = function() {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        circles.draw();
    }


    canvas.onclick = circles;

}

window.onload = app;










