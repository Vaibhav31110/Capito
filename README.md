# Capito Finance

Capito Finance is a full-stack microfinance management platform with a Node.js/Express API, MongoDB persistence, and a React + Tailwind CSS frontend.

## Tech Stack

- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Frontend:** React, Vite, Tailwind CSS
- **Auth:** JWT access + refresh tokens with role-based access control

## Project Structure

```
backend/   # Express API
frontend/  # React app
```

## Getting Started

### Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

## Environment Variables

Backend (`backend/.env`):

- `PORT`
- `MONGO_URI`
- `JWT_SECRET`
- `JWT_REFRESH_SECRET`
- `JWT_EXPIRES_IN`
- `JWT_REFRESH_EXPIRES_IN`
- `CORS_ORIGIN`

Frontend (`frontend/.env`):

- `VITE_API_BASE_URL`
