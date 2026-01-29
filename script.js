const startBtn = document.getElementById("startChallenge");
const submitBtn = document.getElementById("submitChallenge");
const challenge = document.getElementById("challenge");

const barFill = document.getElementById("barFill");
const status = document.getElementById("barStatus");
const range = document.getElementById("rangeValue");

startBtn.addEventListener("click", () => {
  challenge.classList.remove("hidden");
  startBtn.style.display = "none";
});

submitBtn.addEventListener("click", () => {
  // Extend bar beyond 7 and turn green
  barFill.style.width = "70%";
  barFill.classList.remove("dull");
  barFill.classList.add("green");

  range.textContent = "7 – 8";

  status.textContent = "Leap Bar restored — consistency looks strong";
  status.classList.remove("dull-text");

  challenge.innerHTML = `
    <h2>Momentum Restored </h2>
    <p>Stay consistent to improve your score.</p>
  `;
});
