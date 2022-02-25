function preload(){
  classifier = ml5.imageClassifier("DoodleNet")
}

function setup(){
canvas = createCanvas(350, 325)
canvas.position(500,270)
background("white")
canvas.mouseReleased(classifyCanvas)
synth = window.speechSynthesis
}

function draw(){
 strokeWeight(10)
 stroke("black")
 if(mouseIsPressed){
     line(pmouseX,pmouseY,mouseX,mouseY)
}
}

function classifyCanvas(){
    classifier.classify(canvas,gotResult)
}

function gotResult(error, result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)
        document.getElementById("Label").innerHTML = result[0].label
        utterThis = new SpeechSynthesisUtterance(result[0].label)
        synth.speak(utterThis)
    }
}