# Task 13: Container Resource Management

## Scenario
Our containers are consuming too many resources and affecting other services. Implement proper resource limits.

## Requirements
- Analyze current resource usage
- Set appropriate CPU and memory limits
- Implement memory reservations
- Configure OOM (Out of Memory) behavior
- Test behavior under resource constraints
- Document resource allocation strategy

## Your Tasks
1. Create resource-intensive application
2. Monitor resource usage without limits
3. Configure CPU and memory limits in docker-compose.yml
4. Test application under resource constraints
5. Document findings and recommendations

## Deliverables
- Updated `docker-compose.yml` with resource limits
- Resource usage analysis (before/after)
- Load testing results
- Resource allocation documentation

## Success Criteria
- Containers respect CPU limits
- Memory limits prevent OOM on host
- Application performs adequately within limits
- Proper behavior when limits are reached
- No impact on other services

## Resource Configuration Example
```yaml
services:
  app:
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 256M
```

## Testing Commands
```bash
# Monitor resource usage
docker stats

# Stress test
docker compose exec app stress --cpu 4 --vm 2 --vm-bytes 1G

# Check if limits are enforced
docker inspect <container> | grep -A 10 "Memory"
```

## Analysis Required
- CPU usage patterns
- Memory consumption
- Disk I/O
- Network bandwidth
- Recommendations for production
