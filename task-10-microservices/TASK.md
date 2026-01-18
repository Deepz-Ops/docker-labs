# Task 10: Microservices Deployment

## Scenario
Deploy a complete microservices application with service discovery, load balancing, and centralized logging.

## Requirements
- Deploy at least 4 services:
  - API Gateway (Nginx or Traefik)
  - 2+ backend services (can be simple Node.js/Python services)
  - Database (PostgreSQL/MySQL)
  - Optional: Log aggregator (simple solution or ELK stack)
- Implement service discovery
- Configure load balancing for backend services
- Centralize logs from all containers
- Add basic monitoring

## Your Tasks
1. Design microservices architecture
2. Create docker-compose.yml for all services
3. Configure Nginx/Traefik as API gateway
4. Implement service discovery
5. Setup centralized logging
6. Create architecture diagram

## Deliverables
- Complete `docker-compose.yml`
- Individual service Dockerfiles
- Nginx/Traefik configuration
- Logging configuration
- Architecture diagram
- Comprehensive README

## Success Criteria
- All services communicate correctly
- Load balancing works (test with multiple requests)
- Logs accessible from central location
- Can scale backend services (`docker compose up --scale backend=3`)
- System is resilient to single service failure

## Architecture Example
```
Internet → API Gateway → [Service 1, Service 2, Service 3] → Database
                    ↓
              Log Aggregator
```
