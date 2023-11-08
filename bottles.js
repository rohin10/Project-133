img="";
status1="";
function preload(){
    img = loadImage("bottles.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.position(440,240);
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";


}
function modelLoaded(){
    console.log("Model Loaded");
    status1 = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
   }
   console.log(results);
   objects=results;
   document.getElementById("numberOfObjects").innerHTML = "No. of Objects deteced are: "+objects.length;
   document.getElementById("status").innerHTML = "Status : Objects Detected";
}
   
function draw(){
    image(img,0,0,640,420);
    if(status1 !=""){
        for(i=0; i < objects.length; i++){
            document.getElementById("status").innerHTML="Status : Objects Detected"
            fill("#e60000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label+" "+percent+"%", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke("#4db8ff");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
    
    
}