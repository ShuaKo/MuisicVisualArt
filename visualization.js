
//-----------------------------------------Objects------------------------------------------------------
function Point(x, y) {
    this.x = x;
    this.y = y;
    
}
function drawLine(a, b){
    context.beginPath();
    context.moveTo(a.x, a.y);
    context.lineTo(b.x,b.y);
    context.stroke();
}
function drawLineP(a,b){
    context.beginPath();
    context.moveTo(canvas.width-a.x, a.y);
    context.lineTo(canvas.width-b.x,b.y);
    context.stroke();
}
function drawCircle(a,rad){
    context.beginPath();
    context.arc(a.x,a.y,rad,0,2*Math.PI);
    context.stroke();
}
function displayImage(lnk,a,b){
    console.log("drawing image on", a, b);
    this.img = new Image();
    this.img.src = lnk;
    console.log(img);
    context.drawImage(img, a, b, 603, 800);
}
document.getElementById('canvas').addEventListener('click',function(evt){
   console.log("ScalpArr.push(new Point(" + (evt.clientX-444) + ', ' + (evt.clientY-10) + "));");
    },false);
//-----------------------------------------runTime------------------------------------------------------
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
//Background
context.fillStyle = "#ffffff";
context.fillRect(0, 0, canvas.width, canvas.height);//clear screen
// Rule of Thirds
// context.strokeStyle = "#ff0000";
// var ROT1 = new Point(canvas.width/3,0);
// var ROT2 = new Point(canvas.width/3,canvas.height);
// drawLine(ROT1, ROT2);
// var ROT3 = new Point(canvas.width*2/3,0);
// var ROT4 = new Point(canvas.width*2/3,canvas.height);
// drawLine(ROT3, ROT4);
// var ROT5 = new Point(0,canvas.height/3);
// var ROT6 = new Point(canvas.width,canvas.height/3);
// drawLine(ROT5, ROT6);
// var ROT7 = new Point(0,canvas.height*2/3);
// var ROT8 = new Point(canvas.width,canvas.height*2/3);
// drawLine(ROT7, ROT8);
// // //Marquardt's Phi Mask
// var img = document.getElementById("Mask");
//Redraw
context.strokeStyle = "#00ff00";
drawCircle(new Point(318,318), 8);
drawCircle(new Point(318,318), 21);
drawCircle(new Point(canvas.width-318,318), 8);
drawCircle(new Point(canvas.width-318,318), 21);
//face
var goldenRatioPointsArr = new Array();
goldenRatioPointsArr.push(new Point((canvas.width/2),500));
goldenRatioPointsArr.push(new Point((413),489));
goldenRatioPointsArr.push(new Point((canvas.width/2),517));
goldenRatioPointsArr.push(new Point((canvas.width/2),526));
goldenRatioPointsArr.push(new Point(408, 497));
goldenRatioPointsArr.push(new Point(412, 512));
goldenRatioPointsArr.push(new Point(390, 505));
goldenRatioPointsArr.push(new Point(390, 483));
goldenRatioPointsArr.push(new Point(412, 417));
goldenRatioPointsArr.push(new Point((413),489));
goldenRatioPointsArr.push(new Point(428, 445));
goldenRatioPointsArr.push(new Point(424, 330));
goldenRatioPointsArr.push(new Point(389, 281));
goldenRatioPointsArr.push(new Point(256, 236));
goldenRatioPointsArr.push(new Point(196, 277));//cheek
goldenRatioPointsArr.push(new Point(256, 261));
goldenRatioPointsArr.push(new Point(375, 296));
goldenRatioPointsArr.push(new Point(410, 349));
goldenRatioPointsArr.push(new Point(368, 411));
goldenRatioPointsArr.push(new Point(390, 483));
goldenRatioPointsArr.push(new Point(354, 597));
goldenRatioPointsArr.push(new Point(427, 572));
goldenRatioPointsArr.push(new Point((canvas.width/2), 580));
goldenRatioPointsArr.push(new Point((canvas.width/2), 604));
goldenRatioPointsArr.push(new Point(414, 590));
goldenRatioPointsArr.push(new Point(400, 594));
goldenRatioPointsArr.push(new Point(354, 597));
goldenRatioPointsArr.push(new Point(406, 632));
goldenRatioPointsArr.push(new Point(427, 635));
goldenRatioPointsArr.push(new Point(355, 659));
goldenRatioPointsArr.push(new Point(398, 659));
goldenRatioPointsArr.push(new Point(370, 704));
goldenRatioPointsArr.push(new Point(380, 739));
goldenRatioPointsArr.push(new Point(356, 721));
goldenRatioPointsArr.push(new Point(342, 679));
goldenRatioPointsArr.push(new Point(355, 659));
goldenRatioPointsArr.push(new Point(327, 620));
goldenRatioPointsArr.push(new Point(354, 597));
goldenRatioPointsArr.push(new Point(173, 347));
goldenRatioPointsArr.push(new Point(196, 277));//cheek
goldenRatioPointsArr.push(new Point(268, 326));
goldenRatioPointsArr.push(new Point(282, 306));
goldenRatioPointsArr.push(new Point(317, 295));
goldenRatioPointsArr.push(new Point(373, 337));
goldenRatioPointsArr.push(new Point(320, 354));
goldenRatioPointsArr.push(new Point(258, 337));
goldenRatioPointsArr.push(new Point(373, 337));
goldenRatioPointsArr.push(new Point(336, 368));
goldenRatioPointsArr.push(new Point(301, 368));
goldenRatioPointsArr.push(new Point(258, 337));
goldenRatioPointsArr.push(new Point(249, 327));
goldenRatioPointsArr.push(new Point(224, 348));
goldenRatioPointsArr.push(new Point(298, 575));
goldenRatioPointsArr.push(new Point(336, 709));
goldenRatioPointsArr.push(new Point(298, 677));
goldenRatioPointsArr.push(new Point(235, 600));
goldenRatioPointsArr.push(new Point(173, 347));
goldenRatioPointsArr.push(new Point(214, 466));
goldenRatioPointsArr.push(new Point(298, 578));
goldenRatioPointsArr.push(new Point(381, 452));

