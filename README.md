# Analyzr

**AI-powered resume analyzer for smarter job applications.**

[🔗 Live App](https://ai-resume-analyzer-blush-one.vercel.app/)

---

## ⚙️ Features

- 🔐 Authentication (Sign In / Sign Out)
- 📄 Resume upload with preview
- 🧠 AI-driven resume feedback and suggestions
- ✅ ATS scoring to evaluate resume strength
- 🌙 Theme switch (Light / Dark)
- 🔒 Protected routes for secure access
- 🖼️ PDF-to-image conversion for easy viewing
- ⚡ Fast, responsive UI across devices

---

## 🧠 Tech Stack

- **React** (with latest React Router)
- **TailwindCSS**
- **Zustand** for state management
- **Lucide-react** for modern icons
- **React-dropzone** for file uploads
- **PuterJS** for cloud storage and database
- **TypeScript** for type safety

---

## Building for Production

Create a production build:

```bash
npm run build
```

### Project Structure

```
/
├── components/         # Reusable UI components (Navbar, ATS, FileUploader, Details, etc.)
├── constants/          # Static values and configuration (e.g. prompt templates)
├── lib/                # Logic and utilities (e.g. auth, PDF parsing, Formats, hooks)
├── utils/              # Utility functions (PDF parsing, theme logic, etc.)
├── routes/             # Page components tied to route paths
├── app.css             # Global styles and custom TailwindCSS variables
├── root.tsx            # App entry layout and provider setup
└── routes.ts           # React Router configuration
```

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).  
You are free to use, copy, modify, merge, publish, distribute, and sublicense this software.  
However, the software is provided “as is”, without warranty of any kind.

© [@davidalfarero](https://github.com/davidalfarero)
