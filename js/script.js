//Game Developmen with using Canvas

let canvas = document.querySelector('#myCanvas');
let ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 600;


//Create a rect 
// ctx.fillStyle = "black";
// ctx.fillRect(0,0,400,600);

//Create a Paddle
let paddleWidth = 50;
let paddleHeight = 15;

ctx.fillStyle = "white";
ctx.fillRect(175,5,paddleWidth,paddleHeight);

ctx.fillStyle = "white";
ctx.fillRect(175,580,paddleWidth,paddleHeight);

//Crete a dashed line in center
ctx.beginPath();
ctx.setLineDash([3]);
ctx.moveTo(0,299);
ctx.lineTo(400,299);
ctx.lineWidth = '2';
ctx.strokeStyle = 'white';
ctx.stroke();

//Create a ball on line
ctx.beginPath();
ctx.arc(200,300,14,2*Math.PI,false);
ctx.fillStyle = 'white';
ctx.fill();


//Players score
ctx.font = "32px 'Courier New', Courier, monospace";
ctx.fillText(10, 20, 280 );
ctx.fillText(15, 20, 340 );

























/*
ctx.moveTo(0,0);
ctx.lineTo(800,600);
ctx.lineWidth = "5";
ctx.strokeStyle = "yellow";
ctx.stroke();
*/

//Create a rectangel
//ctx.fillRect(10,20,200,150);

/*
ctx.beginPath();
ctx.moveTo(100,20);
ctx.lineTo(200,160);
ctx.quadraticCurveTo(230,200,250,120);
ctx.lineWidth = "5";
ctx.strokeStyle="yellow";
ctx.stroke();
*/

/*
var imgobj = new Image();
var x = 0;
var y = 0;
var width = 800;
var height = 650;
imgobj.onload = function(){
    ctx.drawImage(imgobj,x,y,width,height);
}
imgobj.src = './img/M16SHO.jpeg';
*/