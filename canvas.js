var bird;
var pipes = [];
function setup(){
	createCanvas(400,600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw(){
	background(0);

  
  if(frameCount % 180 ==0) pipes.push(new Pipe());
  
  for(var i=pipes.length-1;i>=0;i--){
  	pipes[i].show();
    pipes[i].update();
    
    if(pipes[i].hits(bird)) //console.log("HIT");
    
    if(pipes[i].x<0) pipes.splice(i,1); // pipe is banished out of game
    
    
  }
  
  bird.show();
  bird.update();
}

function keyPressed(){
	if(key == ' '){
    //console.log("HIT");
    bird.up();
  }
}