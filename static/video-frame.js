const video = document.getElementById("video");
const playPauseIcon = document.getElementById("playPause");
const timeline = document.getElementById("timeline");
const fullscreenIcon = document.getElementById("fullscreen");
const controls = document.querySelector(".controls");

let isFullscreen = false;

video.addEventListener("play", () => {
  playPauseIcon.classList.remove("fa-play");
  playPauseIcon.classList.add("fa-pause");
});

video.addEventListener("pause", () => {
  playPauseIcon.classList.remove("fa-pause");
  playPauseIcon.classList.add("fa-play");
});

video.addEventListener("timeupdate", () => {
  timeline.value = (video.currentTime / video.duration) * 100;
});

timeline.addEventListener("input", () => {
  video.currentTime = (timeline.value / 100) * video.duration;
});

playPauseIcon.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

fullscreenIcon.addEventListener("click", () => {
  if (!isFullscreen) {
    video.requestFullscreen ? video.requestFullscreen() : video.webkitRequestFullscreen();
    document.body.style.overflow = "hidden";
    isFullscreen = true;
  } else {
    document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen();
    document.body.style.overflow = "auto";
    isFullscreen = false;
  }
});

document.addEventListener("mousemove", (e) => {
  if (isFullscreen) {
    controls.style.opacity = "0.7";
    clearTimeout(controls.timer);
    controls.timer = setTimeout(() => {
      controls.style.opacity = "0"; // Hide buttons after inactivity
    }, 2000);
  }
});
