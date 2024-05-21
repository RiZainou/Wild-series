// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

// Declare the actions
const getCategories = (req, res) => {
  res.json(categories);
};

/* Here you code */
const getCategoryId = (req, res) => {
  const categoryId = parseInt(req.params.id, 10);
  const category = categories.find((c) => c.id === categoryId);

  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: "Category not found" });
  }
};
// Export them to import them somewhere else

module.exports = { /* Here you export */ getCategories, getCategoryId };
