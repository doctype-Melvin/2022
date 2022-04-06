function Book(title, author, pages, status) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = status,
    this.info = function() {
        return `${title} written by ${author}, ${pages} pages, ${status}`
    }
}

const book1 = new Book('Rich Dad, Poor Dad', 'Robert Kiyosaki', 433, 'wanna read it again')
console.log(book1.info())