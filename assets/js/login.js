document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login_form');
  loginForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    location.href = '/homeoficial.html'
  });
});
