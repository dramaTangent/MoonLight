function childNodesToArray(childs){
    var rArray=[];
    var q=0
    for(var i=1;i<childs.length;i+=2){
        rArray[q]=childs[i];
        q++
    }
    return rArray;
}