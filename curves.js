curve.types = {
    STRAIGHT_LINE : 0,
    BEZIER : 1,
    B_SPLINE : 2
}

function curve(){

	//a bunch of control points
	this.cPoints = [];
	this.lPoints = [];
	this.curveType = 0; //default to staight line
	this.isActive = false;
}


//to be implemented by subclasses
curve.prototype.addPoints = function(pt){
	if(!this.isActive){
		this.cPoints.push(pt);
	}
}

curve.prototype.draw = function(levelOfDetail){
	console.log(cPoints);
    if (!cPoints.empty()) {
        connectTheDots();
        drawNormals();
    }
}

curve.prototype.moveActivePoints = function(){

}

curve.prototype.updateActivePoints = function(newPos){

}

//curve
curve.prototype.connectTheDots = function(ctx){
	for(var i = 0; i<cPoints.length; i++){

	}
}

curve.prototype.drawLine = function(ctx, pt1, pt2){

}

curve.prototype.drawNormals = function(){

}