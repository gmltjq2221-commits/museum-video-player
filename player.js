(() => {
  const video = document.getElementById("museumVideo");
  const source = document.body.dataset.video;
  if (!video || !source) return;

  const message = document.getElementById("videoMessage");
  const volume = document.getElementById("volumeRange");
  const volumeValue = document.getElementById("volumeValue");

  video.src = source;
  video.loop = false;

  const showMessage = (text = "") => {
    message.textContent = text;
    message.classList.toggle("is-hidden", !text);
  };

  const setVolume = () => {
    video.volume = Number(volume.value) / 100;
    video.muted = Number(volume.value) === 0;
    volumeValue.value = `${volume.value}%`;
    volumeValue.textContent = `${volume.value}%`;
  };

  const play = async () => {
    try {
      await video.play();
      showMessage("");
    } catch {
      showMessage("재생 버튼을 한 번 더 눌러 주세요.");
    }
  };

  document.getElementById("playButton").addEventListener("click", play);
  document.getElementById("pauseButton").addEventListener("click", () => video.pause());
  document.getElementById("restartButton").addEventListener("click", async () => {
    video.currentTime = 0;
    await play();
  });
  volume.addEventListener("input", setVolume);
  video.addEventListener("error", () => showMessage("영상을 재생할 수 없습니다. 파일 경로와 인코딩을 확인해 주세요."));
  setVolume();
})();
