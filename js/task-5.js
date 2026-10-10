function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', onChangeColorBtn);

function onChangeColorBtn(evt) {
  const randomColor = getRandomHexColor();
  color.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
  console.log(randomColor);
}
