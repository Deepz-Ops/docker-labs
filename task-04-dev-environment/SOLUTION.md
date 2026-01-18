# Task 4 Solution

## Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Frontend   │────>│   Backend   │────>│  Database   │
│  (Port 3000)│     │  (Port 5000)│     │ (PostgreSQL)│
└─────────────┘     └─────────────┘     └─────────────┘
```

## Docker Compose Configuration

### Services Created
1. **Frontend**: Nginx serving static HTML
2. **Backend**: Flask API
3. **Database**: PostgreSQL with persistent volume

### Networks
- Custom bridge network for inter-service communication

### Volumes
- Database volume for data persistence

## Challenges Faced
1. 
2. 
3. 

## What I Learned
