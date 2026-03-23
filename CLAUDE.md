# CLAUDE.md

## Project
B7Store — fashion e-commerce (t-shirts, caps).

## Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Zustand — global state (cart, auth)
- Axios — HTTP requests
- Zod — schema validation

## Project Structure
src/
├── app/
│   └── (site)/          # Public site route group
│       ├── layout.tsx   # Site layout
│       └── page.tsx     # Home page
├── actions/             # Server actions
├── components/
│   └── layout/
│       └── header.tsx
├── libs/                # Utilities and config
├── store/               # Zustand stores
└── types/               # Global TypeScript types

## Environment Variables
See `.env.example` for all required variables.
Never commit `.env` or any file containing real values.

## Conventions
- Components in PascalCase
- Custom hooks prefixed with `use`
- Absolute imports via `@/`
- Server Components by default — use `"use client"` only when necessary
- Conventional Commits in English (feat, fix, refactor, chore, docs...)

## Running the project
npm run dev

## Notes
- Backend and auth not yet defined
- UI design based on Figma (web + mobile versions)