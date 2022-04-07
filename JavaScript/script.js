//Library Cards
let card = document.querySelector('.card');
let title = document.querySelector('.title');
let author = document.querySelector('.author');
let pages = document.querySelector('.page');
let read = document.querySelector('#read')

//Input Form
let bookTitle = document.getElementById('title');
let bookAuthor = document.getElementById('author');
let bookPages = document.getElementById('pages')
let button = document.querySelector('.add');
let inputs = document.querySelectorAll('.input')

//Library array
let theLibrary = [];

//Book prototype
function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.info = function() {
        return `${title} written by ${author}, ${pages} pages`
    }
}

//Function to add new books to library
function addToLibrary(){
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value);
    theLibrary.push(newBook);
    return theLibrary
}
button.addEventListener('click', addToLibrary)

//Function to add book info to cards
function showInfo(){
for (let i = 0; i < theLibrary.length; i++) {
    card.textContent = theLibrary[i].info()
}}