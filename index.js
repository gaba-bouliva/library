
let myLibrary = []
const bookIds = {}
const cardList = document.querySelector('.card-container')

function deleteBook (bookId) {
  myLibrary = myLibrary.filter((book) => book.id !== bookId)
  updateDomWithBookList()
}

function updateReadBook (bookId) {
  myLibrary.forEach(book => {
    if (book.id === bookId) {
      book.read = !book.read
    }
  })
}

function updateDomWithBookList () {
  if (myLibrary.length) {
    cardList.innerHTML = ''

    for (let i = 0; i < myLibrary.length; i++) {
      const currentBook = myLibrary[i]

      const cardDiv = document.createElement('div')
      cardDiv.className = 'book-card'

      const titleDiv = document.createElement('div')
      titleDiv.className = 'title'
      titleDiv.innerHTML = `<span><em>Title:</em></span> ${currentBook.title}`
      cardDiv.appendChild(titleDiv)

      const authorDiv = document.createElement('div')
      authorDiv.className = 'author'
      authorDiv.innerHTML = `<span><em>Author:</em> </span> ${currentBook.author}`
      cardDiv.appendChild(authorDiv)

      const nbrPagesDiv = document.createElement('div')
      nbrPagesDiv.className = 'nbr_pages'
      nbrPagesDiv.innerHTML = `<span><em>Nbr Pages:</em> </span> ${currentBook.pages}`
      cardDiv.appendChild(nbrPagesDiv)

      const alreadyReadBookDiv = document.createElement('div')
      alreadyReadBookDiv.className = 'book_read'
      const toggleReadBookDiv = document.createElement('div')
      toggleReadBookDiv.className = 'toggle-btn'

      if (currentBook.read) {
        toggleReadBookDiv.innerHTML = `<span class="label">Read Book ?</span>
                                       <label for="${currentBook.id}" class="switch">
                                       <input type="checkbox" id="${currentBook.id}" name="read" checked>
                                       <div class="slider"></div></label>`
      } else {
        toggleReadBookDiv.innerHTML = `<span class="label">Read Book ?</span>
                                       <label for="${currentBook.id}" class="switch">
                                       <input type="checkbox" id="${currentBook.id}" name="read">
                                       <div class="slider"></div></label>`
      }

      toggleReadBookDiv.addEventListener('change', () => updateReadBook(currentBook.id))
      cardDiv.appendChild(toggleReadBookDiv)

      const deleteBookBtn = document.createElement('button')
      deleteBookBtn.className = 'delete-book-btn'
      deleteBookBtn.innerText = 'delete'
      deleteBookBtn.addEventListener('click', () => deleteBook(currentBook.id))
      deleteBookBtn.id = currentBook.id

      cardDiv.appendChild(deleteBookBtn)

      cardList.appendChild(cardDiv)
    }
  } else {
    cardList.innerHTML = ''
  }
}

function Book (title, author, pages, read) {
  
  let id = Math.floor(Math.random() * (101 - 1) + 1)

  while (id in bookIds) {
    id = Math.floor(Math.random() * (101 - 1) + 1)
  }
  this.id = id
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

  
}

function addBookToLibrary (formData) {
  /**
   * Adds a book to myLibrary
   */
  let book = null

  const title = formData.target.title.value
  const author = formData.target.author.value
  const pages = parseInt(formData.target.nbr_pages.value)
  const read = false // by default user hasn't read the book

  if (title && author && pages) {
    book = new Book(title, author, pages, read)
  }
  if (book) {
    myLibrary.push(book)
    bookIds[book.id] = book
  }

  updateDomWithBookList()
}

document.querySelector('.form-container').addEventListener('submit', (event) => {
  event.preventDefault()
  addBookToLibrary(event)
})
