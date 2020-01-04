# Products and Categories

**NOTE**: Requires mongodb installed locally.

## Task Details:
When listing all categories, print the number of products associated to that category.
- The code should be well structured.
- Must have proper comments
- Should document the workflow and how to run the code

*Descriptions*:
There should be two models products and categories. Each category must have multiple products.
When listing all categories, number of products associated to that category should be returned as response.

## How to Run:
The program takes either of two command line arguments, either `--generateData`, or `--listCategories`.

If no args are provided then a help message is shown.:
```bash
> node index.js
DB connected!
An argument is required to run this application.
      First, data needs to be generated using:
      > node index.js --generateData
      Then for getting information about categories:
      > node index.js --listCategories
```

#### To Generate Sample Data:
```bash
> node index.js --generateData
# ...Generated data will be logged.
```

#### To list categories and the number of projects:
```bash
> node index.js --listCategories
DB connected!
Categories:
========================================
Category: laptop, Number of products: 3.
Category: apple, Number of products: 2.
Category: lenovo, Number of products: 2.
Category: mouse, Number of products: 2.
Category: hp, Number of products: 1.
```

## TODO:
- [ ] Add and orchestrate via API calls instead of command line args.