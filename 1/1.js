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
            return 'Out of Stock';
        }else if(this.numCopies < 10){
            return 'Low Stock';
        }else{
            return 'In stock';
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

const harryPotter = new Book('Harry Potter and the Sorcerer\'s Stone', 'J. K. Rowling', 1589347, 4);
console.log(harryPotter.availability);

harryPotter.restock(6);
console.log(harryPotter.availability);

harryPotter.sell(10);
console.log(harryPotter.availability);