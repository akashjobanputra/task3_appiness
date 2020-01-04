const { Category, Product } = require("./models");

async function createProducts() {
  /**
   * Adds Sample Data in the Database.
   */
  const products = [
    {
      name: "Macbook Pro 13",
      price: 119900,
      categories: ["laptop", "apple"],
    },
    {
      name: "Macbook Air",
      price: 99900,
      categories: ["laptop", "apple"],
    },
    {
      name: "Lenovo V310",
      price: 55000,
      categories: ["laptop", "lenovo"],
    },
    {
      name: "HP X1000",
      price: 399,
      categories: ["mouse", "hp"],
    },
    {
      name: "Lenovo N100",
      price: 599,
      categories: ["mouse", "lenovo"],
    },
  ];
  try {
    for (let _p of products) {
      const product = await addProduct(_p);
      console.log(product);
    }
  } catch (error) {
    console.error(error);
  }
}

async function addProduct({ name, price, categories = [] }) {
  /**
   * Adds a single product in database. If category does not exist,
   * it will create new and then use it to add reference.
   */
  try {
    const product = new Product();
    (product.name = name), (product.price = price);
    const result = await product.save();
    for (const category of categories) {
      let _category = await Category.findOne({ name: category.toLowerCase() }).exec();
      if (!_category) {
        console.log("category not found, please create one.");
        _category = new Category();
        _category.name = category;
        _category = await _category.save();
      }
      product.categories.push(_category);
      await product.save();
    }
    return product;
  } catch (error) {
    throw error;
  }
}

function listCategories() {
  /**
   * Fetches the category records while also populating number of products.
   */
  return new Promise((resolve, reject) => {
    Category.find({})
      .populate("numberOfProducts")
      .exec((err, res) => {
        if (err) {
          return reject(err);
        }
        console.log("Categories:");
        console.log("========================================");
        for (let cat of res) {
          console.debug(`Category: ${cat.name}, Number of products: ${cat.numberOfProducts}.`);
        }
        return resolve();
      });
  });
}

module.exports = { createProducts, listCategories };
