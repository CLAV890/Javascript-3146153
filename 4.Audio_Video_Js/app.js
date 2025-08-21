const video = document.querySelector("#video");
const playVideo = document.querySelector("#play-video");
const stopVideo = document.querySelector("#stop-video");
const playStopImg1 = document.querySelector("#play-stop-img1");
const playStopImg2 = document.querySelector("#play-stop-img2");
const audio1 = document.querySelector("#audio-1"); 


function reproducirVideo () {
  video.play()
}

playVideo.addEventListener("click",reproducirVideo)



function pausarVideo () {
  video.pause()
}

stopVideo.addEventListener("click",pausarVideo)


function toggleAudioUno (){

  if(audio1.paused){ 
    audio1.play() 
    sounStop.textContent = "⏸️ Stop"
  }else{ 
    audio1.pause() 
    sounPlay.textContent = "▶️ Play"
  }

}
playStopImg1.addEventListener("click",toggleAudioUno)