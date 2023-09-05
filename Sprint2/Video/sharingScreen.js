const startButton = document.getElementById("startShareButton");
const stopButton = document.getElementById("stopShareButton");
const videoContainer = document.getElementById("shareScreenContainer");

startButton.addEventListener("click", () => {
  new Promise((resolve) => {
    StartShare();
    resolve();
  }).then(() => {
    startButton.classList.add("hidden");
    stopButton.classList.remove("hidden");
  });
});

stopButton.addEventListener("click", () => {
  new Promise((resolve) => {
    StopShare();
    resolve();
  }).then(() => {
    stopButton.classList.add("hidden");
    startButton.classList.remove("hidden");
  })
});

var StartShare = async () => {
  try {
    screenStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
    });
    const videoElement = document.createElement("video");
    videoElement.srcObject = screenStream;
    videoElement.autoplay = true;
    videoElement.id = "shareScreenVideo";

    videoContainer.appendChild(videoElement);
    videoContainer.classList.remove("hidden");

    // Hide the start button and show the stop button
    startButton.style.display = "none";
    stopButton.style.display = "inline-block";

  } catch (error) {
    console.log("Error: ", error);
  }
};

var StopShare = () => {
  if (screenStream) {
    videoContainer.classList.remove("hidden");
    const tracks = screenStream.getTracks();
    tracks.forEach((track) => track.stop());
    screenStream = null;

    // Remove the video element
    const videoElement = document.getElementById("shareScreenVideo");
    if (videoElement) {
      videoElement.remove();
    }

    videoContainer.classList.add("hidden");
  }
};
