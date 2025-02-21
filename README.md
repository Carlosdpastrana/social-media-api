
🚀 Social Media API

📚 Description

This is a backend API for a social networking application where users can share thoughts, react to friends' thoughts, and manage a friend list.The API is built using Express.js for routing, a MongoDB database, and the Mongoose ODM.

🎯 Features

User Management:

Create, update, delete users.

Add and remove friends from a user's friend list.

Thoughts (Posts):

Users can create, update, and delete thoughts.

Users can react to thoughts and remove reactions.

Reactions (Replies)

Add reactions to thoughts.

Remove reactions from thoughts.

🛠 Technologies Used

Node.js - Backend runtime

Express.js - Routing

MongoDB - NoSQL Database

Mongoose - ODM (Object Data Modeling)

Insomnia - API testing

📂 File Structure

social-media-api
│— models/
│   ├── User.js
│   ├── Thought.js
│   └── Reaction.js
│
│— routes/
│   ├── userRoutes.js
│   └── thoughtRoutes.js
│
│— server.js
│— .env
│— package.json
│— README.md

🚀 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/Carlosdpastrana/social-media-api.git
cd social-media-api

2️⃣ Install Dependencies

npm install

3️⃣ Setup Environment Variables

Create a .env file in the root directory and add:

MONGODB_URI=mongodb://127.0.0.1:27017/social-media-api
PORT=3000

4️⃣ Start the Server

node server.js

👉 You should see:

MongoDB connected
Server running on port 3000

📡 API Endpoints

🔹 User Routes

Method

Endpoint

Description

GET

/api/users

Get all users

GET

/api/users/:userId

Get user by ID

POST

/api/users

Create a new user

PUT

/api/users/:userId

Update user by ID

DELETE

/api/users/:userId

Delete user by ID

POST

/api/users/:userId/friends/:friendId

Add friend

DELETE

/api/users/:userId/friends/:friendId

Remove friend

🔹 Thought Routes

Method

Endpoint

Description

GET

/api/thoughts

Get all thoughts

GET

/api/thoughts/:thoughtId

Get a thought by ID

POST

/api/thoughts

Create a new thought

PUT

/api/thoughts/:thoughtId

Update a thought by ID

DELETE

/api/thoughts/:thoughtId

Delete a thought by ID

🔹 Reaction Routes

Method

Endpoint

Description

POST

/api/thoughts/:thoughtId/reactions

Add a reaction to a thought

DELETE

/api/thoughts/:thoughtId/reactions/:reactionId

Remove a reaction from a thought

📺 Walkthrough Video

📉 Click here to watch the full API demonstration()

📜 License

This project is MIT licensed.

🔥 Author

Carlos Pastrana🌐 GitHub📧 Email: carlosdpastrana@icloud.com