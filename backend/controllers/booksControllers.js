import Book from "../models/Book.js";
import asyncHandler from "express-async-handler";

export const getUserBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({user: req.user.id});
  res.status(200).json(books);
});

export const addBook = asyncHandler(async (req, res) => {
  const book = await Book.create({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    image: req.body.image,
    genre: req.body.genre,
    user: req.user.id,
  });
  res.status(200).json(book);
});
