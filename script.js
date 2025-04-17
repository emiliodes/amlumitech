document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".block, .block2");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "scale(1)";
        }
      });
    },
    { threshold: 0.4 }
  ); // Adjust this value for when you want the animation to trigger

  blocks.forEach((block) => {
    observer.observe(block);
  });
});

// document.querySelector(".btn.btn-dark.dropdown-toggle.text-secondary").addEventListener("click", function () {

//   let buttondoNav=document.querySelector(".btn.btn-dark.dropdown-toggle.text-secondary")
//   switch (buttondoNav) {
//     case buttondoNav=document.querySelector(".btn.btn-dark.dropdown-toggle.text-secondary"):
//       document.querySelector(".btn.btn-dark.dropdown-toggle.text-secondary").classList.replace("text-secondary", "text-light");

//       break;

//     case buttondoNav=document.querySelector(".btn.btn-dark.dropdown-toggle.text-light"):
//       document.querySelector(".btn.btn-dark.dropdown-toggle.text-light").classList.replace("text-light", "text-secondary");
//       break;

//     default:console.log(document.querySelector(".btn.btn-dark.dropdown-toggle.text-secondary").classList.replace("text-secondary", "text-light"));
//       break;
//   }
// })

document
  .querySelector(".btn.btn-dark.dropdown-toggle.text-secondary")
  .addEventListener("click", function () {
    let buttondoNav = document.querySelector(
      ".btn.btn-dark.dropdown-toggle.text-secondary"
    );
    if (buttondoNav) {
      document
        .querySelector(".btn.btn-dark.dropdown-toggle.text-secondary")
        .classList.replace("text-secondary", "text-light");
    } else {
      document
        .querySelector(".btn.btn-dark.dropdown-toggle.text-light")
        .classList.replace("text-light", "text-secondary");
    }
  });
