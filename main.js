console.log("abc");


var cx = 750, cy = 660, cdx = 20, cdy = 10, rlx = 650, rdx = 20, flag = 0, settime = 100;
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
function draw() {
    context.fillStyle = "white";
    context.fillRect(rlx, 0, 200, 20);
    context.fillRect(rlx, 680, 200, 20);
    context.beginPath();
    context.arc(cx, cy, 20, 0, Math.PI * 2, true);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
}
draw();
alert("Press Enter to start the Game!!");

var start = new Date().getTime();

function Start() {

    function move() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        draw();
        cx += cdx;
        cy += cdy;

        if (((new Date().getTime() - start) / 1000) % 50 == 0)
            settime -= 5;

        if (cy == 30 || cy == 670) {
            if (rlx <= cx && rlx + 200 >= cx)
                cdy *= (-1);
            else {
                cy += (cdy);
                context.clearRect(0, 0, canvas.width, canvas.height);
                draw();
                c = 0;
                setTimeout(() => {
                    var end = new Date().getTime();
                    var score = end - start;
                    score /= 1000;

                    if (score >= localStorage.getItem("highest")) {
                        localStorage.removeItem("highest");
                        localStorage.setItem("highest", score);
                        alert("Congratulations!! You have scored highest score of " + score + "sec.")
                    }
                    else
                        alert("Your Score is " + score + "sec.");

                    alert("Press Enter to restart the Game!!");

                }, 100);
                clearInterval(intervalId);
            }
        }

        if (cx == 10 || cx == 1490) {
            cdx *= (-1);
        }
    }

    document.addEventListener('keypress', logKey);

    function logKey(e) {
        console.log(e.code);
        if (e.code === "KeyA")
            rlx -= rdx;
        if (e.code === "KeyD")
            rlx += rdx;

        if (rlx > 1300)
            rlx = 1300;

        if (rlx < 0)
            rlx = 0;
    }

    var intervalId = setInterval(move, settime);

}

var c = 0;
document.addEventListener("keyup", function (e) {
    console.log(e.code);
    if (e.code === "Enter" && c === 0) {
        c++;
        cx = 750, cy = 660, cdx = 20, cdy = 10, rlx = 650, rdx = 20, flag = 0;
        var player = prompt("Your name");
        alert("Press 'A' to move left and 'D' to move right.");
        Start();
    }

});