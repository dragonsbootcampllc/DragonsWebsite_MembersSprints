// Clipbord =================
const clibord_btn = document.getElementById("cliboard_container");
const clibordMessage = document.getElementById("message_cliboard");

clibord_btn.addEventListener("click", () => {
  const link = window.location.href;

  new Promise((resolve) => {
    clibordMessage.classList.remove("hidden");
    setTimeout(() => {
      resolve();
    }, 50);
  }).then(() => {
    return new Promise((resolve) => {
      clibordMessage.classList.replace("opacity-0", "opacity-100"); 
      resolve();
    });
  }).then(()=>{
    return new Promise((resolve) => {
      setTimeout(()=>{
        clibordMessage.classList.replace("opacity-100", "opacity-0");
        resolve();          
      }, 2050);
    });
  }).then(()=>{
    setTimeout(function () {
      clibordMessage.classList.add("hidden");
    }, 2050);
  });
  
  navigator.clipboard.writeText(link);
});
