// view-articles.js
document.addEventListener('DOMContentLoaded', function () {
    const articlesListContainer = document.querySelector('.articles-list');
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
  
    // Retrieve saved articles from local storage
    let savedArticles = JSON.parse(localStorage.getItem('articles')) || [];
  
    // Display the articles
    function displayArticles() {
      articlesListContainer.innerHTML = ''; // Clear previous content
  
      if (savedArticles.length > 0) {
        savedArticles.forEach((article, index) => {
          const articleSection = document.createElement('div');
          articleSection.classList.add('article');
  
          const deleteButton = document.createElement('button');
          deleteButton.classList.add('delete-button');
          deleteButton.innerHTML = '🗑️'; // Trash can emoji
          deleteButton.addEventListener('click', () => handleDelete(index));
  
          const downloadButton = document.createElement('button');
          downloadButton.classList.add('download-button');
          downloadButton.innerHTML = '⬇️'; // Download icon
          downloadButton.addEventListener('click', () => handleDownload(article));
  
          const titleElement = document.createElement('h2');
          titleElement.textContent = article.title;
  
          const contentElement = document.createElement('p');
          contentElement.textContent = article.content;
  
          articleSection.appendChild(deleteButton);
          articleSection.appendChild(downloadButton);
          articleSection.appendChild(titleElement);
          articleSection.appendChild(contentElement);
  
          articlesListContainer.appendChild(articleSection);
  
          // Add a separator line between articles, except for the last one
          if (index < savedArticles.length - 1) {
            const separator = document.createElement('hr');
            articlesListContainer.appendChild(separator);
          }
        });
      } else {
        articlesListContainer.innerHTML = '<p>No articles available</p>';
      }
    }
  
    // Handle delete button click
    function handleDelete(index) {
      savedArticles.splice(index, 1);
      localStorage.setItem('articles', JSON.stringify(savedArticles));
      displayArticles(); // Update UI
    }
  
    // Handle download button click
    function handleDownload(article) {
      const blob = new Blob([`Title: ${article.title}\n\n${article.content}`], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${article.title}.txt`;
      link.click();
    }
  
    // Toggle search input on search button click
    searchButton.addEventListener('click', function () {
      searchInput.classList.toggle('active');
      if (searchInput.classList.contains('active')) {
        searchInput.focus();
      } else {
        searchInput.value = '';
        displayArticles(); // Reset the displayed articles
      }
    });
  
    // Handle search input change
    searchInput.addEventListener('input', function () {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredArticles = savedArticles.filter(
        article => article.title.toLowerCase().includes(searchTerm) || article.content.toLowerCase().includes(searchTerm)
      );
      displayFilteredArticles(filteredArticles);
    });
  
    // Display filtered articles
    function displayFilteredArticles(filteredArticles) {
      articlesListContainer.innerHTML = ''; // Clear previous content
  
      if (filteredArticles.length > 0) {
        filteredArticles.forEach((article, index) => {
          const articleSection = document.createElement('div');
          articleSection.classList.add('article');
  
          const deleteButton = document.createElement('button');
          deleteButton.classList.add('delete-button');
          deleteButton.innerHTML = '🗑️'; // Trash can emoji
          deleteButton.addEventListener('click', () => handleDelete(index));
  
          const downloadButton = document.createElement('button');
          downloadButton.classList.add('download-button');
          downloadButton.innerHTML = '⬇️'; // Download icon
          downloadButton.addEventListener('click', () => handleDownload(article));
  
          const titleElement = document.createElement('h2');
          titleElement.textContent = article.title;
  
          const contentElement = document.createElement('p');
          contentElement.textContent = article.content;
  
          articleSection.appendChild(deleteButton);
          articleSection.appendChild(downloadButton);
          articleSection.appendChild(titleElement);
          articleSection.appendChild(contentElement);
  
          articlesListContainer.appendChild(articleSection);
  
          // Add a separator line between articles, except for the last one
          if (index < filteredArticles.length - 1) {
            const separator = document.createElement('hr');
            articlesListContainer.appendChild(separator);
          }
        });
      } else {
        articlesListContainer.innerHTML = '<p>No matching articles</p>';
      }
    }
  
    displayArticles(); // Initial display
  });
  