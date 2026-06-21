# Soccer Bridge USA - React + Vite

This project is a React-based landing page for **Soccer Bridge USA**, a college soccer recruitment agency.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🏗️ Architecture

- **Frontend:** React + Vite (TypeScript)
- **Styling:** Custom CSS (Utility-first variables)
- **Animations:** Intersection Observer for "reveal-on-scroll" effects.
- **Form Handling:** React forms (Submission logic is currently a placeholder UI effect).

## ☁️ Deployment (Cloudflare)

The recommended setup for this project is:

1. **GitHub:** Push your code to a GitHub repository.
2. **Cloudflare Pages:** 
   - Connect your GitHub repository.
   - Set the build command to `npm run build`.
   - Set the build output directory to `dist`.
3. **Cloudflare Workers (API):**
   - Create a Worker to handle POST requests from the forms.
   - Use **Resend** for email notifications.
   - Optionally integrate with **Google Sheets** or **Airtable**.
4. **Secrets:** Store API keys (Resend, etc.) in Cloudflare environment variables.

## 🛠️ Tech Stack

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Google Fonts (DM Sans, Bebas Neue)](https://fonts.google.com/)

---

Developed for **Soccer Bridge USA**.
