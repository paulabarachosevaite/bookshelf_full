import Book from "../models/Book.js";
import List from "../models/List.js";
import asyncHandler from "express-async-handler";

export const getList = asyncHandler(async (req, res) => {
  const list = await List.findById(req.params.listId).populate("books");
  res.status(200).json(list);
});

export const getAllLists = asyncHandler(async (req, res) => {
  const lists = await List.find({user: req.user.id}).populate({
    path: "user",
    select: "name",
  });
  res.status(200).json(lists);
});

export const createList = asyncHandler(async (req, res) => {
  const lists = await List.find({user: req.user.id}).populate({
    path: "user",
    select: "name",
  });
  res.status(200).json(lists);
});

export const deleteList = asyncHandler(async (req, res) => {
  const list = await List.findById(req.params.listId);
  await list.deleteOne();
  res.status(200).json("List deleted");
});

export const editList = asyncHandler(async (req, res) => {
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
  const updatedList = await global.findByIdAndUpdate(req.params, req.body);
  res.status(200).json(updatedList);
});
