var player;
function onYouTubeIframeAPIReady() {
  // 一般使用 影片的id寫在js裡
  player = new YT.Player("video", {
    events: {
      onReady: onPlayerReady,
    },
  });
}
function onPlayerReady(e) {
  // 為確保瀏覽器上可以自動播放，要把影片調成靜音
  e.target.mute().playVideo();
  const toggleVoice = document.querySelector(".toggleVoice");
  toggleVoice.addEventListener("click", () => {
    if (e.target.isMuted()) {
      toggleVoice.src = "./content/assets/img/voice.svg";
      e.target.unMute().playVideo();
    } else {
      toggleVoice.src = "./content/assets/img/novoice.svg";
      e.target.mute().playVideo();
    }
  });
}
