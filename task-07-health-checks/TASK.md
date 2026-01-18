# Task 7: Health Checks and Auto-Recovery

## Scenario
Our API service occasionally becomes unresponsive. Implement health checks to automatically restart unhealthy containers.

## Requirements
- Add health checks to the provided application
- Configure Docker to restart unhealthy containers
- Health check should verify actual application functionality (not just port)
- Implement graceful shutdown
- Add startup probe for slow-starting services

## Provided Files
- `app.py` - Flask application
- `requirements.txt`

## Deliverables
- Updated `Dockerfile` with HEALTHCHECK
- `docker-compose.yml` with health check configuration
- Health check endpoint in application
- Documentation of health check strategy

## Success Criteria
- Container restarts when application is unhealthy
- Health check accurately reflects application state
- No false positives during startup
- Graceful shutdown on container stop

## Testing
```bash
# Start with health checks
docker compose up -d

# Check health status
docker compose ps

# Simulate failure (kill the app process inside container)
docker compose exec app pkill -9 python

# Watch container restart
docker compose ps
```
