function animate(obj,target,callback){
    clearInterval(obj.timer);
// var timer=setInterval(function(){  
//减少内存的占用 性能优化
obj.timer=setInterval(function(){
    var step=(target-obj.offsetLeft)/25;
    step=step<0?Math.floor(step):Math.ceil(step);
    if(obj.offsetLeft==target){
        clearInterval(obj.timer);
        if(callback){
            callback();
        }
    } else {
        obj.style.left=obj.offsetLeft+step+'px';
    }
},15)
}