 


var post = document.querySelector("#post");
var love = document.querySelector("#post i");

var currentGrowth = 500;
var flog = 0;


post.addEventListener("dblclick",function(elem){
   if(flog === 0){
   currentGrowth++;
    love.style.opacity = 1;
    love.style.color = "red";
    document.querySelector("#likes").innerHTML = `<i class="ri-heart-fill"></i>`
    document.querySelector("#likes").style.color = `red`
    love.style.transform = `translate(-50%,-50%) scale(1)`
   document.querySelector("#cards  h5").textContent = currentGrowth + "Likes"

    flog = 1;
} else{
   love.style.opacity = 0;


    flog = 0;


}
 setTimeout(function(){
    love.style.transform = `translate(-50%,-50%) scale(0)`
 },1000)
})

likes.addEventListener("click",function(){
   if(flog=== 0){
   currentGrowth++;
   document.querySelector("#likes").innerHTML = `<i class="ri-heart-fill"></i>`
   document.querySelector("#likes").style.color = `red`
   document.querySelector("#cards  h5").textContent = currentGrowth + "Likes"

   flog = 1;   
}else{
   document.querySelector("#likes").innerHTML = `<i class="ri-heart-line"></i>`
   document.querySelector("#likes").style.color = `black`
   flog = 0;

}
})