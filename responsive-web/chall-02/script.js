let showButton = document.getElementById("toggle");

let desktopDiv = document.getElementById("desktop");
let mobileDiv = document.getElementById("#moblie");

showButton.addEventListener("click", function () {
  if(desktopDiv.style.display === "flex") {
     desktopDiv.style.display = "none";
     mobileDiv.style.display = "flex";
        
    }else {
        desktopDiv.style.display = "flex";
        mobileDiv.style.display = "none";
    }
});