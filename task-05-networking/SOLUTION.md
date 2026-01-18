# Task 5 Solution

## Network Architecture

```
                    ┌─────────────────┐
                    │   Host Machine  │
                    │  (localhost)    │
                    └────────┬────────┘
                             │ Port 8080
                             │
                    ┌────────▼────────┐
                    │  API Gateway    │
                    │   (Port 8080)   │
                    └────────┬────────┘
                             │
            ┌────────────────┼────────────────┐
            │                │                │
    ┌───────▼──────┐  ┌─────▼──────┐  ┌─────▼──────┐
    │ User Service │  │Order Service│  │   Backend  │
    │ (Port 8081)  │  │ (Port 8082) │  │   Network  │
    │  (Internal)  │  │  (Internal) │  │            │
    └──────────────┘  └─────────────┘  └────────────┘
```

## Network Configuration

### Custom Networks Created
1. **backend-network**: Internal network for microservices

### Port Exposure
- API Gateway: 8080 (exposed to host)
- User Service: 8081 (internal only)
- Order Service: 8082 (internal only)

## Testing Network Isolation

### Test 1: Gateway Accessible from Host
```bash
curl http://localhost:8080
# Expected: Success
```

### Test 2: Services NOT Accessible from Host
```bash
curl http://localhost:8081/users
# Expected: Connection refused
```

### Test 3: Inter-Service Communication
```bash
docker compose exec api-gateway curl http://user-service:8081/users
# Expected: Success
```

## Docker Compose Configuration

```yaml
# Your docker-compose.yml here
```

## What I Learned
