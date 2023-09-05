const chatBox = document.getElementById("chatBox");
const videoBox = document.getElementById("videoBox");
const chatButton = document.getElementById("chatButton");
const container = document.getElementById("containerVideoSection");

chatButton.addEventListener("click", () => {
  if (chatBox.classList.contains("opacity-0"))
  {
    new Promise((resolve) => {
      chatBox.classList.remove("hidden");
      resolve();
    }).then(() => {
      chatBox.classList.add("h-1/2", "Clg:translate-x-[0%]", "opacity-100");
      chatBox.classList.remove("h-0", "Clg:translate-x-[150%]", "opacity-0");

      container.classList.add("h-[calc((100vw-1rem)*9/8)]", "Clg:h-[calc((60vw-1rem)*9/16)]");
      container.classList.remove("h-[calc((100vw-1rem)*9/16)]", "h-[calc((100vw-1rem)*9/16)]");
      
      videoBox.classList.add("Clg:w-[60%]");
    })
  }else if(chatBox.classList.contains("opacity-100")) {
    new Promise((resolve) => {
      chatBox.classList.add("h-0","Clg:translate-x-[150%]", "opacity-0");
      chatBox.classList.remove("h-1/2", "Clg:translate-x-[0%]", "opacity-100");
      
      container.classList.add("h-[calc((100vw-1rem)*9/16)]", "Clg:h-[calc((100vw-2rem)*9/16)]");
      container.classList.remove("h-[calc((100vw-1rem)*9/8)]", "Clg:h-[calc((60vw-1rem)*9/16)]");

      videoBox.classList.remove("Clg:w-[60%]");

      setTimeout(() => {
        resolve();
      }, 1050);
    }).then(() => {
      chatBox.classList.add("hidden");
    })
  }
});
