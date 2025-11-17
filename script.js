// Select elements
const submitBtn = document.getElementById('submit');
const bookList = document.getElementById('book-list');

// Add book event
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const isbn = document.getElementById('isbn').value.trim();

  // Check for empty inputs
  if (title === '' || author === '' || isbn === '') {
    alert('Please fill all the fields!');
    return;
  }

  // Create new table row
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">Clear</button></td>
  `;

  // Append row to table body
  bookList.appendChild(row);

  // Clear input fields
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
});

// Delete book event
bookList.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove();
  }
});