function childNodesToArray(childs){
    var rArray=[];
    var q=0
    for(var i=1;i<childs.length;i+=2){
        rArray[q]=childs[i];
        q++
    }
    return rArray;
}

var imageIndex=0;
var imageObjects

var slider={
    ImageIndex:{
        currentValue:function(){return imageIndex},
        increase:function(){imageIndex++},
        decrease:function(){imageIndex--},
        check:function(){   
        //check it
        } 
    },
    Images:{
        objects:childNodesToArray(document.getElementById("MoonSliderImageList").childNodes)
    }
}