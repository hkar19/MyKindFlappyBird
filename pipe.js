function Pipe() {
  this.w = 20;
  this.x = width;
  this.minT = 5; // minimum rect height
  this.gap = 125; //gap for bird to fly through
  this.t = random(this.minT, height - this.gap - this.minT); // height of top rectangle
  this.speed = -1;
  this.blink = false;
  
  this.hits = function(Bird){
  	if(Bird.x>this.x && Bird.x<this.x+this.w){
    	if(Bird.y<this.t || Bird.y>this.t+this.gap){
      	this.blink = true;
        return true;
      }
    }
    this.blink = false;
    return false
  }
  
	this.show = function(){
  	if(this.blink) fill(0,255,0);
    else fill(255);
  	rect(this.x,0,this.w,this.t);
    rect(this.x, this.gap + this.t,this.w,height-this.gap-this.t);
  }
  
  this.update = function(){
    this.x += this.speed;
  }
  
  
}