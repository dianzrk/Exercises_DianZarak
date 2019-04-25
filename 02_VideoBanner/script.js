var video = document.querySelector('.video');
var juice = document.querySelector('.pink-juice');
var btn = document.getElementById('play-pause');
var btn2 = document.getElementById('mute-unmute');


function togglePlayPause() {
  if(video.paused) {
    btn.className = 'pause';
    video.play();
  }
  else {
    btn.className = 'play';
    video.pause();

  }
}

  function toggleMuteUnmute() {
    if(video.muted) {
      btn2.className = 'mute';
      video.unmute();
    }
    else {
      btn2.className = 'unmute';
      video.mute();

    }
  }

btn.onclick = function() {
  togglePlayPause();
};

btn2.onclick = function() {
  toggleMuteUnmute();
};


video.addEventListener('timeupdate', function() {
  var juicePos = video.currentTime / video.duration;
  juice.style.width = juicePos * 100 + "%";
  if (video.ended) {
    btn.className = 'play';
  }
})
