

let myLibrary = [];

function updateDomWithBookList(){
  if(myLibrary.length){
    
    const cardList = document.querySelector('.card-container');
    cardList.innerHTML = '';
    
    for (let i = 0; i < myLibrary.length; i++){
      let currentBook = myLibrary[i];
    
      const cardDiv = document.createElement('div');
      cardDiv.className = 'book-card';

      const titleDiv = document.createElement('div');
      titleDiv.className = 'title';
      titleDiv.innerHTML = `<span><em>Title:</em></span> ${currentBook.title}`;
      cardDiv.appendChild(titleDiv)
  
  
      const authorDiv = document.createElement('div');
      authorDiv.className = 'author';
      authorDiv.innerHTML = `<span><em>Author:</em> </span> ${currentBook.author}`;
      cardDiv.appendChild(authorDiv);
      


      const nbrPagesDiv = document.createElement('div');
      nbrPagesDiv.className = 'nbr_pages';
      nbrPagesDiv.innerHTML = `<span><em>Nbr Pages:</em> </span> ${currentBook.pages}`;
      cardDiv.appendChild(nbrPagesDiv);

      const alreadyReadBookDiv = document.createElement('div');
      alreadyReadBookDiv.className = 'book_read';
      
      if (currentBook.read){
        alreadyReadBookDiv.innerHTML = `<span><em>Book Read?</em></span> Yes`;
      }else{
        alreadyReadBookDiv.innerHTML = `<span><em>Book Read? No`;
      }
      
      cardDiv.appendChild(alreadyReadBookDiv);

      cardList.appendChild(cardDiv);
    }
  }
}



function Book (title, author, pages, read) {
  /**
   * Input: title: string,     author: string pages: number, read: boolean
   * Output: string
   */
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  this.info = () => {
    let readMsg = null
    if (this.read) {
      readMsg = 'already read'
    } else {
      readMsg = 'not read yet'
    }
    return `${this.title}, by ${this.author} ${this.pages} pages, ${readMsg} `
  }

  return {
    'title': this.title,
    'author': this.author,
    'pages': this.pages,
    'read': this.read
  }
  
}

function addBookToLibrary (formData) {
  /**
   * Adds a book to myLibrary
   */
  let book = null;

  let title = formData.target['title'].value;
  let author = formData.target['author'].value;
  let pages = parseInt(formData.target['nbr_pages'].value);
  let read = false; // by default user hasn't read the book

  if (title , author, pages){
    book = Book(title, author, pages, read);
  }
  if(book){
    myLibrary.push(book);
  }
  updateDomWithBookList();

}

form = document.querySelector('.form-container').addEventListener('submit', (event) =>{
  event.preventDefault();
  addBookToLibrary(event);
});;

//

//const theHobbit = new Book('The Hobbit by', 'J.R.R. Tolkien', 299, false);
