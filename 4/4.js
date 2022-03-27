class Book{
    constructor(title, author, ISBN, numCopies){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    // The get syntax binds an object property to a function that will be called when that property is looked up
    get availability(){
        return this.getAvailability();
    }

    getAvailability = () => {
        if(this.numCopies == 0){
            return `${this.title} is out of stock`;
        }else if(this.numCopies < 10){
            return `${this.title} is low in stock`;
        }else{
            return `${this.title} is in stock`;
        }
    }

    sell = (numCopiesSold = 1) => {
        if( (numCopiesSold > 0) && (this.numCopies-numCopiesSold >= 0) ){
            this.numCopies -= numCopiesSold;
        }
    }

    restock = (numCopiesToRestock = 5) => {
        if(numCopiesToRestock > 0){
            this.numCopies += numCopiesToRestock;
        }
    }
}

class TechnicalBook extends Book{
    constructor(title, author, ISBN, numCopies, edition){
        super(title, author, ISBN, numCopies);
        this.edition = edition;
    }

    getEdition(){
        return `The current version of ${this.title} is, ${this.edition}`;
    }
}

const harryPotter = new Book('Harry Potter and the Sorcerer\'s Stone', 'J. K. Rowling', 1589347, 4);
console.log(harryPotter.availability);

const learnJS = new TechnicalBook('Eloquent JavaScript', 'Marijn Haverbeke', 784512695, 6, 3)
console.log(learnJS.getEdition());