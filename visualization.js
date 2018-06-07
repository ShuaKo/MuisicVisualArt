
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

    this.img = new Image();
    this.img.src = lnk;
    console.log(img);
    context.drawImage(img, a, b, 603, 800);
}

//-----------------------------------------runTime------------------------------------------------------
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
//Background
context.fillStyle = "#ffffff";
context.fillRect(0, 0, canvas.width, canvas.height);//clear screen

context.strokeStyle = "#00ff00";
drawCircle(new Point(318,318), 8);
drawCircle(new Point(318,318), 21);
drawCircle(new Point(canvas.width-318,318), 8);
drawCircle(new Point(canvas.width-318,318), 21);

//face mask
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
goldenRatioPointsArr.push(new Point(196, 277));
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
goldenRatioPointsArr.push(new Point(196, 277));
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

context.strokeStyle = "#0000ff";

var ScalpArr = new Array();
ScalpArr.push(new Point(196, 277));
ScalpArr.push(new Point(196, 118));
ScalpArr.push(new Point(336, 13));
ScalpArr.push(new Point(canvas.width - 336, 13));
ScalpArr.push(new Point(canvas.width - 196, 118));
ScalpArr.push(new Point(canvas.width - 196, 277));
ScalpArr.push(new Point(canvas.width - 173, 347));
ScalpArr.push(new Point(canvas.width - 225, 598));
ScalpArr.push(new Point(canvas.width - 291, 678));
ScalpArr.push(new Point(canvas.width - 379, 744));
ScalpArr.push(new Point(379, 744));
ScalpArr.push(new Point(291, 678));
ScalpArr.push(new Point(225, 598));
ScalpArr.push(new Point(173, 347));
ScalpArr.push(new Point(196, 277));

//---------------------------AUDIO------------------------
var audio = new Audio();
audio.src = 'audio/increasingHz.mp3';
audio.controls = true;
audio.loop = false;
audio.autoplay = false;
var A = new Point(goldenRatioPointsArr[0].x, goldenRatioPointsArr[0].y);
var B = new Point(goldenRatioPointsArr[0].x, goldenRatioPointsArr[0].y);
var ctr = 0;
var mode = 0;

window.addEventListener("load", initMp3Player, false);

function initMp3Player(){
	document.getElementById('audio_box').appendChild(audio);
	aContext = new AudioContext();
	analyser = aContext.createAnalyser();
	splitter = aContext.createChannelSplitter();
	canvas = document.getElementById('analyser_render');
	ctx = canvas.getContext('2d');
	source = aContext.createMediaElementSource(audio);
	source.connect(analyser);
    analyser.connect(aContext.destination);
    
	frameLooper();
}

//---------------------------VISUALIZATION------------------------------
function frameLooper(){
	window.requestAnimationFrame(frameLooper);
	fbc_array = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(fbc_array);
	bars = 100;


    var newX, newY, frequency, amplitude;
    frequency = 0;
    amplitude = 0;

    for(var i = 0; i < fbc_array.length ; i++){
        if(fbc_array[i] > amplitude){
            amplitude = fbc_array[i] / 2;
            frequency = (i * 360)/1024;
        }
    }

    if(amplitude > 0){

    if(amplitude%3 == 0)
        context.strokeStyle = '#666'; // Draw Color
    else{
        context.strokeStyle = '#fff'; // Erase Color
    }

    context.beginPath();
    context.moveTo(A.x, A.y);
    switch(mode){
        case 0:
            context.moveTo(A.x, A.y);
            if(ctr < goldenRatioPointsArr.length){
                B = new Point(goldenRatioPointsArr[ctr].x, goldenRatioPointsArr[ctr].y);
                newX = (amplitude*(Math.cos(frequency))) - (amplitude*(Math.sin(frequency))) + B.x;
                newY = (amplitude*(Math.sin(frequency))) + (amplitude*(Math.cos(frequency))) + B.y;
                
                context.lineTo(newX, newY);
                context.stroke();

                context.beginPath();
                context.moveTo(canvas.width*3 - A.x, A.y);
                context.lineTo(canvas.width*3 - newX, newY);
                context.stroke();
                A = new Point(newX, newY);
            }
            else{
                mode = 1;
                ctr = -1;
                A = new Point(newX, newY);
            }
            break;
        case 1:
            if(ctr < ScalpArr.length){
                B = new Point( ScalpArr[ctr].x, ScalpArr[ctr].y);
                newX = (amplitude*(Math.cos(frequency))) - (amplitude*(Math.sin(frequency))) + B.x;
                newY = (amplitude*(Math.sin(frequency))) + (amplitude*(Math.cos(frequency))) + B.y;
                
                context.lineTo(newX, newY);
                context.stroke();
                A = new Point(newX, newY);
            }
            else{
                mode = 0;
                ctr = -1;
                A = new Point(goldenRatioPointsArr[0].x, goldenRatioPointsArr[0].y);
            }
            break;
        default:
    }
    context.stroke();
    ctr++;
    }
}