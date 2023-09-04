// Clipbord =================
let clibord_btn = document.getElementById("cliboard_container");
let clibordMessage = document.getElementById("message_cliboard");

clibord_btn.addEventListener("click", () => {
  let link = window.location.href;

  new Promise((resolve) => {
    clibordMessage.classList.remove("hidden");
    resolve();
  }).then(() => {
    return new Promise((resolve) => {
      setTimeout(()=>{
        clibordMessage.style.opacity = 1; 
        resolve();          
      }, 100);
    });
  }).then(()=>{
    return new Promise((resolve) => {
      setTimeout(()=>{
        clibordMessage.style.opacity = 0;
        resolve();          
      }, 2050);
    });
  }).then(()=>{
    setTimeout(function () {
      clibordMessage.classList.add("hidden");
    }, 2150);
  });
  
  navigator.clipboard.writeText(link);
});
