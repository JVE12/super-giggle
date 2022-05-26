canvas = document.getElementById("canvas");
ctx= canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mouseDown);
ctx.beginPath();
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

function  my_mouseDown(e) {
    color = document.getElementById("color").value;
    radius = document.getElementById("radius").value;
    width = document.getElementById("width").value;
    console.log(color);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X=" + mouse_x + "Y=" + mouse_y);
    circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(mouse_x, mouse_y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}