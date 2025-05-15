# GymBeam Case Study – React Developer

This is a simple e-commerce web application built as part of a case study for the React Developer position at GymBeam. The application allows customers to log in and browse products from the Fake Store API.

## 🔧 Technologies Used

- [React](https://react.dev/) (via Next.js)
- [Next.js 15 (App Router)](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

## ▶️ How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/Joxer-Mocny/trcka-gymbeam
cd gymbeam-case-study

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.
📸 Screenshots
Screenshots are located in the screenshots/ folder and include key moments of the application:

Login screen

Product listing

Product detail

Error state (e.g. invalid product ID)

Mobile view

Footer

## 🌐 Live Demo

You can view the live version here:  
👉 [https://trcka-gymbeam.onrender.com](https://trcka-gymbeam.onrender.com)


## 🚀 Features

- 🔐 **Login** screen using localStorage to simulate authentication
- 🛍️ **Product listing** page (requires login)
- 📦 **Product detail** page (protected)
- 🔓 **Logout** button with state reset
- ⚙️ Fully responsive layout (mobile & desktop)
- 🎨 Styled in line with GymBeam branding (orange, black, white)
- 📡 Data from [Fake Store API](https://fakestoreapi.com/)

## 🧠 Notes on Implementation

- Shared `Button` component is used for both login and logout buttons to ensure consistent style and behavior
- The app uses `localStorage` to simulate login/logout without backend
- Routes `/products` and `/products/[id]` are protected and redirect if unauthenticated
- Styling is fully handled via Tailwind utility classes

## 📁 Folder Structure

```
src/
├── app/
│   ├── page.tsx         # Login page
│   ├── products/
│   │   ├── page.tsx     # Product list
│   │   └── [id]/page.tsx# Product detail
│   └── layout.tsx       # Shared layout with Navbar
├── components/
│   └── Navbar.tsx       # Top navigation with logout
└── styles/
    └── globals.css
```

## 👨‍💻 Author

Filip Trcka  
Contact: filiptrcka@gmail.com  
Submission: GymBeam Case Study (May 2025)