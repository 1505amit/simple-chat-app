# Simple Chat App

A real-time chat application built with NestJS (backend) and React + TypeScript + Vite (frontend).

## Project Overview

This is a full-stack chat application with the following features:

- **Backend**: NestJS with WebSocket support for real-time messaging
- **Frontend**: Modern React application with TypeScript and Vite for fast development

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Git**

## Project Structure

```
simple-chat-app/
├── backend/                 # NestJS backend server
│   ├── src/
│   │   ├── chat/           # Chat gateway and WebSocket logic
│   │   ├── app.module.ts   # Main application module
│   │   └── main.ts         # Application entry point
│   └── package.json
├── frontend/               # React + Vite frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.tsx        # Main app component
│   │   └── main.tsx       # Application entry point
│   └── package.json
└── README.md
```

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd simple-chat-app
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

## Running the Application

### Option 1: Run Both Backend and Frontend (Recommended)

Open two separate terminals:

**Terminal 1 - Start the Backend:**

```bash
cd backend
npm run start:dev
```

The backend will start on `http://localhost:3000`

**Terminal 2 - Start the Frontend:**

```bash
cd frontend
npm run dev
```

The frontend will start on `http://localhost:5173`

Open your browser and navigate to `http://localhost:5173` to access the application.

### Option 2: Run Backend Only (Development Mode)

```bash
cd backend
npm run start:dev
```

The server will run with hot-reload enabled. To make requests, you can use:

- Thunder Client
- Postman
- cURL

### Option 3: Run Backend in Production Mode

```bash
cd backend
npm run build
npm run start:prod
```

## Available Commands

### Backend Commands

```bash
# Development mode with hot-reload
npm run start:dev

# Production mode
npm run start:prod

# Build the application
npm run build

```

### Frontend Commands

```bash
# Development server with hot-reload
npm run dev

# Build for production
npm run build

```

### WebSocket Events

The chat gateway handles WebSocket events for real-time communication. Check `backend/src/chat/chat.gateway.ts` for implementation details.
