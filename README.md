Simple REST API

This is a simple RESTful API that provides basic CRUD (Create, Read, Update, Delete) operations for managing users.

📌 Features

Create a new user (POST /users)

Retrieve all users (GET /users)

Retrieve a single user by ID (GET /users/:id)

Update a user by ID (PUT /users/:id)

Delete a user by ID (DELETE /users/:id)

🚀 Getting Started

1️⃣ Prerequisites

Ensure you have the following installed:

Node.js (Download from nodejs.org)

MongoDB (Only if you want to use a database)

2️⃣  Running the API

Start the server using:

node user.js

If everything is set up correctly, the server should start on http://localhost:3000

🔄 API Endpoints

➤ Create a User

Endpoint: POST /users

Body:

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}

Response:

{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}

➤ Get All Users

Endpoint: GET /users

Response:

[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25
  }
]

➤ Get a Single User

Endpoint: GET /users/:id

Response:

{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}

➤ Update a User

Endpoint: PUT /users/:id

Body:

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 30
}

Response:

{
  "id": 1,
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 30
}

➤ Delete a User

Endpoint: DELETE /users/:id

Response: 204 No Content

🎯 Next Steps

Add MongoDB support for persistent storage

Implement authentication

Deploy to a cloud service like Heroku or Vercel

🛠 Built With

Node.js

Express.js

