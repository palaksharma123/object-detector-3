status="";
img="";
object=[];

function preload(){
img=loadImage('A.C.jpg');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoded);
}

function draw(){
image(img,0,0,300,300);

if(status!=""){

    objectDetector.detect(img,gotResults);
    r=random(255);
    g=random(255);
    b=random(255);

    for (i=0; object.length>i; i++){
        document.getElementById("status").innerHTML="status : object detected";
        document.getElementById("number_of_objects").innerHTML="number of objects "+object.length;
        fill(r,g,b);
        percent=floor(object[i].confidence*100);
        text(object[i].label+" "+percent+"%",object[i].x+15,object[i].y+15);
        noFill();
       stroke(r,g,b);
       rect(object[i].x,object[i].y,object[i].width,object[i].height);
    }
}
}

function modelLoded(){
    console.log("modelLoded!");
    status=true;
  
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        object=results;
    }
}

function back(){
    window.location="index.html";
}