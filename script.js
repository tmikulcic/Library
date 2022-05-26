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
  let read = document.querySelector('#read');
  console.log(author);
  console.log(title);
  console.log(pages);
  console.log(read.checked);

  myLibrary.push({ author, title, pages, read });
  console.table(myLibrary);
}
