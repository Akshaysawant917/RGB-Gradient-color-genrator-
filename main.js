const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const colorid = document.querySelector(".colorid");

const createcolor = () => {
  let myHexValues = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors = colors + myHexValues[Math.floor(Math.random() * 16)];
  }
  return colors;
};
rgb1 = "#000";
rgb2 = "#fff";

const handleButton1 = () => {
  rgb1 = createcolor();
  console.log(rgb1);
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  colorid.innerHTML = `background-image:linear-gradient(to right,${rgb1},${rgb2})`;
  button1.innerHTML = `${rgb1}`;
};
const handleButton2 = () => {
  rgb2 = createcolor();
  console.log(rgb2);
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  colorid.innerHTML = `background-image:linear-gradient(to right,${rgb1},${rgb2})`;
  button2.innerHTML = `${rgb2}`;
};
colorid.addEventListener("click", () => {
  navigator.clipboard.writeText(colorid.innerHTML);
  alert("text is copied to clipboard");
});

button1.addEventListener("click", handleButton1);
button2.addEventListener("click", handleButton2);
