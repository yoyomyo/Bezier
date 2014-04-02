var points = [];
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
    for(var i in points){
        if(points[i].equal(p)){
            points[i].active = true;
            addPoint = false;
        }else{
            points[i].active = false;
        }
    }    
    if(addPoint){
        p.active = true; 
        points.push(p)
    };
    redraw();
    
}

function onMouseDown(e){
    dragged = true;
    //console.log('mousedown')
    var pos = getMousePos(e);
    for(var i in points){
        if(points[i].equal(pos)){
            points[i].active = true;
            selected = points[i];
        }else{
            points[i].active = false;
        }
    }
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
    for(var i in points){
        points[i].draw(ctx);
    }
}

ctx.clear = function(fillColor) {
    ctx.fillStyle = fillColor;
    console.log(rect);
    ctx.fillRect(0,0,rect.width, rect.height);
};
