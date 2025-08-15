This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



## Deployment & Usage Instructions

### 1. Install dependencies

```
npm install
```

### 2. Start the development server

```
npm run dev-custom
```

- The app will be available at http://localhost:53350
- To change the port, edit the `dev-custom` script in `package.json`.

### 3. Default Login
- Username: `admin`
- Password: `password`

### 4. Features
- Modular dashboard with sidebar navigation
- Login/logout (credentials-based, can be expanded)
- Save links and documents (localStorage)
- Tools module (placeholder for quick access tools)

### 5. Expanding the Dashboard
- Add new modules/pages in the `app/` directory (e.g., `app/newmodule/page.tsx`)
- Update the sidebar in `app/layout.tsx` to link to new modules
- For persistent storage, connect to a backend/database and update the relevant modules

## Getting Started

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
