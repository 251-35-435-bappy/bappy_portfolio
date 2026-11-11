# Md Tanvir Rahman Bappy — Software Engineering Portfolio

A premium, dark-themed, fully responsive portfolio website built with **React.js**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

**Live:** https://bappyportfolio.vercel.app/
**Identity:** Md Tanvir Rahman Bappy — Software Engineering Student | Aspiring Software Engineer  
**University:** Daffodil International University (DIU)

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React.js (Vite) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Language | JavaScript (ES6+) |
| Deployment | Vercel |

---

## 📂 Project Structure

```
.
├── index.html
├── 
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── .gitignore
├── README.md
├── public/
│   ├── images/        # profile pic & project screenshots (placeholders)
│   └── resume/        # resume PDF (placeholder)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   ├── personalInfo.js
    │   ├── skills.js
    │   ├── projects.js
    │   ├── education.js
    │   ├── experience.js
    │   └── certifications.js
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── SectionTitle.jsx
    │   ├── Button.jsx
    │   ├── Badge.jsx
    │   ├── SocialLinks.jsx
    │   ├── ProjectCard.jsx
    │   ├── SkillCard.jsx
    │   ├── ContactForm.jsx
    │   └── ScrollToTop.jsx
    └── sections/
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Education.jsx
        ├── Experience.jsx
        ├── Certifications.jsx
        └── Contact.jsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later) — [Download here](https://nodejs.org/)
- npm (comes with Node.js)

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/bappy-portfolio.git
cd bappy-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

The output goes to the `dist/` folder. Preview it locally with:

```bash
npm run preview
```

---

## 🖼 Adding Real Assets

The profile photo from the provided CV is already installed. Optional project screenshots and a downloadable resume can be added later:

| File | Purpose |
|------|---------|
| `public/images/profile.jpg` | Profile photo (already added) |
| `public/images/project-01.jpg` | Inventory Management System screenshot |
| `public/images/project-02.jpg` | AI Energy Forecasting screenshot |
| `public/resume/Tanvir_Bappy_Resume.pdf` | Your resume PDF |

Contact details in `src/data/personalInfo.js` use the information supplied for this portfolio. GitHub, LinkedIn, and resume links are omitted until real links/files are provided.

---

## 📝 Content (Edit These First)

All personal and project content lives in `src/data/`:

- `personalInfo.js` — name, title, bio, contact details, and available social links
- `skills.js` — categorized technical skills
- `projects.js` — project cards (Inventory Management System, AI Energy Forecasting)
- `education.js` — academic timeline
- `experience.js` — class representation, club leadership, and student activities
- `certifications.js` — certificates, courses, and achievements

---

## ☁ Deployment on Vercel

1. Push this repository to GitHub.
2. Log in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework preset is detected automatically (**Vite**).
5. Leave build settings as-is:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Click **Deploy**.
7. (Optional) Add a custom domain in the Vercel project settings under **Domains**.

Every push to `main` triggers an automatic redeployment.

---

## 📬 Contact Form

The contact form validates required fields and email format, then opens the visitor's default email app with a prepared message. It does not send mail through a server.

To send messages without relying on the visitor's email app, integrate a backend/email service (e.g., **EmailJS**, **Formspree**, **Netlify Functions**, or your own API) and update the submit handler in `src/components/ContactForm.jsx`.

> ⚠️ Do not expose backend credentials in the frontend. Use environment variables.

---

## ♿ Accessibility

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Keyboard-navigable navigation & hamburger menu
- Focus-visible outlines
- Sufficient color contrast on dark theme
- `aria-label`s on icon buttons and social links

---

## 📄 License

MIT © 2026 Md Tanvir Rahman Bappy
