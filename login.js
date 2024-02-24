document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', () => {
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
  
      const notifications = document.querySelector('#notifications');
      const user = JSON.parse(localStorage.getItem(email));
  
      if(!email || !password || !user?.name ) {
        notifications.style.display = 'block';
         notifications.style.color = 'red';
         notifications.innerHTML = 'Campos incompletos o el usuario no existe';
      } else if (user && user.name) {
        notifications.style.display = 'block';
        notifications.style.color = 'green';
        notifications.innerHTML = 'Bienvenido ' + user.name;
      }
    });
  });