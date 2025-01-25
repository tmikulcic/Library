// Function to get books from localStorage (if available)
function getBooksFromStorage() {
  const storedBooks = localStorage.getItem('myLibrary');
  return storedBooks ? JSON.parse(storedBooks) : [];
}

// Function to save books to localStorage
function saveBooksToStorage(books) {
  localStorage.setItem('myLibrary', JSON.stringify(books));
}

const myLibrary = getBooksFromStorage();
const dialog = document.querySelector('#book-dialog');
const openDialogButton = document.querySelector('#open-dialog');
const cancelDialogButton = document.querySelector('#cancel-dialog');
const bookForm = document.querySelector('#book-form');

openDialogButton.addEventListener('click', () => {
  dialog.showModal();
  bookForm.onsubmit = defaultSubmit;
});

cancelDialogButton.addEventListener('click', () => {
  dialog.close();
  bookForm.reset();
});

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function createCard(book) {
  const contentDiv = document.querySelector('#card');

  const createElement = (tag, text, className) => {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) element.classList.add(className);
    return element;
  };

  const card = document.createElement('div');
  card.classList.add('card1');

  const cardAuthor = createElement('p', `${book.author}`, 'card-info');
  const cardTitle = createElement('p', `${book.title}`, 'card-info');
  const cardPages = createElement('p', `${book.pages} pages`, 'card-info');
  const cardRead = createElement('p', `${book.read ? 'Book is read' : 'Book has not been read yet'}`, 'card-info');

  const formButtonsDiv = document.createElement('div');
  formButtonsDiv.classList.add('form-buttons');

  const removeBookButton = createElement('button', 'Remove', 'rmv-btn');
  removeBookButton.addEventListener('click', () => {
    const index = myLibrary.indexOf(book);
    if (index > -1) myLibrary.splice(index, 1);
    saveBooksToStorage(myLibrary); // Save updated library to localStorage
    card.remove();
  });

  const editBookButton = createElement('button', 'Edit', 'edit-btn');
  editBookButton.addEventListener('click', () => {
    document.querySelector('#author').value = book.author;
    document.querySelector('#title').value = book.title;
    document.querySelector('#pages').value = book.pages;
    document.querySelector('#read').checked = book.read;

    // Open the dialog
    dialog.showModal();

    bookForm.onsubmit = (event) => {
      event.preventDefault();
      book.author = document.querySelector('#author').value;
      book.title = document.querySelector('#title').value;
      book.pages = document.querySelector('#pages').value;
      book.read = document.querySelector('#read').checked;

      cardAuthor.textContent = `${book.author}`;
      cardTitle.textContent = `${book.title}`;
      cardPages.textContent = `${book.pages} pages`;
      cardRead.textContent = `${book.read ? 'Book is read' : 'Book has not been read yet'}`;

      saveBooksToStorage(myLibrary); // Save updated library to localStorage
      dialog.close();
      bookForm.reset();
      bookForm.onsubmit = defaultSubmit;
    };
  });

  formButtonsDiv.append(editBookButton, removeBookButton);

  card.append(cardAuthor, cardTitle, cardPages, cardRead, formButtonsDiv);

  contentDiv.appendChild(card);
}

// Default submit function (for adding new book)
const defaultSubmit = (event) => {
  event.preventDefault();

  const author = document.querySelector('#author').value;
  const title = document.querySelector('#title').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;

  const newBook = new Book(author, title, pages, read);
  myLibrary.push(newBook);

  saveBooksToStorage(myLibrary); // Save new book to localStorage
  createCard(newBook);
  dialog.close();
  bookForm.reset();
};

bookForm.onsubmit = defaultSubmit;

// Load books from localStorage when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
  myLibrary.forEach(createCard);
});
