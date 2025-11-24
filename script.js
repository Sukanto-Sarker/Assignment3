// ========== SECTION 1 ========== //
const text1 = "A Full Stack Web Developer";
const span1 = document.getElementById("typed");
let index1 = 0;

function typeWriter1() {
  if (index1 < text1.length) {
    span1.textContent += text1.charAt(index1);
    index1++;
    setTimeout(typeWriter1, 100);
  } else {
    setTimeout(() => {
      span1.textContent = "";
      index1 = 0;
      typeWriter1();
    }, 2000);
  }
}
typeWriter1();


// ========== SECTION 2 ========== //
const text2 = "FULL STACK WEB DEVELOPER";
const span2 = document.getElementById("typed-text");
let index2 = 0;

function typeWriter2() {
  if (index2 < text2.length) {
    span2.textContent += text2.charAt(index2);
    index2++;
    setTimeout(typeWriter2, 100);
  } else {
    setTimeout(() => {
      span2.textContent = "";
      index2 = 0;
      typeWriter2();
    }, 2000);
  }
}
typeWriter2();


// ========== MOBILE MENU ========== //
const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
