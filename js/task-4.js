const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  const email = evt.target.elements.email.value;
  const password = evt.target.elements.password.value;
  if (email.length <= 0 || password.length <= 0) {
    alert('All form fields must be filled in');
    return;
  }

  const info = {
    email: email,
    password: password,
  };
  evt.target.reset();
}
