class Movie{
    constructor(title, director, genre, releaseYear, rating){
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating
    }

    get overview(){
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
    }
}

const avengers = new Movie('The Avengers', 'Joss Whedon', 'Sci-fi', 2012, 8.1);
const batman = new Movie('Batman Begins', 'Christopher Nolan', 'Superhero', 2005, 8.3);

console.log(avengers.overview);
console.log(batman.overview);