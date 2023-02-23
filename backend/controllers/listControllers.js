import Book from "../models/Book.js";
import List from "../models/List.js";
import asyncHandler from "express-async-handler";

export const getList = asyncHandler(async (req, res) => {
  const list = await List.findById(req.params.listId).populate("books");
  res.status(200).json(list);
});

export const getAllLists = asyncHandler(async (req, res) => {
  const lists = await List.find({user: req.user.id}).populate("books");
  res.status(200).json(lists);
});

export const createList = asyncHandler(async (req, res) => {
  const list = await List.create({
    user: req.user.id,
    name: req.body.name,
  });
  res.status(200).json(list);
});

export const deleteList = asyncHandler(async (req, res) => {
  const list = await List.findById(req.params.listId);
  await list.deleteOne();
  res.status(200).json("List deleted");
});

export const addBook = asyncHandler(async (req, res) => {
  console.log(req.body.bookId);
  const list = await List.findById(req.params.listId);
  if (!list) {
    res.status(400);
    throw new Error("List not found");
  }
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }
  if (list.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const book = await Book.findById(req.body.bookId);
  if (!book) {
    res.status(400);
    throw new Error("Book not found");
  }

  if (list.books.includes(book._id)) {
    res.status(400);
    throw new Error("Book already exists in list");
  }

  list.books.push(book._id);
  await list.save();

  res.status(200).json(list);
});
