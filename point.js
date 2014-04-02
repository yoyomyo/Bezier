//point class

POINT_RADIUS = 8;

function Point(x,y){
    this.x = x;
    this.y = y;
    this.active = false;

}

Point.prototype.draw = function(ctx){
    ctx.beginPath();
    ctx.arc(this.x,this.y,POINT_RADIUS,0,2*Math.PI);
    ctx.stroke();

    if(this.active){
        ctx.fillStyle = 'black';
        ctx.fill();
    }
}

Point.prototype.equal = function(pt){
    return Math.abs(this.x - pt.x) < POINT_RADIUS && Math.abs(this.y - pt.y) < POINT_RADIUS;
}