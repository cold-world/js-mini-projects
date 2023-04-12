//Elements
const buttons = Array.from(document.querySelectorAll('button'));
const video = document.querySelector('.screen');
const playPause = document.querySelector('.play-pause');
const stop = document.querySelector('.stop');
const progress = document.querySelector('.range');
const timestamp = document.querySelector('.timestamp');

//Functions
function updatePlayBtn(command) {
  if(!video.paused) playPause.classList.add('active');
  else playPause.classList.remove('active');
}

function toggleVideoStatus() {
  if(video.paused) {
  video.play();
  updatePlayBtn('play');
  } else {
    video.pause();
    updatePlayBtn('pause')
  }
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100 ;

  let mins = Math.floor(video.currentTime / 60);
  if(mins < 10) mins = '0' + String(mins);

  let secs = Math.floor(video.currentTime % 60);
  if(secs < 10) secs = '0' + String(secs);

  timestamp.innerHTML = `${mins}:${secs}`;
  
}

function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

//Event listeners
playPause.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayBtn);
video.addEventListener('play', updatePlayBtn);
video.addEventListener('timeupdate', updateProgress);

