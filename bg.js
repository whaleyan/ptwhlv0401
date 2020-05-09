$(function() {
	//based on an Example by @curran
	window.requestAnimFrame = (function() {
		return window.requestAnimationFrame
	})();
	var canvas = document.getElementById("space");
	var c = canvas.getContext("2d");

	var numStars = 1900;
	var radius = '0.' + Math.floor(Math.random() * 9) + 1;
	var focalLength = canvas.width * 2;
	var warp = 0;
	var centerX, centerY;

	var stars = [],
		star;
	var i;

	var animate = true;

	initializeStars();

//luqg add it
var img=document.getElementById("img1");
var img2=document.getElementById("img2");
var img3=document.getElementById("img3");
var ctx=canvas.getContext("2d");
var tx=606;
var ty=204;
var select=5;
var textcolor="#FFF";//正式工程应为#FFF
//ctx.lineWidth=3;
function gdrawText(str,x,y){
      ctx.font="15px bold 黑体";//设置字体
      ctx.fillStyle=textcolor;
      ctx.textAlign="start";
      ctx.textBaseline="middle";
      ctx.fillText(str,x,y);
}
function gdrawTextLarge(str,x,y){
      ctx.font="22px bold 黑体";//设置字体
      ctx.fillStyle=textcolor;
      ctx.textAlign="start";
      ctx.textBaseline="middle";
      ctx.fillText(str,x,y);
}
var arr=new Array(166,21,"白青乡",64,23,"西澳",44,130,"平原镇",200,143,"东岚",72,256,"小怀镇",318,233,"东海仙境景区",82,373,"北李镇",264,399,"海坛古城")
function drawall()
{
ctx.drawImage(img1,tx,ty);
for(var i=0;i<arr.length/3;i++){
var posx=arr[i*3];
var posy=arr[i*3+1];
var name=arr[i*3+2];
if(i===select){
ctx.drawImage(img3,tx+posx,ty+posy-45/2);
}
gdrawText(name,tx+posx+35,ty+posy);
}
ctx.drawImage(img2,tx+180,ty+365-45/2);
gdrawTextLarge("平谭县",tx+180+35,ty+365);
}
drawall();
img.onload=function(){
drawall();}
img2.onload=function(){
drawall();}
img3.onload==function(){
drawall();}


	function executeFrame() {

		if(animate)
			requestAnimFrame(executeFrame);
		moveStars();
		drawStars();
		drawall();
	}

	function initializeStars() {
		centerX = canvas.width / 2;
		centerY = canvas.height / 2;

		stars = [];
		for(i = 0; i < numStars; i++) {
			star = {
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				z: Math.random() * canvas.width,
				o: '0.' + Math.floor(Math.random() * 99) + 1
			};
			stars.push(star);
		}
	}

	function moveStars() {
		for(i = 0; i < numStars; i++) {
			star = stars[i];
			star.z--;

			if(star.z <= 0) {
				star.z = canvas.width;
			}
		}
	}

	function drawStars() {
		var pixelX, pixelY, pixelRadius;

		// Resize to the screen
		if(canvas.width != window.innerWidth || canvas.width != window.innerWidth) {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight-4;
			initializeStars();
		}
		if(warp == 0) {
			c.fillStyle = "#090723";
			c.fillRect(0, 0, canvas.width, canvas.height);
		}
		c.fillStyle = "rgba(209, 255, 255, " + radius + ")";
		for(i = 0; i < numStars; i++) {
			star = stars[i];

			pixelX = (star.x - centerX) * (focalLength / star.z);
			pixelX += centerX;
			pixelY = (star.y - centerY) * (focalLength / star.z);
			pixelY += centerY;
			pixelRadius = 1 * (focalLength / star.z);

			c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
			c.fillStyle = "rgba(209, 255, 255, " + star.o + ")";
			//c.fill();
		}
	}

	executeFrame();

})
