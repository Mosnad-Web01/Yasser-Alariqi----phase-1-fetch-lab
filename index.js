function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((data) => {
      renderBooks(data);
    });
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


// print the 5th book in the series 
let myBookArray = [];
function FivethBook() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((data) => {
      data.forEach(book => {
        myBookArray.push(book)
        
      })
      console.log(myBookArray[4].name);
    });
}
FivethBook()
//The total number of pages of all the books

let totalPagesNumber = 0;
function totalPages() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((data) => {
      data.forEach(book => {
        totalPagesNumber += book.numberOfPages
      })
      console.log(totalPagesNumber);
    });
}

totalPages()