function createRain() {
  const rain = document.createElement("div");
  rain.classList.add("rain");

  rain.style.left = Math.random() * 100 + "vw";
  rain.style.animationDuration = Math.random() * 2 + 3 + "s";
  rain.innerText = "🔵";

  document.body.appendChild(rain);
}

setInterval(createRain, 100);
