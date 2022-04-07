let theLibrary = [];

function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.info = function() {
        return `${title} written by ${author}, ${pages} pages`
    }
}
