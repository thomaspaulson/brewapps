import Book from "../models/book.js";
import { FileNotError } from "../utils/error.js";

export class BookService {
  constructor() {
    this.model = Book;
  }

  list(req) {
    return this.model.find();
  }

  async get({ params }) {
    const { id } = params;
    const book = await this.model.findById(id);
    if (!book) {
      throw new FileNotError("Book not found");
    }
    return book;
  }

  create(req) {
    const { title, author, summary } = req.body;

    return this.model.create({
      title,
      author,
      summary,
    });
  }

  //
  async update({ body, params }) {
    const { id } = params;
    const { title, author, summary } = body;

    const book = await this.model.findByIdAndUpdate(id, {
      title,
      author,
      summary,
    });

    if (!book) {
      throw new FileNotError("Book not found");
    }

    return book;
  }

  //
  async delete({ params }) {
    const { id } = params;
    const book = await this.model.findByIdAndDelete(id);
    if (!book) {
      throw new FileNotError("Book not found");
    }
    return book;
  }
}
