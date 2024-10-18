import { BooksService } from './books.service';
import { Book } from './book.model';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    findAll(): Book[];
    create(bookData: Omit<Book, 'id'>): Book;
    update(id: string, updatedData: Partial<Book>): Book;
    delete(id: string): void;
}
