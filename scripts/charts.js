function Charts(className,index){
    this.className=className;
    this.chartIndex=index;
    this.chartObjects=document.getElementsByClassName(this.className)[this.chartIndex];
    this.valueChart=childNodesToArray(this.chartObjects.childNodes);
    this.setChartValue=function(){
        for(var i=0;i<this.valueChart.length;i++){
            this.valueChart[i].style.width=this.valueChart[i].getAttribute("value");
        }
    }
}

for( var i=0;i<document.getElementsByClassName("chart").length;i++){
    var charts=new Charts("chart",i);
    charts.setChartValue();
}