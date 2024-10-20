# Cywreck-1: AI Chatbot for Code Vulnerability Detection  
*By Team Cloud Force*

## Overview

Welcome to **Cywreck-1**, an AI-powered chatbot designed to detect code vulnerabilities using **LLM Llama 3.2 3B**. This project is aimed at identifying common vulnerabilities such as **CVEs (Common Vulnerabilities and Exposures)** and **CWEs (Common Weakness Enumerations)** in codebases. Our chatbot helps developers find, classify, and fix these issues by suggesting optimized code snippets.

The frontend of the application is built with **Next.js** and integrated with **Google OAuth 2.0** for secure user authentication. We leveraged modern technologies like **TypeScript**, **Tailwind CSS**, **Vite**, and **Mantine UI** to create a user-friendly interface for interacting with the chatbot.

### Features:
- **LLM Llama 3.2 3B** for detecting code vulnerabilities
- **Google OAuth 2.0** integration for secure user login
- Support for multiple types of vulnerabilities (CVE, CWE, etc.)
- Chat interface allowing users to input code snippets and get vulnerability reports
- Suggestions for fixing vulnerabilities with optimized code snippets
- Easy-to-use frontend built with **Next.js** and **Tailwind CSS**

## Demo

<img width="1469" alt="Screenshot 2024-10-20 at 12 22 10 PM" src="https://github.com/user-attachments/assets/622187d9-1aba-4629-8cf3-1f64af42f320">


## Technologies Used:
- **Next.js** for frontend
- **TypeScript** for type safety and enhanced code maintainability
- **Tailwind CSS** for responsive design
- **Mantine UI** for a sleek and modern interface
- **Vite** for fast frontend tooling and development
- **Google OAuth 2.0** for secure authentication
- **LLM Llama 3.2 3B** for AI-based vulnerability detection

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- A **Google OAuth** client ID and secret. Follow [Google's documentation](https://developers.google.com/identity/sign-in/web/sign-in) to get started with OAuth 2.0.

### Installation Instructions

Follow these steps to set up the project locally or using Docker:

---

#### **Local Setup**:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/pawannitt-26/Transfinite
   cd Transfinite
   ```

2. **Install dependencies:**

   Make sure you are in the project directory and run:

   ```bash
   npm install
   ```

3. **Environment Setup:**

   You need to configure the following environment variables to enable OAuth and connect with the LLM model:

   Create a `.env.local` file in the root of the project and add the following variables:

   ```bash
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
   NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=your-google-client-secret
   NEXT_PUBLIC_LLM_API_URL=https://api.llm-llama-3.2-endpoint.com
   ```

   Replace `your-google-client-id` and `your-google-client-secret` with your Google OAuth credentials, and `https://api.llm-llama-3.2-endpoint.com` with the URL of your LLM backend.

4. **Run the development server:**

   After configuring the environment variables, start the development server by running:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

---

#### **Production Build**:

To create an optimized production build, use the following command:

```bash
npm run build
```

This will generate a production-ready build in the `.next` folder. You can then serve the app using:

```bash
npm start
```

---

#### **Docker Setup**:

Alternatively, you can run the project using Docker. Follow these steps:

1. **Build the Docker image:**

   Inside the project directory, run:

   ```bash
   docker build -t chatbot-ollama .
   ```

2. **Run the Docker container:**

   Once the image is built, start the container with the following command:

   ```bash
   docker run -p 3000:3000 chatbot-ollama
   ```

   This will bind port `3000` on your host machine to the container, allowing you to access the app via [http://localhost:3000](http://localhost:3000).

---

## How to Use

1. **Sign in**: Use Google OAuth 2.0 to securely log in.
2. **Chat with the Bot**: Paste your code into the chat interface and ask the chatbot to detect vulnerabilities.
3. **Vulnerability Detection**: The chatbot will analyze your code and report vulnerabilities like CVEs and CWEs.
4. **Fix Suggestions**: The chatbot suggests fixes and improvements to your code.

## Contributing

We welcome contributions from the community! Follow these steps if you'd like to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/my-feature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Added my feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/my-feature
   ```
5. Open a Pull Request.

----
