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
├── actions/               # Server actions
├── app/
│   ├── (site)/            # Public site route group
│   │   ├── layout.tsx     # Site layout
│   │   └── page.tsx       # Home page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/
│   ├── home/
│   │   ├── banners.tsx          # Banner carousel component
│   │   ├── trending-products.tsx # Trending products section
│   │   └── product-list-skeleton.tsx
│   └── layout/
│       ├── footer.tsx
│       ├── footer-button.tsx
│       ├── header.tsx
│       ├── header-icon.tsx
│       ├── header-mobile-menu.tsx
│       └── header-search.tsx
├── data/
│   ├── index.ts           # Exports all data
│   ├── mock.ts            # Temporary data (will be replaced by API)
│   └── static.ts          # Static data (benefits, menu, socialLinks)
├── hooks/
│   └── use-banner-carousel.ts  # Custom hook for banner carousel logic
├── libs/                  # Utilities and config
├── store/                 # Zustand stores
└── types/
    ├── banner.ts
    ├── data.ts
    ├── menu-item.ts
    └── product.ts

public/
└── assets/
    ├── banners/           # Banner images
    ├── products/          # Product images
    └── ui/                # UI icons and assets

## Environment Variables
See `.env.example` for all required variables.
Never commit `.env` or any file containing real values.

## Conventions
- Components in PascalCase
- Custom hooks prefixed with `use` in `/hooks`
- Absolute imports via `@/`
- Server Components by default — use `"use client"` only when necessary
- Conventional Commits in English (feat, fix, refactor, chore, docs...)
- Static data in `@/data/static.ts` — mock/temporary data in `@/data/mock.ts`

## Running the project
npm run dev

## Notes
- Backend and auth not yet defined
- Banner and product data is temporary — will be replaced by API
- UI design based on Figma (web + mobile versions)