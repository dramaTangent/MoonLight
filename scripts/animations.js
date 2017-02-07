function fade(what,func=null,from=1,to=0,tran=4000){
    var opacity=from*10;
    var inter=setInterval(function(){
        if(from>to){
            opacity--;
        }else{
            opacity++;
        }
        what.style.opacity=opacity/10;
        if(opacity==to*10){
            clearInterval(inter);
            if(func!=null){
                func();
            }
        }
    },tran/100);
}

