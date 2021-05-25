status="";
img="";

function preload(){
img=loadImage('bottels.jpg');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoded);
}

function draw(){
image(img,0,0,300,300);
}

function modelLoded(){
    console.log("modelLoded!");
    status=true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        
    }
}

function back(){
    window.location="index.html";
}