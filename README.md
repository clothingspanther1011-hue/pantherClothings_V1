# Panther Clothings

A modern e-commerce web application for Panther Clothings, built with Next.js (frontend) and Sanity CMS (backend). This monorepo contains two main folders:

- `frontend/` — The Next.js 14 app (with Tailwind CSS, TypeScript, and Sanity integration)
- `sanity-cms/` — The Sanity Studio for content management (products, banners, hero slides, etc.)

---

## Table of Contents
- [Panther Clothings](#panther-clothings)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [1. Prerequisites](#1-prerequisites)
    - [2. Clone the Repository](#2-clone-the-repository)
    - [3. Install Dependencies](#3-install-dependencies)
    - [4. Environment Variables](#4-environment-variables)
    - [5. Running the Development Servers](#5-running-the-development-servers)
      - [Start Sanity Studio (CMS):](#start-sanity-studio-cms)
      - [Start Next.js Frontend:](#start-nextjs-frontend)
  - [Sanity CMS Workflow](#sanity-cms-workflow)
  - [Frontend Workflow](#frontend-workflow)
  - [Deployment](#deployment)
  - [Folder Structure](#folder-structure)
  - [Contributing](#contributing)
  - [License](#license)

---

## Features
- Modern, responsive e-commerce UI
- Product listing and details
- Order form (basic)
- Static pages: About, Contact, Privacy, Shipping Policy, Terms
- Dynamic content managed via Sanity CMS (products, banners, hero slides)
- Modular React components
- Tailwind CSS for styling
- TypeScript for type safety

## Tech Stack
- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **Backend/CMS:** Sanity.io (Sanity Studio v3)

## Project Structure
```
pantherClothings/
├── frontend/      # Next.js 14 app
└── sanity-cms/    # Sanity Studio (CMS)
```

---

## Getting Started

### 1. Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli) (for CMS management)

### 2. Clone the Repository
```bash
git clone <repo-url>
cd pantherClothings
```

### 3. Install Dependencies
Install dependencies for both frontend and CMS:
```bash
cd frontend
npm install
# or yarn
cd ../sanity-cms
npm install
# or yarn
```

### 4. Environment Variables
Create a `.env.local` file in `frontend/` with your Sanity project details:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-01-01
```
> Get your project ID and dataset from the Sanity project dashboard or `sanity.config.ts`.

### 5. Running the Development Servers
#### Start Sanity Studio (CMS):
```bash
cd sanity-cms
npx sanity dev
```
- Studio will be available at [http://localhost:3333](http://localhost:3333)

#### Start Next.js Frontend:
```bash
cd frontend
npm run dev
```
- App will be available at [http://localhost:3000](http://localhost:3000)

---

## Sanity CMS Workflow
- All content (products, banners, hero slides) is managed in Sanity Studio (`sanity-cms/`).
- Schemas are defined in `sanity-cms/schemaTypes/` (e.g., `product.ts`, `banner.ts`).
- To add/edit products, banners, or hero slides:
  1. Run `npx sanity dev` in `sanity-cms/`.
  2. Open the Studio in your browser.
  3. Use the Studio UI to manage content.
- To deploy schema changes:
  1. Edit or add schema files in `schemaTypes/`.
  2. Run `npx sanity schema deploy` to push changes to the cloud.

## Frontend Workflow
- The Next.js app fetches content from Sanity using the configured client in `frontend/lib/sanity.ts`.
- Pages are located in `frontend/app/` (e.g., `products/page.tsx`, `about/page.tsx`).
- Components are in `frontend/components/`.
- Styling is handled via Tailwind CSS (`frontend/tailwind.config.js`).
- To add new pages or components, follow the Next.js app directory structure.

---

## Deployment
- **Frontend:** Deploy to Vercel, Netlify, or any Node.js hosting provider.
- **Sanity Studio:** Deploy to [Sanity Managed Hosting](https://www.sanity.io/docs/deployment) or your own server.
- Set appropriate environment variables in your deployment platform.

---

## Folder Structure
```
frontend/
  app/              # Next.js app directory (pages, layouts)
  components/       # Reusable React components
  lib/              # Sanity client and utilities
  public/           # Static assets
  styles/           # Global styles (if any)
  ...
sanity-cms/
  schemaTypes/      # Sanity schema definitions
  static/           # Static files for Studio
  sanity.config.ts  # Sanity Studio config
  ...
```

---

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.
