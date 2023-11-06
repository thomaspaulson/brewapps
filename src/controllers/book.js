import { BookService } from "../services/BookService.js";
import { errorResponse } from "../utils/error.js";
//
export const list = async (req, res) => {
  try {
    const bookService = new BookService();
    const books = await bookService.list(req);
    return res.json(books);
  } catch (err) {
    return errorResponse(err, res);
  }
};

//
export const get = async (req, res) => {
  try {
    const bookService = new BookService();
    const book = await bookService.get(req);
    return res.json(book);
  } catch (err) {
    return errorResponse(err, res);
  }
};

//
export const create = async (req, res) => {
  try {
    const bookService = new BookService();
    const book = await bookService.create(req);
    return res.json(book);
  } catch (err) {
    return errorResponse(err, res);
  }
};

//
export const update = async (req, res) => {
  try {
    const bookService = new BookService();
    await bookService.update(req);
    return res.json({
      message: "Book details updated!",
    });
  } catch (err) {
    return errorResponse(err, res);
  }
};

export const destroy = async (req, res) => {
  try {
    const bookService = new BookService();
    await bookService.delete(req);
    return res.json({
      message: "Book deleted!",
    });
  } catch (err) {
    return errorResponse(err, res);
  }
};
