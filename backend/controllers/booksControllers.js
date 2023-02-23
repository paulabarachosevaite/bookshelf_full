import Book from "../models/Book.js";
import asyncHandler from "express-async-handler";

export const getBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.bookId);
  res.status(200).json(book);
});

export const addBook = asyncHandler(async (req, res) => {
  const newBook = await Book.create({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    image: req.body.image,
    genre: req.body.genre,
    user: req.user.id,
    bookId: req.body.bookId,
  });
  res.status(200).json(newBook);
});

export const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.bookId);
  await book.deleteOne();
  res.status(200).json("Book deleted");
});
