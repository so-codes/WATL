import promptSync = require('prompt-sync');
const prompt = promptSync();
class Book {
    bookId:number;
    bookName:string;
    author:string;
    ISBN:number;
    publisher:string;

    constructor(id:number,name:string,auth:string,isbn:number,publisher:string){
        this.bookId = id;
        this.bookName = name;
        this.author = auth;
        this.ISBN = isbn;
        this.publisher = publisher;
    }

    displayBook(){
        console.log('---------------- Displaying Book Details ----------------'); 
        console.log(`Book ID : ${this.bookId}`);
        console.log(`Book Name : ${this.bookName}`);
        console.log(`Book author : ${this.author}`);
        console.log(`Book ISBN : ${this.ISBN}`);
        console.log(`Book Publisher : ${this.publisher}`);
        console.log('----------------------------------------------------------');        
    }
}

class Library{
    self :Book[] = [];

    addBook(book:Book){
        this.self.push(book);
    }

    displayBooks(){
        this.self.forEach((book)=>{
            console.log('--------------------------------');
            console.log(`Book ID : ${book.bookId}`);
            console.log(`Book Name : ${book.bookName}`);
            console.log(`Book author : ${book.author}`);
            console.log(`Book ISBN : ${book.ISBN}`);
            console.log(`Book Publisher : ${book.publisher}`);
            console.log('--------------------------------');
        });
    }

    searchBook(id:number){
        this.self.forEach((book)=>{
            if(book.bookId === id){
                book.displayBook();
            }
            else{
                console.log(`No book found for id : ${id}`);
            }
        });
    }
}

let loop : boolean = true;
let library : Library =  new Library();
while(loop){
    let ch:number;
    console.log('1. Enter book into library');
    console.log('2. Display All Books in library');
    console.log('3. Search Book by Book ID');
    console.log('4. Exit library');
    ch = parseInt(prompt('Enter the choice : '));

    switch(ch){
        case 1: 
            let id : number = parseInt(prompt('Enter the book ID : '));
            let name : string = prompt('Enter the book Name : ');
            let author : string = prompt('Enter the book author : ');
            let isbn : number = parseInt(prompt('Enter the 13 digit ISBN number : '));
            let publisher : string = prompt('Enter the publisher of the book : ');

            let newBook : Book = new Book(id,name,author,isbn,publisher);
            library.addBook(newBook);

            console.log('Added book to library');
            break;
        case 2: 
            library.displayBooks();
            break;
        case 3 : 
            let searchId : number = parseInt(prompt('Enter the book ID : '));
            library.searchBook(searchId);
            break;
        case 4 : 
            loop = false;
            break;
    }
}