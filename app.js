(() => {
  const menuScreen = document.getElementById("menuScreen");
  const playerScreen = document.getElementById("playerScreen");
  const video = document.getElementById("museumVideo");
  const playButton = document.getElementById("playButton");
  const pauseButton = document.getElementById("pauseButton");
  const restartButton = document.getElementById("restartButton");
  const volumeRange = document.getElementById("volumeRange");
  const volumeValue = document.getElementById("volumeValue");
  const videoMessage = document.getElementById("videoMessage");

  function setMessage(message = "") {
    videoMessage.textContent = message;
    videoMessage.classList.toggle("is-hidden", !message);
  }

  function setVolume() {
    const volume = Number(volumeRange.value) / 100;
    video.volume = volume;
    video.muted = volume === 0;
    volumeValue.value = `${volumeRange.value}%`;
    volumeValue.textContent = `${volumeRange.value}%`;
  }

  async function playVideo() {
    try {
      await video.play();
      setMessage("");
    } catch (error) {
      setMessage("재생하려면 재생 버튼을 다시 눌러 주세요.");
    }
  }

  function selectVideo(button) {
    const source = button.dataset.video;
    const title = button.dataset.title || "선택한 영상";

    // 이전 영상이 있을 경우 완전히 정지하고 새 영상으로 교체
    video.pause();
    video.removeAttribute("src");
    video.load();

    menuScreen.classList.add("is-hidden");
    playerScreen.classList.remove("is-hidden");
    document.title = `${title} | 박물관 영상 플레이어`;

    video.src = source;
    video.currentTime = 0;
    video.loop = false; // 자동 반복 재생 안 함
    setMessage("");

    // 버튼을 눌러 진입했으므로 자동 시작을 시도하되,
    // 기기 정책으로 막히면 화면은 열린 채 재생 버튼으로 시작 가능
    playVideo();
  }

  document.querySelectorAll(".video-select").forEach((button) => {
    button.addEventListener("click", () => selectVideo(button));
  });

  playButton.addEventListener("click", playVideo);

  pauseButton.addEventListener("click", () => {
    video.pause();
  });

  restartButton.addEventListener("click", async () => {
    try {
      video.currentTime = 0;
      await video.play();
      setMessage("");
    } catch (error) {
      setMessage("처음부터 재생하려면 버튼을 다시 눌러 주세요.");
    }
  });

  volumeRange.addEventListener("input", setVolume);

  video.addEventListener("ended", () => {
    // 자동 반복 없이 마지막 화면에서 정지
  });

  video.addEventListener("error", () => {
    setMessage("영상 파일을 찾을 수 없습니다. videos 폴더의 파일명과 경로를 확인해 주세요.");
  });

  setVolume();
})();
