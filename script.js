// Element declaration**
let myLibrary = [];
let myTable = document.querySelector('#table');
let button = document.querySelector('#btn');
button.addEventListener('click', addBookToLibrary);
let headers = ['Author', 'Title', 'Pages', 'Read'];

// Constructor function**
function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // Selecting and storing form data input with constructor**
  let author = document.querySelector('#author').value;
  let title = document.querySelector('#title').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;
  let newBook = new Book(author, title, pages, read);

  // Pushing data to Library array**
  console.log(newBook);
  myLibrary.push(newBook);
  console.table(myLibrary);

  //Card creation**
  const contentDiv = document.querySelector('#card');

  const cardAuthor = document.createElement('p');
  cardAuthor.textContent = `Author: ${author}`;
  cardAuthor.classList.add('card-info');

  const cardName = document.createElement('p');
  cardName.textContent = `Title: ${title}`;
  cardName.classList.add('card-info');

  const cardPages = document.createElement('p');
  cardPages.textContent = `Pages: ${pages}`;
  cardPages.classList.add('card-info');

  const cardRead = document.createElement('p');
  cardRead.textContent = `Read: ${read}`;
  cardRead.classList.add('card-info');

  const removeBook = document.createElement('button');
  removeBook.textContent = 'Remove';
  removeBook.classList.add('rmv-btn');
  removeBook.querySelector('.rmv-btn');
  removeBook.addEventListener('click', (e) => {
    removeBook.parentElement.remove();
  });

  const card = document.createElement('div');
  card.classList.add('card1');
  contentDiv.appendChild(card);
  card.append(cardAuthor, cardName, cardPages, cardRead, removeBook);
}
