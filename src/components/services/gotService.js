export default class GotService {
    constructor(){
        this._apiBase = "https://www.anapioficeandfire.com/api";
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok){
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }

        return await res.json();
    }

    getallCharacters = async () => {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter)
    }

    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllHouses = async () => {
        const houses = await this.getResource(`/houses`)
        return houses.map(this._transformHouse)
    }

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`)
        return this._transformHouse(house)
    }

    getAllBooks = async () => {
        const books = await this.getResource(`/books/`)
        return books.map(this._transformBook)
    }

    getBook = async (id) => {
        const books = await this.getResource(`/books/${id}`)
        return this._transformBook(books)
    }

    _transformCharacter(char){
        for(let el in char){
            if (char[el] === ""){
                char[el] = "NO DATA";
            }
        }
        return{
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
            url: char.url
        }
    }

    _transformHouse(house){
        // console.log(house) // Debugging
        for(let el in house){
            if (house[el] == ""){
                house[el] = "NO DATA";
            }
        }

        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles.toString(),
            ancestralWeapons: house.ancestralWeapons,
            url: house.url
        }
    }

    _transformBook(book){
        for(let el in book){
            if (book[el] === ""){
                book[el] = "NO DATA";
            }
        }
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released,
            url: book.url
        }
    }
}