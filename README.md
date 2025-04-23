# Name Generator API

Welcome to the **Name Generator API**! 🎉 This API allows you to generate random names based on categories and genders. You can also add new names to the database. The API is built with the **MERN stack** (MongoDB, Express, React, Node.js) and designed to be flexible and easy to use.

---

## Features 🚀

- **Get all names**: Retrieve all names stored in the database.
- **Filter names**: Filter names by gender and/or category.
- **Get random names**: Fetch a random name from a specific category or gender.
- **Add new names**: Post new names to the database.
- **Available Categories**: Fantasy, Adventure, Mythology, etc.
- **Available Genders**: Male, Female, Unisex

---

## 📡 API Endpoints

### 1. Get All Names
`GET /api/names`

- Retrieves all names from the database.

### 2. Get Names with Filters
`GET /api/names?gender={gender}&category={category}`

- **gender** (optional): male, female, unisex
- **category** (optional): fantasy, mythology, etc.

### 3. Add a New Name
`POST /api/names`

**Request body**:
```json
{
  "name": "John",
  "gender": "male",
  "category": "fantasy"
}
```

- Adds a new name to the database.

### 4. Get Random Name
`GET /api/names/random`

- Returns a random name from the database.

### 5. Get Random Name by Category
`GET /api/names/random/category/{category}`

- Returns a random name from the specified category.

### 6. Get Random Name by Gender
`GET /api/names/random/gender/{gender}`

- Returns a random name from the specified gender.

---

## 🛠️ Technologies Used

- **MongoDB**: Database for storing names.
- **Express.js**: Web framework for the Node.js backend.
- **Node.js**: JavaScript runtime for the server.
- **Mongoose**: MongoDB ODM (Object Data Modeling) for interacting with MongoDB.
- **Tailwind CSS**: For styling the front-end (React).

---

## ⚡ Installation

### 1. Clone the repository
```bash
git clone https://github.com/DarcMattz/name-generator-api.git
```

### 2. Install dependencies
```bash
cd name-generator-api
npm install
```

### 3. Set up your environment
Create a `.env` file in the root directory and add your MongoDB connection URI:

```
MONGO_URI=your_mongo_connection_uri
```

### 4. Start the development server
```bash
npm start
```

Your app will now be running on `http://localhost:5000`.

---

## 🧑‍💻 Contributing

Feel free to fork this repo and create a pull request if you have improvements, bug fixes, or features you want to contribute.

---

## 🤝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙋‍♂️ Contact

- **GitHub**: [DarcMattz](https://github.com/DarcMattz)
- **Email**: johnvirgilcarvajal@gmail.com

