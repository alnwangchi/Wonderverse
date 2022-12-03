var player;
function onYouTubeIframeAPIReady() {
  // 一般使用 影片的id寫在js裡
  player = new YT.Player("video0", {
    events: {
      onReady: onPlayerReady,
    },
  });
}
function onPlayerReady(e) {
  // 檢查 YT object 是否已存在全域
  checkYT();
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

var player2;
function yt_init() {
  player2 = new YT.Player("video1", {
    events: {
      onReady: onPlayerReady1,
    },
  });
}

var checkYT = () => {
  if (YT && YT.loaded) {
    yt_init();

    clearInterval(checkYT);
  }
};

function onPlayerReady1(e) {
  // 為確保瀏覽器上可以自動播放，要把影片調成靜音
  e.target.mute().playVideo();

  const toggleVoice1 = document.querySelector(".toggleVoice1");
  toggleVoice1.addEventListener("click", () => {
    if (e.target.isMuted()) {
      toggleVoice1.src = "./content/assets/img/voice.svg";
      e.target.unMute().playVideo();
    } else {
      toggleVoice1.src = "./content/assets/img/novoice.svg";
      e.target.mute().playVideo();
    }
  });
}
