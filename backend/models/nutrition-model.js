const mongoose = require("mongoose");

const nutritionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Removes leading/trailing whitespace
  },
  calories: {
    type: Number,
    required: true,
    min: 0, // Prevent negative values
  },
  protein: {
    type: Number, // Protein content in grams
    required: true,
    min: 0,
  },
  fat: {
    type: Number, // Fat content in grams
    required: true,
    min: 0,
  },
  carbohydrates: {
    type: Number, // Carbs content in grams
    required: true,
    min: 0,
  },
  fiber: {
    type: Number, // Fiber content in grams
    default: 0, // Optional field
    min: 0,
  },
  servingSize: {
    type: String, // Example: "1 cup (240g)"
    required: true,
  },
  category: {
    type: String, // Example: "Fruits", "Vegetables", "Proteins"
    enum: ["Fruits", "Vegetables", "Proteins", "Dairy", "Grains", "Snacks", "Beverages", "Others"],
    default: "Others",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Nutrition = mongoose.model("Nutrition", nutritionSchema);

module.exports = Nutrition;
