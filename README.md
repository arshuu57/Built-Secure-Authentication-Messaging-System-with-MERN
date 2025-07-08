# 🔐 Built Secure Authentication Messaging System with MERN

A secure full-stack messaging system built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring user authentication, JWT protection messaging. This project demonstrates how to implement secure login/logout and signup functionality with send message .

---

## ✨ Key Features

### 🔒 Authentication
- JWT-based user authentication
- Signup and login/logout with hashed passwords using Bcrypt
- Protected routes for authenticated users
- Session persistence using tokens stored in localStorage

### 💬 Messaging
- Send messages with your name and email

### 🎨 UI/UX
- Clean, responsive UI using Using CSS and Bootstrap frame work
- Error and success toast notifications

---

## 🧰 Tech Stack

**Frontend:**
- React.js
- Axios
- React Router
-  CSS or Bootstrap

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- Bcrypt for hashing passwords
- JSON Web Tokens (JWT) for secure auth
- dotenv for environment variable handling

---

   🔐 Authentication Flow

1. **Signup**
   - Users register with username, email, and password
   - Password is hashed using Bcrypt before saving to MongoDB
   - JWT token is generated and returned to the frontend

2. **Login**
   - User credentials are verified
   - On success, a JWT token is issued
   - Token is stored on the client side and used for protected APIs

3. **Messaging**
   - Authenticated users can send messages
  
  🙋‍♂️ Author
  
Arshad Khan

MERN Stack Developer

📧 arshadkhan73316@gmail.com | 🌐 [Your Portfolio Link]
