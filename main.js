img=""
status=""
objects=[];
function preload(){
    img = loadImage('dog_cat.jpg');
  }
  function setup() {
    canvas = createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO)
    video.hide()

    objectDetector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="Status : Detecting Objects"
  }
  function modelLoaded(){
    console.log("Model is successfully loaded")
    status=true
    objectDetector.detect(video,gotResults)
  }
  function draw(){
    image(video, 0, 0, 380, 380);
    if(status != "")
    {
objectDetector.detect(video,gotResults)
r=random(255)
g=random(255)
b=random(255)
for ( i = 0 ; i < objects.length ; i ++ ) {
document.getElementById("status").innerHTML="Status :objects detected"
document.getElementById("number_of_objects").innerHTML="Number of objects detected are "+ objects.length
fill(r,g,b)
percent= floor(objects[0].confidence*100);
text(objects[0].label+" "+ percent + "%", objects[0].x + 15, objects[0].y)
noFill();
stroke(r,g,b) 
rect(objects[0].x,objects[0].y,objects[0].width, objects[0].height);
}
} 
}
  function gotResults(error,results){
if (error) {
  console.log(error)
}
console.log(results)
objects=results
  }
