# Mini Message Board

A **simple and interactive message board** web application built with **Express.js** and **EJS** templating.  

Users can view all messages, post new messages, and see them instantly on the homepage.  
This project demonstrates **Express routing**, **EJS views**, **form handling**, and basic front-end styling.

---

## 🛠 Features

- **View messages** on the homepage in a clean, card-style layout  
- **Add new messages** via a user-friendly form  
- Messages include **user name**, **text**, and **timestamp**  
- **Express Routers** used for modular and maintainable routing  
- **Responsive CSS** for mobile and desktop  
- **Modern styling** using Flexbox and shadows for a polished look  

---

## 🔹 How to Use

1. **View messages**  
   - The homepage displays all current messages.

2. **Add a message**  
   - Click the **"New Message"** button to go to the submission form.

3. **Submit the form**  
   - Enter your name and message, then submit.  
   - You will be redirected back to the homepage, and your message will appear instantly.

---

## 🧩 Technologies Used

- **Node.js** – JavaScript runtime  
- **Express.js** – Web framework for routing and middleware  
- **EJS (Embedded JavaScript Templates)** – Dynamic HTML templating  
- **CSS / Flexbox** – Layout and styling  

---

## 🚀 Future Improvements

- Persist messages in a **database** (e.g., MongoDB) instead of an in-memory array  
- Add **user authentication** for secure posting  
- Enable **editing and deleting messages**  
- Implement **real-time updates** with WebSockets (Socket.io)  

---

## 📜 Notes

- Messages are currently stored **in memory** inside `indexRouter.js`.  
- The app uses **Express routers** to separate the homepage and the new message form routes.  
- CSS is modularized into separate files for **homepage** and **form page** for maintainability.  

---

