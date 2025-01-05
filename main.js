const share = document.querySelector(".card-content-share");

const socialIcons = document.querySelector(".card-content-social-icons"); 


share.addEventListener("click", () => {
  console.log("click");
  socialIcons.classList.toggle("show");
  share.classList.toggle("rotate");
});

