const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String },  // blog banner
  category: { type: String, required: true }, // e.g., Mahadev, Krishna
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', blogSchema);
