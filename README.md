# 📘 MongoDB Fundamentals

This document covers the core concepts of MongoDB to build a strong foundational understanding for interviews and real-world usage.

---

## 🔹1 What is NoSQL?

**NoSQL** stands for **"Not Only SQL"**. It refers to databases that store and retrieve data using non-relational models.

### Key Characteristics:
- **Schema-less:** No fixed schema required.
- **Non-relational:** Data stored as key-value pairs, documents, graphs, etc.
- **Horizontally scalable:** Easily scaled by adding more servers.
- **High performance:** Optimized for speed and large datasets.
- **Flexible data formats:** JSON, BSON, key-value, wide-column, graph.

### Types of NoSQL Databases:
| Type          | Examples             | Use Cases                         |
|---------------|----------------------|------------------------------------|
| Document      | MongoDB, CouchDB     | Content management, user profiles  |
| Key-Value     | Redis, DynamoDB      | Caching, session storage           |
| Column-Family | Cassandra, HBase     | Time-series, analytics             |
| Graph         | Neo4j, ArangoDB      | Social networks, recommendations   |

---

## 🔹2 MongoDB Overview

**MongoDB** is the most popular document-based NoSQL database.

### Key Features:
- Stores data as **JSON-like documents (BSON)**
- **Flexible schema** design
- Powerful **query language** and indexing
- **Horizontal scalability** via sharding
- Supports **replication**, **transactions**, and **aggregation pipeline**

---

## 🔹3 Document-Oriented Database Concept

MongoDB stores data in **documents**, which are similar to JSON objects.

### Terminology Mapping:
| SQL                | MongoDB              |
|--------------------|----------------------|
| Table              | Collection           |
| Row                | Document             |
| Column             | Field                |
| Primary Key        | `_id` Field          |

### Example Document:
```json
{
  "_id": "u123",
  "name": "John Doe",
  "email": "john@example.com",
  "roles": ["admin", "user"],
  "address": {
    "city": "New York",
    "zip": "10001"
  }
}
```

### Benefits:
- Flexible structure
- Nested/complex data
- Embeds related data, avoiding expensive JOINs

---

## 🔹4 BSON (Binary JSON)
MongoDB uses BSON (Binary JSON) internally instead of plain JSON.

### Why BSON?
- Binary format is faster to parse and smaller to store
- Supports rich data types:
  - Date
  - ObjectId
  - Decimal128
  - Binary

**BSON = JSON + Extra Data Types + Performance**

---

## 🔹5 Key Differences from Relational Databases

| Feature | SQL (Relational DB) | MongoDB (NoSQL) |
|---------|---------------------|-----------------|
| Data Model | Tables, rows, columns | Collections, documents |
| Schema | Fixed | Dynamic (schema-less) |
| Joins | Yes | No (uses embedding) |
| Scalability | Vertical | Horizontal (via sharding) |
| Transactions | ACID | Now supports multi-document |
| Format | Tabular | BSON (JSON-like) |
| Performance Focus | Consistency | Availability & Speed |
| Ideal Use Case | Finance, ERP | Social, Content, IoT |

<br>
<br>

# 🏗️ MongoDB Database Design & Architecture

This section explains how to structure and model your data effectively in MongoDB to ensure high performance, scalability, and maintainability.

---

## 🔹 Document Structure

In MongoDB, data is stored in **documents** within collections. A document is a JSON-like structure (actually BSON) that can contain:
- Key-value pairs
- Nested documents
- Arrays
- Complex/nested structures

### Example:
```json
{
  "_id": "p101",
  "name": "MacBook Pro",
  "price": 2499,
  "specs": {
    "cpu": "M3 Pro",
    "ram": "16GB",
    "storage": "1TB SSD"
  },
  "tags": ["electronics", "laptop", "apple"]
}
```

---
### Best Practices:
- Design around how data is queried, not how it's stored.
- Keep documents bounded (ideally < 16MB).

---

## 🔹6 Schema Design Principles

MongoDB allows schema flexibility, but good schema design is still crucial.

### Design Goals:
- Match data access patterns
- Minimize I/O operations
- Keep documents small and atomic
- Avoid unnecessary nesting
- Plan for indexing

### Principles:
- Design for application needs, not for storage.
- Use one-to-many and many-to-many patterns wisely.
- Use embedding for data that is frequently accessed together.
- Use referencing for data that is large or reused often.

## 🔹7 Embedding vs Referencing Strategies

MongoDB gives two main strategies to model relationships:

### 📍 Embedding (denormalization)

Store related data within the same document.

