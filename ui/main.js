console.log('Loaded!');
var counter=0;
var im=document.getElementById('winvin');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+0.1;
    im.style.marginLeft=marginLeft+'px';
}
im.onclick=function(){
    var interval=setInterval(moveRight,50);
};
var t1=document.getElementById('count');
t1.onclick=function(){
  counter=counter+1;
  var t2=document.getElementById('cou');
  t2.innerHTML=counter.toString();
};