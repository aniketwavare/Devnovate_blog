# 📖 Devnovate Blog -- MERN Stack Project

A full-stack blogging platform built using the **MERN stack (MongoDB,
Express.js, React.js, Node.js)**.\
Users can write blogs, explore trending posts, and admins can manage
published content.

------------------------------------------------------------------------

## 🚀 Features

-   ✍️ Create and publish blog posts\
-   🔎 Search and explore trending blogs\
-   👤 User profiles for authors\
-   🛠️ Admin panel for approving/rejecting blogs\
-   ❤️ Like & comment system (future feature)\
-   🌐 REST API powered by Express + MongoDB

------------------------------------------------------------------------

## 🏗️ Tech Stack

-   **Frontend**: React.js + TailwindCSS\
-   **Backend**: Node.js + Express.js\
-   **Database**: MongoDB (local or Atlas)\
-   **State Management**: React Hooks\
-   **API Client**: Axios

------------------------------------------------------------------------

## 📂 Project Structure

    devnovate_blog/
    │── backend/               # Express + MongoDB (API)
    │   ├── models/            # Mongoose schemas
    │   ├── routes/            # API routes
    │   ├── controllers/       # Business logic
    │   ├── server.js          # Entry point
    │   ├── .env               # Environment variables
    │   └── package.json       

    │── frontend/              # React app (UI)
    │   ├── src/
    │   │   ├── components/    # Navbar, BlogCard, BlogForm, etc.
    │   │   ├── pages/         # Home, Admin, CreateBlog
    │   │   ├── api.js         # Axios API helper
    │   │   ├── App.js         
    │   │   └── index.js       
    │   └── package.json       

    │── README.md              # Project documentation

------------------------------------------------------------------------

## ⚙️ Installation

### 1. Clone Repo

``` bash
git clone https://github.com/yourusername/devnovate_blog.git
cd devnovate_blog
```

### 2. Backend Setup

``` bash
cd backend
npm install
```

Create a `.env` file:

``` env
MONGO_URI=mongodb://127.0.0.1:27017/devnovate
PORT=5000
```

Start backend:

``` bash
npm start
```

### 3. Frontend Setup

``` bash
cd ../frontend
npm install
npm start
```

------------------------------------------------------------------------

## 🌐 API Endpoints

-   `GET /api/blogs` → Get all blogs\
-   `POST /api/blogs` → Create new blog\
-   `PUT /api/blogs/:id` → Update blog\
-   `DELETE /api/blogs/:id` → Delete blog

------------------------------------------------------------------------

## 📝 Future Enhancements

-   🔐 JWT Authentication (login/signup)\
-   📸 Image uploads (Cloudinary / Multer)\
-   💬 Real comments system\
-   📊 Analytics for blog views

------------------------------------------------------------------------

## 👨‍💻 Author

**Shree (Devnovate Project)**\
Feel free to contribute or suggest improvements 🚀
