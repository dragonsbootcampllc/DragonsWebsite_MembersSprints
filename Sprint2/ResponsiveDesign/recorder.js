// const video = document.getElementById("videoElement");
// const startRecordButton = document.getElementById("startRecordButton");
// const stopRecordButton = document.getElementById("stopRecordButton");
// const startShareScreenButton = document.getElementById(
//   "startShareScreenButton"
// );
// const stopShareScreenButton = document.getElementById("stopShareScreenButton");

// let screenStream;
// let audioStream;
// let recorder;

// async function startRecording() {
//   try {
//     screenStream = await navigator.mediaDevices.getDisplayMedia({
//       video: true,
//     });
//     audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     const combinedStream = new MediaStream([
//       ...screenStream.getTracks(),
//       ...audioStream.getTracks(),
//     ]);
//     video.srcObject = combinedStream;

//     recorder = new MediaRecorder(combinedStream);
//     const recordedChunks = [];

//     recorder.ondataavailable = (event) => {
//       if (event.data.size > 0) {
//         recordedChunks.push(event.data);
//       }
//     };

//     recorder.onstop = async () => {
//       const blob = new Blob(recordedChunks, { type: "video/webm" });
//       const url = window.URL.createObjectURL(blob);
//       video.src = url;

//       // Prompt the user to choose where to save the recording file.
//       const suggestedName = "screen-audio-recording.webm";
//       const handle = await window.showSaveFilePicker({ suggestedName });
//       const writable = await handle.createWritable();
//       await writable.write(blob);
//       await writable.close();

//       stopRecordButton.disabled = true;
//       startRecordButton.disabled = false;
//       screenStream.getTracks().forEach((track) => track.stop());
//       audioStream.getTracks().forEach((track) => track.stop());
//       video.srcObject = null;

//       console.log("Recording saved!");
//     };

//     recorder.start();
//     startRecordButton.disabled = true;
//     stopRecordButton.disabled = false;
//   } catch (error) {
//     console.error("Error starting recording:", error);
//   }
// }

// startRecordButton.addEventListener("click", startRecording);

// stopRecordButton.addEventListener("click", () => {
//   recorder.stop();
// });

// startShareScreenButton.addEventListener("click", async () => {
//   try {
//     startRecording();
//     startShareScreenButton.disabled = true;
//     stopShareScreenButton.disabled = false;
//     console.log("Your screen is being shared.");
//   } catch (error) {
//     console.error("Error starting screen sharing:", error);
//   }
// });

// stopShareScreenButton.addEventListener("click", () => {
//   screenStream.getTracks().forEach((track) => track.stop());
//   audioStream.getTracks().forEach((track) => track.stop());
//   video.srcObject = null;

//   stopShareScreenButton.disabled = true;
//   startRecordButton.disabled = true;
//   stopRecordButton.disabled = true;
//   console.log("Your screen is not shared anymore.");
// });
