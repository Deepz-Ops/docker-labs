# Task 4: Setup a Development Environment

## Scenario
Create a local development environment for our web application that includes a database, backend API, and frontend.

## Requirements
- Use Docker Compose to orchestrate 3 services:
  - PostgreSQL database
  - Python/Node.js backend API
  - Simple HTML/JS frontend
- Services must communicate with each other
- Database data must persist between restarts
- Environment variables for configuration
- One command to start entire stack

## Provided Files
- `backend/` - Backend API starter code
- `frontend/` - Frontend starter code
- `database/` - Database init scripts

## Your Tasks
1. Create `docker-compose.yml`
2. Create Dockerfiles for each service
3. Configure networking between services
4. Setup volume for database persistence
5. Create `.env.example` file

## Deliverables
- `docker-compose.yml`
- `.env.example` file
- Individual Dockerfiles for each service
- SOLUTION.md with setup instructions

## Success Criteria
- `docker compose up` starts all services
- Frontend can communicate with backend
- Backend can read/write to database
- Data persists after `docker compose down` and `up`
- Environment variables properly configured

## Testing
```bash
docker compose up -d
curl http://localhost:3000  # Frontend
curl http://localhost:5000/api/users  # Backend
docker compose down
docker compose up -d  # Data should persist
```
