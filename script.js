let myLibrary = [];
let button = document.querySelector('#btn');
button.addEventListener('click', addBookToLibrary);

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let author = document.querySelector('#author').value;
  let title = document.querySelector('#title').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;
  let newBook = new Book(author, title, pages, read);

  console.log(newBook);
  myLibrary.push(newBook);
  console.table(myLibrary);
}
