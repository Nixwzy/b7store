<div align="center">
  <img src="./public/assets/ui/logo-white.png" alt="B7Store Logo" height="60" />
  <br/>
  <p>Fashion e-commerce focused on t-shirts and caps.</p>
</div>

---

## 🛠️ Technologies

<div align="center">
  <img src="https://skillicons.dev/icons?i=nextjs,ts,tailwind,react" />
  <br/>
  <br/>
  <img src="https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=react&logoColor=white" alt="Zustand" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white" alt="Zod" />
</div>

## ✨ Features

- **Modern Architecture:** Built with Next.js App Router and Server Actions.
- **State Management:** Global state handled by Zustand (Cart & Auth).
- **Domain-Driven Components:** Encapsulated UI and logic (e.g., specific hooks living alongside their components).
- **Type Safety:** End-to-end type safety with TypeScript and Zod validation.
- **Dynamic Cart & Shipping:** Real-time shipping calculation and address management.

## ✅ Prerequisites

<div align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,npm" />
</div>

- **Node.js**: 20+
- **npm**: 10+

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nixwzy/b7store.git
   cd b7store
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
src/
├── actions/         # Next.js Server Actions (API communications & mutations)
├── app/             # Next.js App Router (Pages, Layouts, and Routing)
├── components/      # UI Components (Organized by domain, e.g., /cart, /auth)
├── data/            # Static data and API mocks
├── hooks/           # Global Custom Hooks
├── libs/            # Utility functions (formatters, cookie management)
├── schemas/         # Zod schemas for form validation
├── store/           # Zustand global state stores
└── types/           # Global TypeScript interfaces and types
```

## 📌 Status

🚧 Under development