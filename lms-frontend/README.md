# 🚀 LMS Frontend (Next.js & Tailwind CSS)

## 📌 Overview
This is the **frontend** for the Learning Management System (LMS) built using **Next.js** and **Tailwind CSS**. It provides a modern and interactive UI for students to browse courses, track progress, and interact with instructors.

---

## 🏗️ Project Structure
```
📦 lms-frontend (Next.js)
 ├── README.md            # Project documentation
 ├── app                  # Main application folder
 │   ├── courses          # Courses page
 │   ├── login            # Login page
 │   ├── favicon.ico      # Favicon for the site
 │   ├── globals.css      # Global styles using Tailwind CSS
 │   ├── layout.tsx       # Layout file for consistent UI structure
 │   ├── page.tsx         # Main entry point for the home page
 ├── eslint.config.mjs    # ESLint configuration for linting
 ├── next-env.d.ts        # TypeScript environment settings
 ├── next.config.ts       # Next.js configuration file
 ├── node_modules/        # Installed dependencies (auto-generated)
 ├── package-lock.json    # Lock file for package versions
 ├── package.json         # Project dependencies and scripts
 ├── postcss.config.js    # PostCSS configuration (used with Tailwind CSS)
 ├── postcss.config.mjs   # Alternative PostCSS configuration
 ├── public/              # Static assets
 │   ├── file.svg
 │   ├── globe.svg
 │   ├── next.svg
 │   ├── vercel.svg
 │   ├── window.svg
 ├── tailwind.config.js   # Tailwind CSS configuration
 ├── tailwind.config.ts   # TypeScript-based Tailwind config (optional)
 ├── tsconfig.json        # TypeScript configuration
```

---

## ⚙️ Tech Stack
- **Frontend Framework:** Next.js (React)
- **UI Styling:** Tailwind CSS
- **State Management:** React Context / Zustand (Optional)
- **API Integration:** Fetching data from FastAPI backend

---

## 🚀 Setup & Installation
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-repo/lms-frontend.git
cd lms-frontend
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Start the Development Server**
```bash
npm run dev
```
📍 **Frontend runs on:** `http://localhost:3000`

---

## 📌 API Integration
This frontend connects to the **FastAPI LMS backend**. Update the API base URL inside `app/courses/page.tsx`:
```ts
const API_BASE_URL = "http://localhost:8000/api/courses";
```
### **Fetching Courses**
Modify `app/courses/page.tsx` to fetch courses from the backend:
```ts
import { useEffect, useState } from 'react';

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/courses")
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      {courses.map(course => (
        <div key={course.id}>{course.title}</div>
      ))}
    </div>
  );
}
```
✅ **Now your frontend can fetch course data from FastAPI!**

---

## 📌 Authentication (Planned)
- **Login & Signup pages** using NextAuth.js
- **JWT Authentication** with FastAPI backend

---

## 🚀 Deployment
### **Vercel Deployment**
```bash
vercel deploy
```

### **Docker Build & Run (Optional)**
```bash
docker build -t lms-frontend .
docker run -p 3000:3000 lms-frontend
```

---

## 🎯 Future Enhancements
- 🔥 **User Authentication (NextAuth.js, Firebase)**
- 🎨 **Improved UI/UX & Animations**
- 📹 **Video Lectures & Course Content**
- 📊 **Progress Tracking Dashboard**

---

## 📌 Contributing
Contributions are welcome! Please submit a pull request or open an issue.

---

## 📄 License
MIT License - Feel free to use and modify this project.

---

## 🤝 Contact
- 💬 Have questions? Reach out at **your-email@example.com**
- 🌍 Visit our website: **[your-lms.com](https://your-lms.com)**

