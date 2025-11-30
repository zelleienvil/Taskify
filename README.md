# ✅ Taskify

Taskify is a modern workspace built to help you stay organized and productive. You can create and manage tasks, set priorities, and track progress. Whether you’re a student, freelancer, or professional, Taskify gives you everything to plan, focus, and achieve more effortlessly.

---

## 👥 Team Project

- Adi Pratama Putra
- Erizka Nia Ramadhani
- Zakki Khairul Abdulaziz

---

## 🚀 Features

- ✅ Register / Login
- 🧾 Create, view, update, and delete tasks
- 🌙 Clean, responsive UI (Tailwind CSS)
- ⚡ Fast SPA experience using React + Inertia.js

---

## 📸 Screenshots

Landing Page:
<img width="800" height="450" alt="image" src="public/images/LandingPage.png" />

Login Page:
<img width="800" height="450" alt="image" src="public/images/LoginPage.png" />

Register Page:
<img width="800" height="450" alt="image" src="public/images/RegisterPage.png" />

Dashboard:
<img width="800" height="450" alt="image" src="public/images/Dashboard.png" />

List:
<img width="800" height="450" alt="image" src="public/images/ListsPage.png"/>

Create New List:
<img width="800" height="450" alt="image" src="public/images/CreateList.png"/>

Task:
<img width="800" height="450" alt="image" src="public/images/TasksPage.png"/>

Create New Task:
<img width="800" height="450" alt="image" src="public/images/CreateTask.png"/>



---

## 🔧 Tech Stack

- **Laravel** 12 (API backend)
- **React** 19 + **Inertia.js** (SPA frontend)
- **Tailwind CSS** (styling)
- **MySQL** (database)

---

## 🔨 Installation

```bash
# 1. Clone the repository
git clone https://github.com/zelleienvil/Taskify.git
cd Taskify

# 2. Install backend dependencies
composer install

# 3. Install frontend dependencies
npm install && npm run dev

# 4. Copy .env file and set keys
cp .env.example .env
php artisan key:generate

# 5. Set up database (MySQL)
php artisan migrate

# 6. Start local servers
php artisan serve
