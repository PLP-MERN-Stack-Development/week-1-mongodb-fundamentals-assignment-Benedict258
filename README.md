README.md:

markdown
Copy code
# 📚 PLP Bookstore – MongoDB Fundamentals Assignment (Week 1)

This project demonstrates the use of MongoDB for managing and querying a sample bookstore database. The assignment covers CRUD operations, advanced queries, aggregation pipelines, and indexing for performance optimization.

---

## 📦 Project Structure

📁 week-1-mongodb-fundamentals-assignment-Benedict258
│
├── insert_books.js # Script to populate database with book records (mongosh format)
├── queries.js # MongoDB queries (CRUD, advanced queries, aggregation, indexing)
├── README.md # Project documentation (this file)
└── screenshot.png # Screenshot of MongoDB Compass showing the books collection

yaml
Copy code

---

## 🧠 What This Project Covers

### ✅ Tasks Completed:
- MongoDB setup using local instance
- Data inserted into a `books` collection in `plp_bookstore`
- CRUD operations:
  - Insert, read, update, and delete books
- Advanced queries:
  - Filtering, projections, sorting, pagination
- Aggregation pipelines:
  - Average price by genre
  - Most published author
  - Books grouped by publication decade
- Indexing:
  - Single-field and compound indexes
  - Query performance analysis with `explain()`

---

## 🛠️ How to Run

### 1. Start MongoDB server

Make sure your local MongoDB server is running.

### 2. Insert book data

Open your terminal in the project directory and run:

```bash
mongosh --file insert_books.js
This populates the plp_bookstore database with sample books.

3. Use the database in Mongo Shell
Enter the MongoDB shell with:

bash
Copy code
mongosh
Then switch to the database:

js
Copy code
use plp_bookstore
4. Run Queries
You can run queries by:

Copying them from queries.js and pasting them into the shell, or

Executing the file manually inside mongosh (if supported by your environment)

🖼️ Screenshot
A screenshot (screenshot.png) is included showing the books collection inside MongoDB Compass, with sample documents successfully inserted.

✅ Requirements Met
 Inserted 10+ books with all required fields

 Performed CRUD operations using MongoDB shell

 Wrote and saved advanced queries with filters, projection, and pagination

 Built aggregation pipelines to transform and analyze data

 Created indexes and used explain() to verify performance improvements

 Proper file structure and GitHub-ready

🙌 Author
Name: Benedict Isaac
Cohort: PLP MERN Stack Development
Week: 1 – MongoDB Fundamentals

📎 Note
If you're using MongoDB Atlas instead of local MongoDB, replace the connection line in insert_books.js with:

js
Copy code
db = connect("your-atlas-cluster-url/plp_bookstore")