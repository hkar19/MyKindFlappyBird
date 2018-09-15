function Bird() {
  this.y = height/2;
  this.x = 40;
  this.birdSize = 25;
  
  this.gravity	= 0.5;
  this.velocity	= 0;
  this.jumpSpeed= -10;
  
  this.show = function() {
  	fill(255);
    ellipse(this.x,this.y,this.birdSize,this.birdSize);
  }
  
  this.update = function(){
  	this.velocity += this.gravity;
    this.velocity *= 0.95;
    this.y += this.velocity;
    
    if(this.y > height){
    	this.y = height;
      this.velocity = 0;
    }
    else if(this.y < 0){
    	this.y = 0;
      this.velocity =0;
    }
  }
  
  this.up = function(){
  	this.velocity += this.jumpSpeed;
  }
  
}