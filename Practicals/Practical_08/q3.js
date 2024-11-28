"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var Book = /** @class */ (function () {
    function Book(id, name, auth, isbn, publisher) {
        this.bookId = id;
        this.bookName = name;
        this.author = auth;
        this.ISBN = isbn;
        this.publisher = publisher;
    }
    Book.prototype.displayBook = function () {
        console.log('---------------- Displaying Book Details ----------------');
        console.log("Book ID : ".concat(this.bookId));
        console.log("Book Name : ".concat(this.bookName));
        console.log("Book author : ".concat(this.author));
        console.log("Book ISBN : ".concat(this.ISBN));
        console.log("Book Publisher : ".concat(this.publisher));
        console.log('----------------------------------------------------------');
    };
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.self = [];
    }
    Library.prototype.addBook = function (book) {
        this.self.push(book);
    };
    Library.prototype.displayBooks = function () {
        this.self.forEach(function (book) {
            console.log('--------------------------------');
            console.log("Book ID : ".concat(book.bookId));
            console.log("Book Name : ".concat(book.bookName));
            console.log("Book author : ".concat(book.author));
            console.log("Book ISBN : ".concat(book.ISBN));
            console.log("Book Publisher : ".concat(book.publisher));
            console.log('--------------------------------');
        });
    };
    Library.prototype.searchBook = function (id) {
        this.self.forEach(function (book) {
            if (book.bookId === id) {
                book.displayBook();
            }
            else {
                console.log("No book found for id : ".concat(id));
            }
        });
    };
    return Library;
}());
var loop = true;
var library = new Library();
while (loop) {
    var ch = void 0;
    console.log('1. Enter book into library');
    console.log('2. Display All Books in library');
    console.log('3. Search Book by Book ID');
    console.log('4. Exit library');
    ch = parseInt(prompt('Enter the choice : '));
    switch (ch) {
        case 1:
            var id = parseInt(prompt('Enter the book ID : '));
            var name_1 = prompt('Enter the book Name : ');
            var author = prompt('Enter the book author : ');
            var isbn = parseInt(prompt('Enter the 13 digit ISBN number : '));
            var publisher = prompt('Enter the publisher of the book : ');
            var newBook = new Book(id, name_1, author, isbn, publisher);
            library.addBook(newBook);
            console.log('Added book to library');
            break;
        case 2:
            library.displayBooks();
            break;
        case 3:
            var searchId = parseInt(prompt('Enter the book ID : '));
            library.searchBook(searchId);
            break;
        case 4:
            loop = false;
            break;
    }
}