// context.beginPath();
// context.moveTo(goldenRatioPointsArr[0].x, goldenRatioPointsArr[0].y);
// for(var i = 1; i < goldenRatioPointsArr.length; i++){
//     console.log(goldenRatioPointsArr[i].x, goldenRatioPointsArr[i].y);
//     context.lineTo(goldenRatioPointsArr[i].x, goldenRatioPointsArr[i].y);
// }
// context.stroke();

// context.beginPath();
// context.moveTo(canvas.width - goldenRatioPointsArr[0].x, goldenRatioPointsArr[0].y);
// for(var i = 1; i < goldenRatioPointsArr.length; i++){
//     context.lineTo(canvas.width - goldenRatioPointsArr[i].x, goldenRatioPointsArr[i].y);
// }
// context.stroke();

context.strokeStyle = "#0000ff";
//hair
var ScalpArr = new Array();
ScalpArr.push(new Point(196, 277));//cheek
ScalpArr.push(new Point(196, 118));
ScalpArr.push(new Point(336, 13));
ScalpArr.push(new Point(canvas.width - 336, 13));
ScalpArr.push(new Point(canvas.width - 196, 118));
ScalpArr.push(new Point(canvas.width - 196, 277));//cheek
ScalpArr.push(new Point(canvas.width - 173, 347));
ScalpArr.push(new Point(canvas.width - 225, 598));
ScalpArr.push(new Point(canvas.width - 291, 678));
ScalpArr.push(new Point(canvas.width - 379, 744));
ScalpArr.push(new Point(379, 744));
ScalpArr.push(new Point(291, 678));
ScalpArr.push(new Point(225, 598));
ScalpArr.push(new Point(173, 347));
ScalpArr.push(new Point(196, 277));//cheek

// context.beginPath();
// context.moveTo(ScalpArr[0].x, ScalpArr[0].y);
// for(var i = 1; i < ScalpArr.length; i++){
//     context.lineTo(ScalpArr[i].x, ScalpArr[i].y);
// }
// context.stroke();


