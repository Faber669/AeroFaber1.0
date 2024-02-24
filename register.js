document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', () => {
      const name = document.querySelector('#username').value;
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;

      const notifications = document.querySelector('#notifications');

      if(!name || !email || !password ) {
        notifications.style.display = 'block';
         notifications.style.color = 'red';
         notifications.innerHTML = 'Campos incompletos';
      } else {
        localStorage.setItem(email, JSON.stringify({name, email, password}));
        notifications.style.display = 'block';
        notifications.style.color = 'green';
        notifications.innerHTML = 'Registro exitoso';
      }
    });
});