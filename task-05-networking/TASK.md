# Task 5: Implement Container Networking

## Scenario
We have a microservices application where services need to communicate securely without exposing unnecessary ports to the host.

## Requirements
- Create 3 services: `api-gateway`, `user-service`, `order-service`
- Only `api-gateway` should be accessible from host (port 8080)
- `user-service` and `order-service` should only be accessible from `api-gateway`
- Use custom Docker networks
- Implement service discovery by container name

## Provided Files
- `api-gateway/` - Gateway service code
- `user-service/` - User service code
- `order-service/` - Order service code

## Your Tasks
1. Create `docker-compose.yml` with proper network configuration
2. Configure network isolation
3. Test inter-service communication
4. Document the network architecture

## Deliverables
- `docker-compose.yml` with network configuration
- Network diagram (can be ASCII art or image)
- Test commands proving network isolation
- SOLUTION.md

## Success Criteria
- Only port 8080 exposed to host
- `api-gateway` can reach other services
- Other services cannot be reached directly from host
- Services communicate using container names

## Testing
```bash
docker compose up -d
curl http://localhost:8080/users  # Should work
curl http://localhost:8081/users  # Should fail (port not exposed)
docker compose exec api-gateway curl http://user-service:8081/users  # Should work
```
