function Slider(className,index){
    this.sliderIndex=index;
    this.imageIndex=0;
    this.sliderObject=document.getElementsByClassName(className)[this.sliderIndex];
    this.sliderElements=childNodesToArray(this.sliderObject.childNodes);
    this.sliderSwitchers=[];
    this.sliderImages=null;
    this.sliderImageList=[];
    this.setSliderImages=function(){
        for(var i=0;i<this.sliderElements.length;i++){
            if(this.sliderElements[i].className.search("imageList")!=-1){
                this.sliderImages=this.sliderElements[i];
            }
        }
    }
    this.setSliderImageList=function(){
        this.setSliderImages();
        for(var i=0;i<childNodesToArray(this.sliderImages.childNodes).length;i++){
            this.sliderImageList[i]=childNodesToArray(this.sliderImages.childNodes)[i];
        }
    }
    this.setSliderSwitchers = function(){
        for(var i=0;i<this.sliderElements.length;i++){
            if(this.sliderElements[i].className.search("switcher")!=-1){
                if(this.sliderSwitchers[0]==undefined){
                    this.sliderSwitchers[0]=this.sliderElements[i];
                }else{
                    this.sliderSwitchers[1]=this.sliderElements[i];
                }
            }
        }
    }
    this.showImage=function(visible){
        for(var i=0;i<this.sliderImageList.length;i++){
            this.sliderImageList[i].style.display="none";
        }
        this.sliderImageList[visible].style.display="block";
    }
    this.setEventsOnSwitchers=function(){
        this.setSliderSwitchers();
        this.setSliderImages();
        this.setSliderImageList();
        this.slideFade=function(){
            
        }
        this.sliderSwitchers[0].addEventListener("click",function(){
            Slider.imageIndex--;
            fade(Slider.sliderImages,function(){
                Slider.showImage(Slider.imageIndex);
                fade(Slider.sliderImages,null,0,1);
            });
        });
        this.sliderSwitchers[1].addEventListener("click",function(){
            Slider.imageIndex++;
            fade(Slider.sliderImages,function(){
                Slider.showImage(Slider.imageIndex);
                fade(Slider.sliderImages,null,0,1);
            });
        });
    }
};


var slider=new Slider("MoonSlider",0);
slider.setEventsOnSwitchers();
slider.showImage(0);