import { Book } from './book.model';
export declare class BooksService {
    private books;
    private idCounter;
    findAll(): Book[];
    findById(id: number): Book;
    create(bookData: Omit<Book, 'id'>): Book;
    update(id: number, updatedData: Partial<Book>): Book;
    delete(id: number): void;
}
