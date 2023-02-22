import mongoose from "mongoose";

const BookSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    title: {
      type: String,
      required: [true, "Please add the title"],
    },
    author: {
      type: String,
      required: [true, "Please add the author"],
    },
    description: {
      type: String,
      required: [true, "Please add the description"],
    },
    image: {
      type: String,
    },
    genre: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Book", BookSchema);
