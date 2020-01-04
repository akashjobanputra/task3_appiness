const mongoose = require("mongoose");
const { createProducts, listCategories } = require("./app");

const db_url = "mongodb://localhost/appiness";

function connect() {
  mongoose.connection
    .on("error", console.error)
    .on("open", () => {
      console.log("DB connected!");
    })
    .on("disconnected", () => console.error("DB disconnected."));
  return mongoose.connect(db_url, {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

connect().then(() => main());

function main() {
  const myArgs = process.argv.slice(2);
  if (myArgs.length === 0) {
    const helpText = `An argument is required to run this application.
      First, data needs to be generated using:
      > node index.js --generateData
      Then for getting information about categories:
      > node index.js --listCategories`;
    console.info(helpText);
    process.exit(0);
  } else if (myArgs[0] === "--generateData") {
    createProducts()
      .then(() => process.exit(0))
      .catch(console.error);
  } else if (myArgs[0] === "--listCategories") {
    listCategories()
      .then(() => process.exit(0))
      .catch(console.error);
  }
}
