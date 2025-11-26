# Spott Project Setup Guide

Welcome to the Spott project! This guide will help you set up the project locally on your machine.

## 🛠️ Tech Stack

-   **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
-   **Language:** JavaScript
-   **Backend/Database:** [Convex](https://www.convex.dev/)
-   **Authentication:** [Clerk](https://clerk.com/)
-   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
-   **UI Components:** [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
-   [Node.js](https://nodejs.org/) (v18 or higher recommended)
-   [npm](https://www.npmjs.com/) (comes with Node.js) or yarn/pnpm/bun

## 🚀 Getting Started

Follow these steps to get the project up and running:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd spott
```

### 2. Install Dependencies

Install the required packages using npm:

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory of the project (`spott/`). You will need to add the following environment variables.

**Required Variables:**

```env
# Convex Configuration
# You get these after running `npx convex dev` or from your Convex Dashboard
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# Clerk Authentication
# Get these from your Clerk Dashboard (API Keys section)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

### 4. Run the Development Servers

You need to run both the Convex backend and the Next.js frontend. It is recommended to run them in separate terminal windows.

**Terminal 1: Start Convex Backend**
This command syncs your schema and functions with the Convex cloud.

```bash
npx convex dev
```
*Follow the prompts to log in and configure your Convex project if this is your first time.*

**Terminal 2: Start Next.js Frontend**

```bash
npm run dev
```

### 5. Open the App

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

-   `/app`: Next.js App Router pages and layouts.
-   `/components`: Reusable React components.
-   `/convex`: Convex backend functions and schema.
-   `/lib`: Utility functions.
-   `/public`: Static assets.

## 📜 Scripts

-   `npm run dev`: Starts the Next.js development server.
-   `npm run build`: Builds the application for production.
-   `npm run start`: Starts the production server.
-   `npm run lint`: Runs ESLint to check for code quality issues.
