const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  const email = evt.target.elements.email.value.trim();
  const password = evt.target.elements.password.value.trim();
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  const info = {
    email,
    password,
  };
  evt.target.reset();
  console.log(info);
}
