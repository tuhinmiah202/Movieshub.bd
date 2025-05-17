// Main JavaScript for static movie website
document.addEventListener('DOMContentLoaded', function() {
  // DOM references
  const featuredGrid = document.querySelector('.featured-grid');
  const categoryGrid = document.querySelector('.category-grid');
  const upcomingGrid = document.querySelector('.upcoming-grid');
  const categoryButtons = document.querySelector('.category-buttons');
  const modal = document.getElementById('movie-modal');
  const modalDetails = document.getElementById('modal-details');
  const closeBtn = document.querySelector('.close-btn');
  
  // Filter released movies
  const releasedMovies = movies.filter(movie => movie.isReleased);
  const upcomingMovies = movies.filter(movie => !movie.isReleased);
  
  // State management
  let selectedCategory = null;
  
  // Get category by ID
  function getCategoryName(categoryId) {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Unknown';
  }
  
  // Format date
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
  
  // Create movie card HTML
  function createMovieCard(movie) {
    return `
      <div class="movie-card" data-id="${movie.id}">
        <img src="${movie.imageUrl}" alt="${movie.title}" class="movie-image">
        <div class="movie-content">
          <h3 class="movie-title">${movie.title}</h3>
          <div class="movie-rating">
            <i class="fas fa-star"></i> ${movie.rating}
          </div>
          <span class="movie-category">${getCategoryName(movie.categoryId)}</span>
          <p class="movie-description">${movie.description}</p>
          <button class="view-details" data-id="${movie.id}">View Details</button>
        </div>
      </div>
    `;
  }
  
  // Create featured movie card
  function createFeaturedCard(movie) {
    return `
      <div class="movie-card featured-card" data-id="${movie.id}">
        <img src="${movie.imageUrl}" alt="${movie.title}" class="movie-image">
        <div class="movie-content">
          <h3 class="movie-title">${movie.title}</h3>
          <div class="movie-rating">
            <i class="fas fa-star"></i> ${movie.rating}
          </div>
          <span class="movie-category">${getCategoryName(movie.categoryId)}</span>
          <p class="movie-description">${movie.description}</p>
          <button class="view-details" data-id="${movie.id}">View Details</button>
        </div>
      </div>
    `;
  }
  
  // Create upcoming movie card
  function createUpcomingCard(movie) {
    return `
      <div class="movie-card upcoming-card" data-id="${movie.id}">
        <div class="release-date">Coming ${formatDate(movie.releaseDate)}</div>
        <img src="${movie.imageUrl}" alt="${movie.title}" class="movie-image">
        <div class="movie-content">
          <h3 class="movie-title">${movie.title}</h3>
          <span class="movie-category">${getCategoryName(movie.categoryId)}</span>
          <p class="movie-description">${movie.description}</p>
          <button class="view-details" data-id="${movie.id}">View Details</button>
        </div>
      </div>
    `;
  }
  
  // Render featured movies (top 4 latest movies)
  function renderFeaturedMovies() {
    const featuredMovies = [...releasedMovies]
      .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
      .slice(0, 4);
      
    featuredGrid.innerHTML = featuredMovies.map(movie => createFeaturedCard(movie)).join('');
  }
  
  // Render movie grid based on selected category
  function renderMovieGrid() {
    const filteredMovies = selectedCategory !== null
      ? releasedMovies.filter(movie => movie.categoryId === selectedCategory)
      : releasedMovies;
      
    categoryGrid.innerHTML = filteredMovies.map(movie => createMovieCard(movie)).join('');
  }
  
  // Render upcoming movies
  function renderUpcomingMovies() {
    upcomingGrid.innerHTML = upcomingMovies.map(movie => createUpcomingCard(movie)).join('');
  }
  
  // Render category buttons
  function renderCategoryButtons() {
    const categoryBtns = categories.map(category => 
      `<button class="category-btn" data-category="${category.id}">${category.name}</button>`
    ).join('');
    
    // All button is added in HTML
    categoryButtons.innerHTML = document.querySelector('.category-btn[data-category="all"]').outerHTML + categoryBtns;
  }
  
  // Show movie details in modal
  function showMovieDetails(id) {
    const movie = movies.find(movie => movie.id === id);
    if (!movie) return;
    
    modalDetails.innerHTML = `
      <img src="${movie.imageUrl}" alt="${movie.title}" class="modal-image">
      <div class="modal-info">
        <h2>${movie.title}</h2>
        <div class="modal-meta">
          <span>${getCategoryName(movie.categoryId)}</span>
          <span>Released: ${formatDate(movie.releaseDate)}</span>
          <span>Director: ${movie.director}</span>
        </div>
        <div class="modal-rating">
          <i class="fas fa-star"></i> ${movie.rating} / 10
        </div>
        <p class="modal-description">${movie.description}</p>
        <div class="modal-actions">
          <button class="modal-button">
            <i class="fas fa-play"></i> Watch Trailer
          </button>
          <button class="modal-button secondary">
            <i class="fas fa-bookmark"></i> Add to Watchlist
          </button>
        </div>
      </div>
    `;
    
    modal.style.display = 'block';
  }
  
  // Close modal
  function closeModal() {
    modal.style.display = 'none';
  }
  
  // Event Listeners
  
  // Category button click
  categoryButtons.addEventListener('click', function(e) {
    if (e.target.classList.contains('category-btn')) {
      // Remove active class from all buttons
      document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      
      // Add active class to clicked button
      e.target.classList.add('active');
      
      // Update selected category
      selectedCategory = e.target.dataset.category === 'all' 
        ? null 
        : parseInt(e.target.dataset.category);
      
      // Render movie grid with new category
      renderMovieGrid();
    }
  });
  
  // Movie details button click
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('view-details')) {
      const movieId = parseInt(e.target.dataset.id);
      showMovieDetails(movieId);
    }
  });
  
  // Close modal when clicking the X
  closeBtn.addEventListener('click', closeModal);
  
  // Close modal when clicking outside
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Initialize
  renderCategoryButtons();
  renderFeaturedMovies();
  renderMovieGrid();
  renderUpcomingMovies();
});