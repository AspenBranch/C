function Button(x,y,Sz,col,effect,type){
    this.x=x;
    this.y=y;
    this.antiX=null;
    this.antiY=null;
    this.Sz=Sz;
    this.col=col;
    this.effect=effect;
    this.type=type;
    //this.anitY=this.y-this.Sz/5;
    this.AntiSz1=this.Sz*1.25;
    this.AntiSz2=this.Sz*1;
    this.clicked=false;
    this.update=function(){
        if(dist(mouseX,mouseY,this.x,this.y)<this.Sz/2){
            //console.log("ouch");
            this.Sz=lerp(this.Sz,this.AntiSz1,0.05);
            cursor('POINTER')
            if(mouseIsPressed){
                this.clicked=true;
            }
        }
        if(dist(mouseX,mouseY,this.x,this.y)>=this.Sz/2){
            //console.log("ouch");
            this.Sz=lerp(this.Sz,this.AntiSz2,0.05);
            cursor(ARROW);
        }
        if(this.antiX!==null){
            this.x=lerp(this.x,this.antiX,0.05);
        }
        if(this.antiY!==null){
            this.y=lerp(this.y,this.antiY,0.05);
        }
    };
    this.show=function(){
        colorMode(RGB);
        switch(this.type){
            case "play":
                fill(this.col);
                stroke(255);
                strokeWeight(this.Sz/20);
                ellipse(this.x,this.y,this.Sz,this.Sz);
                fill(0, 119, 182);
                triangle(this.x-this.Sz/10,this.y-3*this.Sz/10,this.x-this.Sz/10,this.y+3*this.Sz/10,this.x+this.Sz/4-this.Sz/10,this.y);
            break;
            case "intro":
            break;
        }
    };
}
