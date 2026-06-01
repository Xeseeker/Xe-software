# XE Software - Full Stack Application

This is a full-stack application with a Next.js frontend and Express backend.

## Project Structure

```
xe-software/
├── backend/           # Express.js API server (Port 3001)
│   ├── index.js      # Main server file
│   ├── package.json
│   └── .env
├── frontend/         # Next.js application (Port 3000)
│   ├── app/
│   │   ├── page.js  # Home page
│   │   └── layout.js
│   ├── package.json
│   ├── next.config.js
│   └── .env.local
└── package.json      # Root configuration
```

## Getting Started

### Option 1: Install Everything and Run Together

```bash
# Install dependencies for all projects
npm run install-all

# Run frontend and backend concurrently
npm run dev
```

### Option 2: Run Separately

**Terminal 1 - Backend:**

```bash
cd backend
npm install
npm run dev
```

**Terminal 2 - Frontend:**

```bash
cd frontend
npm install
npm run dev
```

## Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
  - Status endpoint: http://localhost:3001/api/status
  - Hello endpoint: http://localhost:3001/api/hello

## Configuration

### Backend (.env)

- `PORT=3001` - Backend server port
- `NODE_ENV=development` - Environment mode

### Frontend (.env.local)

- `NEXT_PUBLIC_API_URL=http://localhost:3001` - Backend API URL

## Available Endpoints

### Backend API

- `GET /api/status` - Check backend status
- `GET /api/hello` - Get a hello message
- `GET /health` - Health check

## Frontend Features

The frontend automatically connects to the backend on startup and displays:

- Backend status
- Connection timestamp
- Real-time connection test

## Production Build

```bash
# Build all projects
npm run build

# Start production build
npm start
```

## Troubleshooting

1. **Port already in use?**
   - Backend: `PORT=3002 npm run dev` (in backend folder)
   - Frontend: `npm run dev -- -p 3001` (in frontend folder)

2. **CORS errors?**
   - Ensure backend is running on port 3001
   - Frontend .env.local has correct API_URL

3. **Dependencies not installing?**
   - Delete node_modules and run npm install again
   - Clear npm cache: `npm cache clean --force`

## Next Steps

You can now:

- Add more API endpoints in `backend/index.js`
- Create more pages in `frontend/app/`
- Connect a database to the backend
- Add authentication
- Deploy to production