//---------------------------AUDIO------------------------
var audio = new Audio();
audio.src = 'audio/track3.mp3';
audio.controls = true;
audio.loop = false;
audio.autoplay = false;

window.addEventListener("load", initMp3Player, false);//plays the audio

function initMp3Player(){
	document.getElementById('audio_box').appendChild(audio);
	aContext = new AudioContext(); // AudioContext object instance
	// analyser = new AnalyserNode();
	analyser = aContext.createAnalyser(); // AnalyserNode method
	splitter = aContext.createChannelSplitter();
	canvas = document.getElementById('analyser_render');
	ctx = canvas.getContext('2d');
	// Re-route audio playback into the processing graph of the AudioContext
	source = aContext.createMediaElementSource(audio);
	source.connect(analyser);
    analyser.connect(aContext.destination);
    
    
	frameLooper();
}
// frameLooper() animates any style of graphics you wish to the audio frequency
// Looping at the default frame rate that the browser provides(approx. 60 FPS)

//---------------------------VISUALIZATION------------------------------
function frameLooper(){
    console.log("Playing!");
	window.requestAnimationFrame(frameLooper);
	fbc_array = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(fbc_array);
	bars = 100;


    var newX, newY, freqColor;
    
    freqColor = (fbc_array[0] / 2);
    if(freqColor < 50)
        context.strokeStyle = '#666'; // Color of the bars
    else{
        context.strokeStyle = '#fff';
    }
    //face
    context.beginPath();
    context.moveTo(goldenRatioPointsArr[0].x, goldenRatioPointsArr[0].y);
    for(var i = 1; i < goldenRatioPointsArr.length ; i++){
        freqColor = (fbc_array[0] / 2);
        newX = (freqColor*(Math.cos(freqColor))) - (freqColor*(Math.sin(freqColor))) + goldenRatioPointsArr[i].x;
        newY = (freqColor*(Math.sin(freqColor))) + (freqColor*(Math.cos(freqColor))) + goldenRatioPointsArr[i].y;
        
        context.lineTo(newX, newY);

    }
    context.stroke();

    context.beginPath();
    context.moveTo(goldenRatioPointsArr[0].x, goldenRatioPointsArr[0].y);
    for(var i = 1; i < goldenRatioPointsArr.length; i++){
        freqColor = (fbc_array[0] / 2);
        newX = (freqColor*(Math.cos(freqColor))) - (freqColor*(Math.sin(freqColor))) + goldenRatioPointsArr[i].x;
        newY = (freqColor*(Math.sin(freqColor))) + (freqColor*(Math.cos(freqColor))) + goldenRatioPointsArr[i].y;
        
        context.lineTo(canvas.width - newX + canvas.width*2, newY);

    }
    context.stroke();
    //background
    context.beginPath();
    for(var i = 0; i < ScalpArr.length ; i++){
        freqColor = (fbc_array[1] / 2);
        newX = (freqColor*(Math.cos(freqColor))) - (freqColor*(Math.sin(freqColor))) + ScalpArr[i].x;
        newY = (freqColor*(Math.sin(freqColor))) + (freqColor*(Math.cos(freqColor))) + ScalpArr[i].y;
        
        context.lineTo(newX, newY);

    }
    context.stroke();

	// for (var i = 0; i < bars; i++) {
	// 	bar_x = i * 3;
	// 	bar_width = 2;
	// 	bar_height = -(fbc_array[i] / 2);
	// 	// fillRect( x, y, width, height ) // Explanation of the parameters below
	// 	ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);

	// }
}
//---------------------------CONVERTION-----------------------------
function rePosition(x,y,loudness,frequency){
    //frequency is position in the color wheel
    //loudness is distance from original position
    //loudness
    var freqColor = 36 * frequency;//0. minimum, 360, maximum
    var newX = (x*(Math.cos(freqColor))) - (y*(Math.sin(freqColor)));
    var newY = (x*(Math.sin(freqColor))) + (y*(Math.cos(freqColor)));
    
    context.lineTo(goldenRatioPointsArr[i].x, goldenRatioPointsArr[i].y);
}

function ifInside(x,y){
    
}