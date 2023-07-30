let progress= document.getElementById("progress");
let song= document.getElementById("song");
let ctrlIcon= document.getElementById("play");

song.onloadedmetadata= function(){
    progress.max= song.duration;
    progress.value= song.currentTime;
}
function playPause(){
    if(song.paused){
        song.play();
        ctrlIcon.classList.remove();
        ctrlIcon.classList.add("pause_circle");
    }
    else{
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}
if(song.play()){
    setInterval(()=>{
    progress.value= song.currentTime;
},500);
}
progress.onchange= function(){
    song.play();
    song.currentTime= progress.value;
}