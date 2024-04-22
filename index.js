const slider = document.getElementById("myRange");

slider.addEventListener("input", function() {
  const value = slider.value;
  const backgroundColor = `rgb(0, 0, ${value * 2.55})`;
  this.style.backgroundColor = backgroundColor;
});
