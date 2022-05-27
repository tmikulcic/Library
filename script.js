// Element declaration
let myLibrary = [];
let myTable = document.querySelector('#table');
let button = document.querySelector('#btn');
button.addEventListener('click', addBookToLibrary);
let headers = ['Author', 'Title', 'Pages', 'Read'];

// Constructor function
function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // Selecting and storing form data input with constructor
  let author = document.querySelector('#author').value;
  let title = document.querySelector('#title').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;
  let newBook = new Book(author, title, pages, read);

  // Pushing data to Library array
  console.log(newBook);
  myLibrary.push(newBook);
  console.table(myLibrary);

  //Creating table and filling it with data
  let table = document.createElement('table');
  let headerRow = document.createElement('tr');

  headers.forEach((headerText) => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  });

  table.appendChild(headerRow);

  myLibrary.forEach((book) => {
    let row = document.createElement('tr');
    Object.values(book).forEach((text) => {
      let cell = document.createElement('td');
      let textNode = document.createTextNode(text);
      cell.appendChild(textNode);
      row.appendChild(cell);
    });
    table.appendChild(row);
  });

  myTable.appendChild(table);
}
