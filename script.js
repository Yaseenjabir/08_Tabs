const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const content3 = document.querySelector(".content3");

// console.log(content1,content2,content3);

let flag = false;

function display() {
  content1.style.display = "flex";
  box1.classList.add('active');
}
display();

box1.addEventListener("click", () => {
  if (!box1.classList.contains("active")) {
    box2.classList.remove("active");
    box3.classList.remove("active");
    box1.classList.add("active");
  }
  content1.style.display = "flex";
  content2.style.display = "none";
  content3.style.display = "none";
});

box2.addEventListener("click", () => {
  if (!box2.classList.contains("active")) {
    box1.classList.remove("active");
    box3.classList.remove("active");
    box2.classList.add("active");
  }
  content1.style.display = "none";
  content2.style.display = "flex";
  content3.style.display = "none";
});

box3.addEventListener("click", () => {
  if (!box3.classList.contains("active")) {
    box1.classList.remove("active");
    box2.classList.remove("active");
    box3.classList.add("active");
  }
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "flex";
});
