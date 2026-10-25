// Q 3: Library Management System (Classes + Objects)

class Book {
  constructor(title, author, ISBN, isIssued = false) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = isIssued;
  }

  // Method to issue the book
  issueBook() {
    if (this.isIssued) {
      console.log(`Sorry, "${this.title}" is currently issued to someone else.`);
    } else {
      this.isIssued = true;
      console.log(`Success: "${this.title}" has been issued to you.`);
    }
  }

  // Method to return the book
  returnBook() {
    if (this.isIssued) {
      this.isIssued = false;
      console.log(`Success: "${this.title}" has been returned to the library.`);
    } else {
      console.log(`"${this.title}" was not issued, so it cannot be returned.`);
    }
  }
}

// Create an array of book objects
const library = [
  new Book("The Great Gatsby", "F. Scott Fitzgerald", "978-0743273565"),
  new Book("1984", "George Orwell", "978-0451524935"),
  new Book("To Kill a Mockingbird", "Harper Lee", "978-0060935467", true), // This book is already issued
  new Book("The Catcher in the Rye", "J.D. Salinger", "978-0316769174")
];

// Display all available books (not issued)
function displayAvailableBooks() {
  console.log("--- Available Books ---");
  const availableBooks = library.filter(book => !book.isIssued);
  
  if (availableBooks.length === 0) {
    console.log("No books are currently available.");
  } else {
    availableBooks.forEach(book => {
      console.log(`Title: ${book.title} | Author: ${book.author} | ISBN: ${book.ISBN}`);
    });
  }
  console.log("-----------------------\n");
}

// Allow a user to issue a book by searching ISBN
function issueBookByISBN(searchISBN) {
  console.log(`Attempting to issue book with ISBN: ${searchISBN}...`);
  const book = library.find(b => b.ISBN === searchISBN);

  if (book) {
    book.issueBook();
  } else {
    console.log(`Error: No book found with ISBN ${searchISBN}.`);
  }
  console.log(""); // Empty line for readability
}



// 1. Display initial available books
displayAvailableBooks();

// 2. Issue a book that is available
issueBookByISBN("978-0451524935");

// 3. Try to issue the same book again
issueBookByISBN("978-0451524935");

// 4. Try to issue a book that is already issued (To Kill a Mockingbird)
issueBookByISBN("978-0060935467");

// 5. Return a book
console.log("Returning 1984...");
library[1].returnBook();
console.log("");

// 6. Display available books after transactions
displayAvailableBooks();