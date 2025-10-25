

-----

# Resumaid (ai-resume-analyzer)

[cite\_start]Resumaid is an AI-powered resume analyzer that provides smart, detailed feedback to help you optimize your resume and land your dream job[cite: 113].

Users can upload their resume along with a job title and description. [cite\_start]The application then generates a comprehensive report, including an overall score, an ATS (Applicant Tracking System) score, and actionable tips across four key categories: Tone & Style, Content, Structure, and Skills[cite: 27, 30, 101].

## About The Project

This project provides an intelligent, user-friendly interface for resume analysis. [cite\_start]It's built to simulate how an employer's ATS would scan a resume, giving users a critical edge in the job application process[cite: 31].

[cite\_start]The core functionality is built on the **Puter** platform, which handles AI analysis, user authentication, file storage (for resumes and generated images), and key-value storage (for feedback data)[cite: 112, 140, 146].

When a user uploads a PDF, the app:

1.  [cite\_start]Securely uploads the file and a job description to Puter[cite: 143, 152].
2.  [cite\_start]Converts the PDF to an image for a visual preview[cite: 144].
3.  [cite\_start]Sends the resume data to Puter's AI for analysis against the job description[cite: 147].
4.  Receives and parses the detailed feedback.
5.  [cite\_start]Displays the feedback in a clean, interactive dashboard featuring score gauges, badges, and accordions for detailed tips[cite: 122, 136].
6.  [cite\_start]Saves the analysis to the user's account, accessible from the main dashboard[cite: 117].

## Key Features

  * [cite\_start]**AI-Powered Feedback:** Generates in-depth, actionable advice using AI to analyze your resume against a specific job description[cite: 147].
  * [cite\_start]**ATS Score & Suggestions:** Provides a score (0-100) indicating how well your resume passes Applicant Tracking Systems, with tips for improvement[cite: 27, 30].
  * **Detailed Category Breakdown:** Offers scores and feedback across four main areas:
      * [cite\_start]Tone & Style [cite: 50]
      * [cite\_start]Content [cite: 51]
      * [cite\_start]Structure [cite: 52]
      * [cite\_start]Skills [cite: 53]
  * [cite\_start]**Resume Dashboard:** A homepage that displays all past analyses as `ResumeCard`s, allowing users to track their progress[cite: 111, 119].
  * [cite\_start]**Interactive UI:** A polished and responsive interface built with custom React components like `ScoreGauge` [cite: 88][cite\_start], `Accordion` [cite: 12][cite\_start], and `FileUploader`[cite: 55].
  * [cite\_start]**Secure Authentication:** Manages user sessions using Puter's built-in authentication[cite: 102].
  * [cite\_start]**Puter Platform Integration:** Natively uses Puter for its backend, including AI [cite: 140][cite\_start], file system [cite: 143][cite\_start], and database (KV store)[cite: 146].

## Tech Stack

  * [cite\_start]**Frontend:** React [cite: 247][cite\_start], React Router [cite: 249][cite\_start], Vite [cite: 248]
  * [cite\_start]**Language:** TypeScript [cite: 248]
  * [cite\_start]**Platform (BaaS):** Puter (handles AI, Auth, File System, and KV Storage) [cite: 112, 140]
  * [cite\_start]**Styling:** Tailwind CSS [cite: 254][cite\_start], `class-variance-authority` (CVA) [cite: 4]
  * [cite\_start]**State Management:** Zustand [cite: 247]
  * [cite\_start]**Utilities:** `react-dropzone` [cite: 247]

## Project Structure

The repository is a standard Vite + React Router application.

```
ai-resume-analyzer/
├── app/
[cite_start]│   ├── components/    # Reusable React components (Accordion, ScoreGauge, etc.) [cite: 2]
[cite_start]│   ├── routes/        # Page-level components (home.tsx, upload.tsx, resume.tsx) [cite: 2]
[cite_start]│   ├── app.css        # Main stylesheet [cite: 2]
[cite_start]│   └── root.tsx       # Root layout component [cite: 2]
[cite_start]├── constants/         # Constants, including AI prompt instructions [cite: 2, 139]
[cite_start]├── types/             # TypeScript type definitions [cite: 2]
[cite_start]├── package.json       # Project dependencies and scripts [cite: 2]
[cite_start]└── vite.config.ts     # Vite configuration [cite: 2]
```

## Getting Started

[cite\_start]This project is a modern React application built with React Router and Vite[cite: 249].

### Prerequisites

  * Node.js
  * npm (or your preferred package manager)

### Installation & Development

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/IbrahimKhaled19/ai-resume-analyzer.git
    cd ai-resume-analyzer
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

    [cite\_start][cite: 249]

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    [cite\_start][cite: 249]

[cite\_start]Your application will be available at `http://localhost:5173`[cite: 249].

[cite\_start]**Note:** This project is deeply integrated with the **Puter** platform[cite: 112, 140]. For full functionality (including AI analysis, file uploads, and authentication), the application must be run within or connected to a Puter environment.

## Building for Production

To create a production-ready build, run:

```bash
npm run build
```

[cite\_start][cite: 251]

[cite\_start]This will output the optimized server code and static client assets to the `build/` directory[cite: 253].

## Deployment

You can deploy this application using Docker or by running the built-in server manually.

### Docker Deployment

To build and run the application using Docker:

```bash
# Build the Docker image
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

[cite\_start][cite: 252]

### Manual Deployment

[cite\_start]The output of `npm run build` is a production-ready Node.js application[cite: 253].

```
build/
[cite_start]├── client/    # Static assets [cite: 253]
[cite_start]└── server/    # Server-side code [cite: 253]
```

You can deploy this `build/` directory and the root `package.json` to any platform that supports Node.js. Start the server using the `npm run start` command.
