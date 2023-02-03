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
}

const theHobbit = new Book('The Hobbit by', 'J.R.R. Tolkien', 299, false)
