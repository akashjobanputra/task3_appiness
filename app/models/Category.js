const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: String,
});
categorySchema.virtual("numberOfProducts", {
  ref: "Product",
  localField: "_id",
  foreignField: "categories",
  count: true,
});
categorySchema.set("toObject", { virtuals: true });
categorySchema.set("toJSON", { virtuals: true });

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
