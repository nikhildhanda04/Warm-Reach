# Warm-Reach

Warm-Reach is an intelligent application designed to streamline cold outreach and content generation. Leveraging the power of AI, it helps users generate personalized emails and cover letters by analyzing uploaded documents (PDFs, Word docs) and job descriptions.

## 🚀 Features

-   **AI-Powered Generation**: Utilizes Gemini AI to generate tailored emails and cover letters.
-   **Smart Document Parsing**: Extract text and context from PDF and Word documents.
-   **Secure Authentication**: robust user management and authentication using Better Auth.
-   **Modern UI/UX**: A polished, responsive interface built with Radix UI and Tailwind CSS.
-   **Real-time Feedback**: Interactive components with Framer Motion animations.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
-   **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
-   **Authentication**: [Better Auth](https://better-auth.com/)
-   **AI Model**: Google Gemini
-   **UI Components**: [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/)
-   **Animation**: [Framer Motion](https://www.framer.com/motion/)

## 📂 File Structure

```
├── src
│   ├── app                 # Next.js App Router pages and API routes
│   │   ├── api             # Backend API endpoints
│   │   ├── components      # Page-specific components
│   │   ├── generate        # Generation feature routes
│   │   └── ...
│   ├── components          # Reusable UI components
│   └── lib                 # Utilities, DB connection, Auth client
├── public                  # Static assets
├── .env.example            # Environment variable template
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies
└── tsconfig.json           # TypeScript configuration
```

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   Node.js (v18+ recommended)
-   MongoDB instance (local or Atlas)

### Installation

1.  **Clone the repository**

    ```bash
    git clone <repository-url>
    cd Warm-Reach
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Environment Setup**

    Create a `.env` file in the root directory by copying the example:

    ```bash
    cp .env.example .env
    ```

    Fill in the required environment variables in `.env`:

    ```env
    CONNECTION_STRING=your_mongodb_connection_string
    GEMINI_API_KEY=your_gemini_api_key
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    BETTER_AUTH_SECRET=your_generated_secret
    BETTER_AUTH_URL=http://localhost:3000
    ```

4.  **Run the development server**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the application for production.
-   `npm run start`: Starts the production server.
-   `npm run lint`: Runs ESLint to check for code quality issues.
