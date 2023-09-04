var chatBox = document.getElementById("chatBox");
var videoBox = document.getElementById("videoBox");
const chatButton = document.getElementById("chatButton");

chatButton.addEventListener("click", () => {
  if (chatBox.classList.contains("opacity-0"))
  {
    new Promise((resolve) => {
      chatBox.classList.remove("hidden");
      resolve();
    }).then(() => {
      chatBox.classList.replace("opacity-0", "opacity-100");
      chatBox.classList.remove("translate-x-[150%]");
      videoBox.classList.add("Clg:w-[65%]", "Cmd:w-[55%]");
    })
  }else if(chatBox.classList.contains("opacity-100")) {
    new Promise((resolve) => {
      chatBox.classList.replace("opacity-100", "opacity-0");
      chatBox.classList.add("translate-x-[150%]");
      videoBox.classList.remove("Clg:w-[65%]", "Cmd:w-[55%]");
      setTimeout(() => {
        resolve();
      }, 1050);
    }).then(() => {
      chatBox.classList.add("hidden");
    })
  }
});