#### Example (User with Addresses):
```json
{
  "_id": "u101",
  "name": "Alice",
  "addresses": [
    { "city": "New York", "zip": "10001" },
    { "city": "Chicago", "zip": "60601" }
  ]
}
```

Pros:

    Fast reads (everything in one doc)

    Atomic updates

Cons:

    Document size limits (16MB)

    Data duplication if reused elsewhere

### 🔗 Referencing (normalization)

Store related data in separate documents and use references (manual joins).

#### Example:
```json
// users collection
{ "_id": "u101", "name": "Alice", "address_ids": ["a1", "a2"] }

// addresses collection
{ "_id": "a1", "city": "New York", "zip": "10001" }
```

Pros:

    Avoids duplication

    Reusability

Cons:

    Slower reads (requires multiple queries)

    No built-in joins (manual $lookup or multiple queries)


## 🔹8 Data Modeling Patterns

Common patterns used for MongoDB schema design:

### 1. Extended Reference Pattern

Reference a document but cache some of its fields locally.
The Extended Reference Pattern is a common design pattern in MongoDB (and other NoSQL databases) where you store a reference to another document along with some duplicated fields from that document. This is done to optimize read performance by avoiding the need for a join or a second query to another collection.

In MongoDB, there's no built-in join like in SQL. So if you want to fetch data from multiple related documents (e.g., a post and its author), you typically have two options:

- You need a second query to the users collection to get the author's name.
- You still keep the reference, but also duplicate useful fields like author_name.

```json
{
  "_id": "post123",
  "author_id": "u101",
  "author_name": "Alice" // duplicated for quick access
}
```

### 2. Bucket Pattern

Group time-series or related entries into buckets to reduce document count.
```json
{
  "_id": "2025-05",
  "user_id": "u101",
  "logins": [
    { "date": "2025-05-01", "ip": "1.1.1.1" },
    { "date": "2025-05-02", "ip": "1.1.1.2" }
  ]
}
```

### 3. Outlier Pattern

Store large/rarely used fields in a separate collection to keep main docs small.

```json
// posts collection
{ "_id": "p1", "title": "Quick Guide", "summary": "..." }

// post_details collection
{ "_id": "p1", "full_content": "..." }
```

### 4. Subset Pattern

Store only the most frequently accessed parts of a subdocument.

```json
{
  "_id": "user1",
  "name": "Bob",
  "recent_orders": [
    { "order_id": "o1", "total": 200 },
    { "order_id": "o2", "total": 150 }
  ]
}
```

### ✅ Summary
- Concept	When to Use
- Embedding	Data accessed together, fits within size limits
- Referencing	Reusable data, or too large to embed
- Denormalization	Optimize reads, tolerate duplication
- Extended Reference	Speed + partial duplication of reference fields
- Outlier / Subset	Keep base doc lean and performant
- Bucket Pattern	Efficient time-series or grouped data management
<br>
<br>

# 🔍 MongoDB Advanced Query Techniques

This guide covers advanced query techniques in MongoDB with practical Node.js examples using the native MongoDB driver.

---

## 🔹 Query Operators

MongoDB offers rich **query operators** for filtering data.

### Common Operators:

| Operator        | Description                         | Example                         |
|----------------|-------------------------------------|---------------------------------|
| `$eq`           | Equal to                            | `{ age: { $eq: 25 } }`         |
| `$ne`           | Not equal to                        | `{ status: { $ne: "inactive" }}` |
| `$gt` / `$lt`   | Greater/Less than                   | `{ age: { $gt: 18 } }`         |
| `$in` / `$nin`  | Value in (or not in) list           | `{ city: { $in: ["NY", "LA"] }}` |
| `$and`, `$or`   | Logical AND / OR                    | `{ $or: [{ age: { $gt: 30 } }, { active: true }] }` |

### Node.js Example:
```js
const users = await db.collection("users").find({
  age: { $gt: 25 },
  status: { $ne: "inactive" }
}).toArray();
```

---

## 🔹Complex Filtering

You can combine operators to build complex queries.

### Example: Active users aged between 18 and 30 in selected cities

```js
const users = await db.collection("users").find({
  age: { $gte: 18, $lte: 30 },
  status: "active",
  city: { $in: ["New York", "San Francisco"] }
}).toArray();
```
---
## 🔹10 Projection

Projection controls which fields are returned in the result (like SELECT in SQL).

### Syntax:
```js
.find(query, { projection: { field1: 1, field2: 0 } })
```

  - 1 = include field

  - 0 = exclude field

### Example: Return name and email, exclude _id

```js
const users = await db.collection("users").find({}, {
  projection: { name: 1, email: 1, _id: 0 }
}).toArray();
```
---
## 🔹11 Sorting and Pagination

