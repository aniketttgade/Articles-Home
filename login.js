// login.js
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Sample array of users with email and password information
  const users = [
    { email: 'login@1S', password: 'getmein' },
    { email: 'user2@example.com', password: 'password2' },
    // Add more users as needed
  ];

  // Check if the entered credentials match any user in the array
  const matchedUser = users.find(user => user.email === email && user.password === password);

  if (matchedUser) {
    // Redirect to the "View Articles" page on successful login
    window.location.href = 'view-articles.html';
  } else {
    alert('Invalid email or password. Please try again.');
  }
});
