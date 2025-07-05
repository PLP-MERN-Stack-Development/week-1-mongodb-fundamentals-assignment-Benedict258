// find all fiction books
db.books.find({ genre: 'Fiction' });

db.books.find({ published_year: { $gte: 2000 } });

db.books.find({ author: 'George Orwell' });

// Update price of '1984'
db.books.updateOne(
  { title: '1984' },
  { $set: { price: 13.99 } }
);

// Delete the book "Animal Farm"
db.books.deleteOne({ title: 'Animal Farm' });

// In-stock books published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
})

// Only show title, author and price
db.books.find(
    {},
    { title: 1, author: 1, price: 1, _id: 0 }
)

db.books.find().sort({ price: 1 });

// Sort by price: high to low
db.books.find().sort({ price: -1 })

// Page 1: First 5 books
db.books.find().limit(5)

// Page 2: Next 5 books
db.books.find().skip(5).limit(5)

// Average price of books grouped by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
])

// Author with the most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
])


// Books grouped by decade of publication
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          { $toString: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } },
          "s"
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
])

// Create index on title
db.books.createIndex({ title: 1 })

// Compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 })

db.books.find({ author: "George Orwell", published_year: { $gt: 1950 } })

// Explain query with index
db.books.find({ title: "1984" }).explain("executionStats")
