"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
let BooksService = class BooksService {
    constructor() {
        this.books = [];
        this.idCounter = 1;
    }
    findAll() {
        return this.books;
    }
    findById(id) {
        return this.books.find((book) => book.id === id);
    }
    create(bookData) {
        const newBook = {
            id: this.idCounter++,
            ...bookData,
        };
        this.books.push(newBook);
        return newBook;
    }
    update(id, updatedData) {
        const book = this.findById(id);
        if (book) {
            Object.assign(book, updatedData);
        }
        return book;
    }
    delete(id) {
        this.books = this.books.filter((book) => book.id !== id);
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)()
], BooksService);
//# sourceMappingURL=books.service.js.map