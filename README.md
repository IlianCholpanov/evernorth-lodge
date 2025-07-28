# Evernorth Lodge
Internal hotel management application build with React, Vite, Supabase, and styled-components. Planned to manage everything about the hotel: bookings, cabins and guests.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [License](#license)

## Overview

Evernorth Lodge is a web application designed to provide a seamless and interactive user experience, leveraging powerful tools like Supabase for backend services and React Query for data fetching and caching.

## Features

- Modern React (v18) with hooks
- Supabase integration for authentication and data
- Form handling with React Hook Form
- Data visualization with Recharts
- Routing with React Router
- Styled with styled-components
- Toast notifications with React Hot Toast
- Error boundaries for robust error handling

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Supabase](https://supabase.com/)
- [React Query](https://tanstack.com/query/latest)
- [Styled Components](https://styled-components.com/)
- [Recharts](https://recharts.org/)
- [React Hook Form](https://react-hook-form.com/)
- [React Router](https://reactrouter.com/)
- [ESLint](https://eslint.org/)

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/IlianCholpanov/evernorth-lodge.git
cd evernorth-lodge
npm install
# or
yarn install
```

### Running the App

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173` by default.

## Available Scripts

- `dev`: Start the development server
- `build`: Build the app for production
- `preview`: Preview the production build
- `lint`: Run ESLint

## Project Structure

```
/
├── public/
├── src/
|    ├── context/           # React context providers (e.g., AuthContext)
|    ├── data/              # Static data, mock data, or data schemas
|    ├── features/          # Feature-specific modules (domain logic, slices)
|    ├── hooks/             # Custom React hooks
|    ├── pages/             # Top-level route components
|    ├── services/          # API calls, Supabase client, external services
|    ├── styles/            # Global and shared styles
|    ├── ui/                # Reusable UI components (buttons, modals, etc.)
|    └── utils/             # Utility/helper functions
|    ├── app.jsx            # Main App component
|    ├── main.jsx           # Entry point   
├── package.json
├── vite.config.js
├── .eslintrc
└── ...
```

## Configuration

- **Vite**: See `vite.config.js` for build and plugin configuration.
- **ESLint**: See `.eslintrc` for linting rules.
- **Supabase**: Configure your Supabase credentials in environment variables (e.g., `.env`).

## License

[MIT](LICENSE)