### Sorting:
```js
.find().sort({ field: 1 })  // 1 = ascending, -1 = descending
```

### Pagination with skip() and limit():

```js
const page = 2;
const limit = 10;

const results = await db.collection("products")
  .find()
  .sort({ price: -1 }) // sort by price descending
  .skip((page - 1) * limit)
  .limit(limit)
  .toArray();
```

## 🔹12 Text Search

MongoDB supports full-text search with indexes.

### 1. Create a text index:
```js
await db.collection("articles").createIndex({ title: "text", content: "text" });
```

### 2. Search:
```js
const results = await db.collection("articles").find({
  $text: { $search: "mongodb performance" }
}).toArray();
```

### 3. Sort by relevance:
```js
const results = await db.collection("articles").find({
  $text: { $search: "mongodb" }
}, {
  projection: { score: { $meta: "textScore" } }
}).sort({ score: { $meta: "textScore" } }).toArray();
```

## 🔹13 Geospatial Queries

MongoDB supports 2D and 2dsphere geospatial indexing for location-based queries.

### 1. Create a 2dsphere index:
```js
await db.collection("places").createIndex({ location: "2dsphere" });
```

Example Document:
```js
{
  "name": "Central Park",
  "location": { "type": "Point", "coordinates": [-73.9654, 40.7829] }
}
```

### 2. Find places near a coordinate:
```js
const nearby = await db.collection("places").find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [-73.97, 40.78]
      },
      $maxDistance: 1000 // in meters
    }
  }
}).toArray();
```

<br>
<br>

# ⚙️ MongoDB Indexing Strategies

Indexes are special data structures that improve the **speed of read operations** by allowing MongoDB to find data faster—just like an index in a book.

---

## 🔹 Why Use Indexes?

Without indexes, MongoDB performs a **collection scan**, which means it checks every document — slow for large collections.

✅ **With indexes:** Faster queries  
❌ **Without indexes:** Slower, full collection scan

---

## 🔹 Index Types

### 1. **Single Field Index**
Index on a single field.

```js
await db.collection("users").createIndex({ email: 1 }); // 1 = ascending
```
Used when querying or sorting by just one field.

### 2. **Compound Index**
Index on multiple fields (ordered).

```js
await db.collection("users").createIndex({ status: 1, createdAt: -1 });
```

Used when your query filters by both fields:

```js
db.users.find({ status: "active" }).sort({ createdAt: -1 });
```

    ⚠️ Field order in compound indexes matters!

### 3. **Multikey Index**

Indexes arrays so that you can query individual items inside them.

```js
// Automatically becomes a multikey index
await db.collection("posts").createIndex({ tags: 1 });

// Example document
{ title: "Node.js Tips", tags: ["node", "backend", "javascript"] }
```

Now you can query:

```js
db.posts.find({ tags: "node" });
```

### 4. **Text Indexes**

Enables full-text search on string fields.

```js
await db.collection("articles").createIndex({ title: "text", body: "text" });
```

A text index allows you to perform full-text search on string fields in MongoDB — for example, searching for a word or phrase inside a document.

It's different from regular indexes:

- Regular indexes support exact match, range queries, sorting
- Text indexes support searching inside strings using `$text: { $search: "..." }

### ✅ How to Create a Text Index (Mongoose)

1. Define It in the Schema:

```js
const UserSchema = new mongoose.Schema({
  title: String,
  content: String
});

// This is a text index
UserSchema.index({ title: 'text', content: 'text' });
```
    This creates a combined text index on both title and content.

### 🔍 How to Use Text Indexes in Queries:

```js
const users = await User.find({
  $text: { $search: "JavaScript backend" }
});
```
This will search for documents where the title or content fields contain "JavaScript" or "backend".

### 5. **Index Performance Optimization**

### 🔍 Check if an index is used:

Use `.explain()` to see whether MongoDB uses an index.

```js
await db.collection("users").find({ email: "a@b.com" }).explain("executionStats");
```

If you see "IXSCAN" (Index Scan), that’s good.
If you see "COLLSCAN" (Collection Scan), your query is slow and needs indexing.

### 6. **❗ When to Create and When to Avoid Indexes**

#### ✅ When to Create:
- Frequently queried fields
- Fields used in sorting or filtering
- Foreign keys (e.g. userId in posts)
- Supporting unique constraints (`{ email: 1 }, { unique: true }`)

#### ❌ When to Avoid:
- Fields rarely used in queries
- Low-cardinality fields (e.g. boolean fields)
- Too many indexes (each index adds write overhead)
- Arrays with many large values (multikey index overhead)