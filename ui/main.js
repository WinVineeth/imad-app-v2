console.log('Loaded!');
var im=document.getElementById('winvin');
var marginLeft=0;
//var counte=0;
function moveRight(){marginLeft=marginLeft+0.1;im.style.marginLeft=marginLeft+'px';}
function moveLeft(){marginLeft=marginLeft-0.1;im.style.marginLeft=marginLeft+'px';}
im.onclick=function(){var interval=setInterval(moveRight,50);};
im.oncontextmenu=function(){var interval=setInterval(moveLeft,50);};

var tk=document.getElementById('count');
tk.onclick=function(){
  var req=new XMLHttpRequest();
  req.onreadystatechange=function(){
    if(req.readyState===XMLHttpRequest.DONE){
        if(req.status===200){
            document.getElementById('cou').innerHTML=req.responseText.toString();
        }
    }  
  };
  req.open('GET','http://winvineeth.imad.hasura-app.io/counter',true);
  req.send(null);
  //counte=counte+1;
  //document.getElementById('cou').innerHTML=counte.toString();
};


var sub=document.getElementById('sub');
sub.onclick=function(){
    var req=new XMLHttpRequest();
    var nam=document.getElementById('name');
    var namvalue=nam.value;
    req.onreadystatechange=function(){
    if(req.readyState===XMLHttpRequest.DONE){
        if(req.status===200){
            var names=req.responseText;
            names=JSON.parse(names);
            var list='';
            for(var i=0;i<names.length;i++){
                list+='<li>'+names[i]+'</li>';
            }
            var ul=document.getElementById('namlist');
            ul.innerHTML=list;
        }
    }  
  };
  req.open('GET','http://winvineeth.imad.hasura-app.io/submit_nam?nam='+namvalue,true);
  req.send(null);
    
};