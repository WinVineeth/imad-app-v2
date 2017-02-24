console.log('Loaded!');
var im=document.getElementById('winvin');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+0.1;
    im.style.marginLeft=marginLeft+'px';
}
function moveLeft(){
    marginLeft=marginLeft-0.1;
    im.style.marginLeft=marginLeft+'px';
}
im.onclick=function(){
    var interval=setInterval(moveRight,50);
};
im.oncontextmenu=function(){
    var interval=setInterval(moveLeft,50);
};
var t1=document.getElementById('count');
t1.onclick=function(){
  var req=new XMLHttpRequest();
  req.onreadystatechange=function(){
    if(req.readyState==XMLHttpRequest.DONE){
        if(request.status==200){
            var counter=request.responseText;
            var t2=document.getElementById('cou');
            t2.innerHTML=counter.toString();
        }
    }  
  };
  req.open('GET','http://winvineeth.imad.hasura-app.io/counter',true);
  req.send(null);
};