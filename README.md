Here is the complete README file, summarizing all the enhancements and components we've developed for your modern, neon-themed portfolio.

-----

# 👨‍💻 Raj Vashisht | Fullstack Developer Portfolio

This repository contains the source code for the personal portfolio of **Raj Vashisht**, a **Fullstack Software Engineer**. The site is a dynamic, modern, and high-performance showcase of skills and projects, built with a dark, neon-blue theme and interactive, smoothly animated elements.

The project features collapsible sections, a prominent neon glow effect on interactive cards, and a clean, two-column hero layout.

This project was bootstrapped with [`create-next-app`](https://www.google.com/search?q=%5Bhttps://nextjs.org/docs/app/api-reference/cli/create-next-app%5D\(https://nextjs.org/docs/app/api-reference/cli/create-next-app\)).

-----

## ✨ Key Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **[Next.js](https://nextjs.org/)** | React Framework for production (Routing, SSR/SSG). |
| **[TypeScript](https://www.typescriptlang.org/)** | Provides static typing for robust and scalable code. |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first CSS framework for rapid, custom styling and dark theme implementation. |
| **[Framer Motion](https://www.framer.com/motion/)** | Library used for all animations, including neon hover effects and collapsible section transitions. |
| **[Lucide Icons](https://lucide.dev/)** | Modern, comprehensive icon library used across all components. |

-----

## 🚀 Getting Started

### Prerequisites

You need to have **Node.js** (version 18 or higher) and **npm** or **Yarn/pnpm/bun** installed.

### Installation

1.  Clone the repository:
    ```bash
    git clone [YOUR_REPO_URL]
    cd [YOUR_REPO_NAME]
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

-----

## 🛠️ Project Features and Customization

### Key Components

  * **`Hero.jsx`**: Features a two-column layout, an animated profile picture placeholder, and prominent action buttons.
  * **`NavBar.jsx`**: A non-sticky header with responsive links and a primary download CV button. **Ensure the link path is updated.**
  * **`Projects.jsx` & `Experience.jsx`**: Both use **Framer Motion** for a **neon blue glow on hover** and feature collapsible descriptions.
  * **`Contact.jsx`**: Structured grid layout using iconic cards with a hover effect for LinkedIn, GitHub, and Email links.

### Customization Steps

1.  **Update Content:** Modify the data arrays and content within the `Hero`, `Experience`, `Projects`, `AwardsAndCertifications`, and `Contact` components in your `src/components/` folder.
2.  **Add Resume:** Place your resume PDF file (e.g., `resume.pdf`) inside the **`public/`** directory.
3.  **Fix Download Link:** Update the `href` in `NavBar.jsx` and `Hero.jsx` to correctly point to your resume's public path (e.g., `/resume.pdf`).
4.  **Add Profile Photo:** Replace the placeholder `div` in `Hero.jsx` with an `<img>` tag pointing to your professional headshot, which should also be placed in the `public/` folder.

-----

## 📚 Learn More

  * **Smooth Scrolling:** This project uses the `scroll-behavior: smooth` CSS property, typically defined in `globals.css`, to ensure smooth transitions when navigating between sections.
  * [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
  * [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Explore utilities and configuration.

## ☁️ Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.