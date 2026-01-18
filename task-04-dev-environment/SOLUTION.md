# Task 4 Solution

## Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Frontend   │────▶│   Backend   │────▶│  Database   │
│  (Port 3000)│     │  (Port 5000)│     │ (PostgreSQL)│
└─────────────┘     └─────────────┘     └─────────────┘
```

## Setup Instructions

### 1. Environment Configuration
```bash
cp .env.example .env
# Edit .env with your configuration
```

### 2. Start Services
```bash
docker compose up -d
```

### 3. Verify Services
```bash
docker compose ps
docker compose logs
```

### 4. Test Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api/users
- Health Check: http://localhost:5000/health

## Docker Compose Configuration

### Services Created
1. **Frontend**: Nginx serving static HTML
2. **Backend**: Flask API
3. **Database**: PostgreSQL with persistent volume

### Networks
- Custom bridge network for inter-service communication

### Volumes
- Database volume for data persistence

## Testing Data Persistence

```bash
# Add a user through the UI
# Stop containers
docker compose down

# Start again
docker compose up -d

# Verify data persists
curl http://localhost:5000/api/users
```

## Challenges Faced
1. 
2. 
3. 

## What I Learned
