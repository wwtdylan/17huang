var wrapHeight;



document.body.onload = start ;

function start(){
	init();
}



function init(){
	height();

	drag();
	imgConsole();
	setInterval(imgChange,1500);
}