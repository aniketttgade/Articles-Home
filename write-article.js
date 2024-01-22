// write-articles.js
document.getElementById('articleForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const title = document.getElementById('articleTitle').value;
  const content = document.getElementById('textEditor').innerHTML;

  // Retrieve existing articles or initialize an empty array
  const savedArticles = JSON.parse(localStorage.getItem('articles')) || [];

  // Add the new article to the array
  savedArticles.push({ title, content });

  // Save the updated array back to local storage
  localStorage.setItem('articles', JSON.stringify(savedArticles));

  // Show a confirmation dialog
  const isConfirmed = window.confirm('Your article is submitted! Do you want to log in now?');

  // Redirect to the login page if the user clicks "OK"
  if (isConfirmed) {
    window.location.href = 'login.html';
  }
});
