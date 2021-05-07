class paperball{
	constructor(x,y,r){
    var options={
     istatic = false,
     restitution:0.3,
	 friction:0,
     density:1.2
    }

		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-2)/1, options)
		World.add(world, this.body);

	}
	display()
	{
			var paperballpos=this.body.position;		
			push()
			translate(paperballpos.x, paperballpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.r,this.r);
			pop()
	}

}