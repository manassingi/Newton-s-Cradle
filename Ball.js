class ball
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			'restitution':1,
			'friction':0,
			'density':0.8

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.color=color(random(0,225),random(0,225),random(0,225))
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var pos1=this.body.position;		

			push()
			translate(pos1.x, pos1.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(this.color)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
