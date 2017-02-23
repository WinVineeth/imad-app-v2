console.log('Loaded!');

var im=document.getElementById('winvin');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+0.1;
    im.style.marginLeft=marginLeft+'px';
}
im.onclick=function(){
    var interval=setInterval(moveRight,50);
};