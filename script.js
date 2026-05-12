const sections = [
  { text: "When I take you to the Valley,", top: "80vh", left: "8vw", rotate: -7 },
  { text: "you'll see the blue hills on the left...", top: "180vh", right: "12vw", rotate: 4 },
  { text: "and the blue hills on the right.", top: "260vh", left: "20vw", rotate: -3 },
  { text: "the rainbow and the vineyards under the rainbow...", top: "360vh", right: "8vw", rotate: 6 },
  { text: "late in the rainy season.", top: "460vh", left: "30vw", rotate: -8 },
  { text: "and maybe you'll say,", top: "560vh", right: "22vw", rotate: 5 },

  { text: "'There it is, that's it!'", top: "650vh", left: "12vw", rotate: 10, big: true },

  { text: "But I'll say...", top: "740vh", right: "14vw", rotate: -5 },

  { text: "'A little farther.'", top: "820vh", left: "35vw", rotate: 7, big: true },

  { text: "We'll go on, I hope...", top: "920vh", right: "20vw", rotate: -6 },

  { text: "and you'll see the roofs of the little towns...", top: "1020vh", left: "10vw", rotate: 2 },

  { text: "and the hillsides yellow with wild oats.", top: "1120vh", right: "10vw", rotate: -4 },

  { text: "a buzzard soaring...", top: "1220vh", left: "28vw", rotate: 8 },

  { text: "and a woman singing by the shadows of a creek in the dry season.", top: "1320vh", right: "15vw", rotate: -7 },

  { text: "and maybe you'll say...", top: "1420vh", right: "25vw", rotate: -3 },

  { text: "'Let's stop here, this is it!'", top: "1520vh", left: "12vw", rotate: 9, big: true },

  { text: "But I'll say...", top: "1620vh", right: "18vw", rotate: -6 },

  { text: "'A little farther yet.'", top: "1720vh", left: "32vw", rotate: 6, big: true },

  { text: "We'll go on...", top: "1820vh", right: "12vw", rotate: -5 },

  { text: "and you'll hear the quail calling on the mountain...", top: "1920vh", left: "8vw", rotate: 4 },

  { text: "by the springs of the river.", top: "2020vh", right: "20vw", rotate: -8 },

  { text: "and looking back you'll see the river...", top: "2120vh", left: "20vw", rotate: 5 },

  { text: "running downward through the wild hills behind, below.", top: "2220vh", right: "10vw", rotate: -4 },

  { text: "and perhaps you'd say...", top: "2420vh", right: "28vw", rotate: -6 },

  { text: "'Isn't that the Valley?'", top: "2520vh", left: "15vw", rotate: 8, big: true },

  { text: "And all I will be able to say is...", top: "2620vh", right: "10vw", rotate: -4 },

  { text: "Drink this water of the spring...", top: "2720vh", left: "12vw", rotate: 6, big: true },

  { text: "rest here awhile.", top: "2820vh", right: "22vw", rotate: -9, big: true },

  { text: "we have a long way yet to go...", top: "2920vh", left: "18vw", rotate: 4, big: true },

  { text: "and I can't go without you.", top: "3020vh", center: true }
];


const container = document.getElementById("container");


// Create quotes
sections.forEach(section => {

  const div = document.createElement("div");

  div.classList.add("quote");

  if (section.big) {
    div.classList.add("big");
  }

  div.innerText = section.text;

  div.style.top = section.top;


  if (section.center) {

    div.style.left = "50%";
    div.style.transform = "translateX(-50%)";
    div.style.textAlign = "center";

  } else {

    if (section.left) {
      div.style.left = section.left;
    }

    if (section.right) {
      div.style.right = section.right;
    }

    div.style.rotate = `${section.rotate}deg`;
  }


  container.appendChild(div);

});


// Create heart
const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "♥";

heart.style.top = "3080vh";

container.appendChild(heart);


// Fade observer
const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }

  });

}, {
  threshold: 0.05,
  rootMargin: "-10% 0px -10% 0px"
});


// Observe quotes
document.querySelectorAll(".quote").forEach(el => {
  observer.observe(el);
});