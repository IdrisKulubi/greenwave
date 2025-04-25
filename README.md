# GreenWave 🌊🎙️

GreenWave is a modern web application that transforms environmental articles into engaging, immersive podcasts. It serves as an eco-conscious audio platform designed to share environmental stories and insights through high-quality audio experiences.

## ✨ Core Features

*   **Article-to-Podcast Conversion:** (Core concept) Transforms written environmental content into listenable podcast episodes.
*   **Featured Podcasts:** Highlights curated environmental podcasts nicely.
*   **Interactive Podcast Player:** A custom, visually engaging audio player with playback controls, volume adjustment, seeking, and an audio visualizer.
*   **Responsive Design:** Fully responsive interface built with Tailwind CSS and Shadcn UI.
*   **Smooth Animations:** Engaging user experience enhanced with Framer Motion animations.
*   **Dark Mode Support:** Adapts to user system preferences for light/dark mode.

## 💻 Tech Stack

*   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
*   **UI Library:** [React 19](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [Shadcn UI](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
*   **Animation:** [Framer Motion](https://www.framer.com/motion/)
*   **Deployment:** [Vercel](https://vercel.com/)
*   **(Potential):** [Vercel AI SDK](https://sdk.vercel.ai/) for AI-powered features (like text-to-speech).

## 🚀 Getting Started

Follow these steps to get the project running locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/IdrisKulubi/greenwave
    cd greenwave
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🏗️ Project Structure

*   `src/app/`: Contains the main application pages using the Next.js App Router.
*   `src/components/`: Reusable UI components (landing sections, UI primitives, podcast player).
*   `src/components/ui/`: Shadcn UI components.
*   `src/lib/`: Utility functions and potentially data definitions (`utils.ts`, `podcast-data.ts`).
*   `src/hooks/`: Custom React hooks (e.g., `use-audio.ts`).
*   `public/`: Static assets like images and podcast audio files.
*   `styles/`: Global styles (if any beyond Tailwind).

## ⚙️ How It Works (Conceptual)

1.  **Submit Article:** Users (or admins) submit environmental articles.
2.  **(AI) Production:** The system (potentially using AI text-to-speech and sound design) converts the article into an audio file.
3.  **Listen & Share:** The generated podcast episode becomes available on the platform for listening and sharing.

## ▲ Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

