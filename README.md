<div align="center">

  <h1>SYNAPSE</h1>
  <h3>The Digital Toolkit Hub</h3>
  <p>
    The connection point between you and your digital toolkit. A modern dashboard to discover, track, and organize your favorite resources, AI agents, and daily tools.
  </p>

  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#license">License</a>
  </p>

  <div align="center">
    <!-- React -->
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <!-- TypeScript -->
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <!-- Vite -->
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <!-- Tailwind CSS -->
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <!-- Supabase -->
    <img src="https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=3ECF8E" alt="Supabase" />
  </div>
</div>

<br />

## 🌟 Introduction

**Synapse** is a curated resource management dashboard designed to bridge the gap between users and the vast ecosystem of digital tools. Whether you are a developer looking for the latest APIs, a designer seeking inspiration, or a power user exploring AI agents, Synapse provides a centralized, intelligent interface to manage it all.

Built with a focus on aesthetics and usability, Synapse features a responsive glassmorphic design, an integrated Prompt Vault for AI workflows, and a powerful search and filtering system.

## ✨ Features

- **📊 Comprehensive Resource Directory**: Browse categorized tools including AI Chat, Code & Build, Design & Media, and more.
- **📝 Prompt Vault**: A dedicated space to store, copy, and manage your essential AI prompts.
- **🔍 Smart Search & Filtering**: Instantly find resources by name, category, pricing (Free/Paid), or student offers.
- **⭐ Favorites System**: Pin your most-used tools for quick usage.
- **🎨 Dynamic Theming**: Toggle between Light and Dark modes with a beautiful Vanta.js-inspired background.
- **🧹 Clean UI**: Built with Shadcn UI and Tailwind CSS for a premium, accessible user experience.

## 🛠 Tech Stack

| Component | Technology | Description |
|-----------|------------|-------------|
| **Frontend** | [React 18](https://react.dev/) | The library for web and native user interfaces. |
| **Build Tool** | [Vite](https://vitejs.dev/) | Next Generation Frontend Tooling. |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | JavaScript with syntax for types. |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | A utility-first CSS framework for rapid UI development. |
| **Backend** | [Supabase](https://supabase.com/) | Open source Firebase alternative. |
| **Icons** | [Lucide React](https://lucide.dev/) | Beautiful & consistent icons. |
| **Visual Effects** | [Vanta.js](https://www.vantajs.com/) | Animated background effects. |

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Vince0028/Synapse.git
    cd Synapse
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add your Supabase credentials:

    ```env
    VITE_SUPABASE_URL=your_supabase_project_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```
    > **Note**: You will need to set up a Supabase project to enable favorites and other backend features.

4.  **Run the application**
    ```bash
    npm run dev
    ```

5.  **Open in Browser**
    Visit `http://localhost:5173` to view the app.

## 📸 Usage

- **Explore Categories**: Use the sidebar to navigate between "Prompt Vault", "AI Chat", "Code & Build" and other categories.
- **Filter Content**: Use the chips to filter by "Free Only", "Student Offers", or specific tags.
- **Manage Favorites**: Click the star icon on any card to add it to your favorites list.
- **Copy Prompts**: Visit the Prompt Vault to one-click copy useful AI prompts.
- **Switch Theme**: Use the toggle in the top right to switch between light and dark modes.

## 📞 Contact

Vince Alobin - [GitHub Profile](https://github.com/Vince0028)

---

<div align="center">
  <sub>Built with ❤️ by Vince using React & Supabase</sub>
</div>
