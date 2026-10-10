const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', handleChange);

function handleChange(evt) {
  const text = evt.target.value.trim();

  text === ''
    ? (spanEl.textContent = 'Anonymous')
    : (spanEl.textContent = text);
}
