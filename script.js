var curve = new Bezier();
var selected = null;
var dragged = false;

var canvas=document.getElementById("canvas");
canvas.width = 640;
canvas.height = 480;
var ctx=canvas.getContext("2d");
var rect = canvas.getBoundingClientRect();
canvas.addEventListener('click', onMouseClick);
canvas.addEventListener('mousedown', onMouseDown);
canvas.addEventListener('mouseup', onMouseUp);
canvas.addEventListener('mousemove', onMouseMove);

function getMousePos(e){
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;
    return new Point(x,y);
}
function onMouseClick(e){

    var p = getMousePos(e);
    var addPoint = true;
    for(var i in curve.cPoints){
        if(curve.cPoints[i].equal(p)){
            curve.cPoints[i].active = true;
            addPoint = false;
        }else{
            curve.cPoints[i].active = false;
        }
    }    
    if(addPoint){
        p.active = true; 
        curve.cPoints.push(p)
    };
    redraw();
    
}

function onMouseDown(e){
    dragged = true;
    var pos = getMousePos(e);
    selected = curve.updateActivePoint(pos);
}

function onMouseMove(e){
    if (!dragged) {
        return;
    }
    p = getMousePos(e);
    selected.x = p.x;
    selected.y = p.y;
    redraw();    
}

function onMouseUp(e){
    dragged = false;
}

function redraw(){
    ctx.clear("#FFF");
    curve.draw(ctx,10);
}

ctx.clear = function(fillColor) {
    ctx.fillStyle = fillColor;
    ctx.fillRect(0,0,rect.width, rect.height);
};
