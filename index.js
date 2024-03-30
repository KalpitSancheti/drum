
var size=document.querySelectorAll(".drum").length;
for(var i=0;i<size;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonHTML=this.innerHTML;
        doclick(buttonHTML)
        animate(buttonHTML);
    });

}

function doclick(clicked){
    // console.log(this.innerHTML);
    
 
  
   
    if(clicked=='w'){
        var beat=new Audio("./sounds/kick-bass.mp3");
        beat.play();

    }
    if(clicked=='a'){
        var beat=new Audio("./sounds/snare.mp3");
        beat.play();

    }
    if(clicked=='s'){
        var beat=new Audio("./sounds/crash.mp3");
        beat.play();

    }
    if(clicked=='d'){
        var beat=new Audio("./sounds/tom-1.mp3");
        beat.play();

    }
    if(clicked=='j'){
        var beat=new Audio("./sounds/tom-2.mp3");
        beat.play();

    }
    if(clicked=='k'){
        var beat=new Audio("./sounds/tom-3.mp3");
        beat.play();

    }
    if(clicked=='l'){
        var beat=new Audio("./sounds/tom-4.mp3");
        beat.play();

    }




}
document.addEventListener("keydown",function(event){
    doclick(event.key);
    animate(event.key);
});
function animate(key){
    var button=document.querySelector("."+key);
    button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove("pressed");
    },100);
   
}