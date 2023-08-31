let clibord_btn = document.querySelector(".cliboard_container button");
let clibordMessage = document.querySelector(".message_cliboard");
clibord_btn.addEventListener("click", () => {
    let link = window.location.href;
    if(clibordMessage.classList.contains("invisible")){
        clibordMessage.classList.replace("invisible","visible");
        setTimeout(function(){
            clibordMessage.classList.replace("visible","invisible");
        },2500)
        navigator.clipboard.writeText(link);
    }
})
