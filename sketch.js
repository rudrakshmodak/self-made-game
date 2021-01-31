var skeleton1, skeleton1Img
var skeleton2, skeleton2Img
var skeleton3, skeleton3Img
var skeleton4, skeleton4Img
var notIt, notItImg
var backgroundImage
var it, itImg

function preload(){
    backgroundImage=loadImage("island background (the better one).png");
    skeleton1Img=loadImage("no background skeleton walk cycle 1.png");
    skeleton2Img=loadImage("no background skeleton walk cycle 2.png");
    skeleton3Img=loadImage("no background skeleton walk cycle 3.png");
    skeleton4Img=loadImage("no background skeleton walk cycle 4.png");
    notItImg=loadImage("not it person.png");
    itImg=loadImage("IT PERSON.png");
}

function setup(){
  background(backgroundImage);
}

function draw(){
	createCanvas(1200, 800);
}