# Task 14: Logging and Monitoring Setup

## Scenario
Implement comprehensive logging and monitoring for our containerized application.

## Requirements
- Configure structured logging (JSON format)
- Implement log rotation
- Setup log aggregation (ELK, Loki, or simple solution)
- Add application metrics
- Create monitoring dashboard
- Configure alerts for critical issues

## Your Tasks
1. Configure application to output structured logs
2. Setup log aggregation system
3. Implement log rotation
4. Add metrics collection
5. Create monitoring dashboard
6. Configure basic alerts

## Deliverables
- Logging configuration for all services
- Log aggregation setup (Docker Compose)
- Monitoring dashboard configuration
- Alert rules
- Documentation

## Success Criteria
- All container logs centralized
- Logs searchable and filterable
- Metrics visible in dashboard
- Alerts trigger on defined conditions
- Logs don't fill up disk space

## Suggested Stack Options

### Option 1: ELK Stack
- Elasticsearch
- Logstash / Fluentd
- Kibana

### Option 2: Lightweight
- Loki
- Promtail
- Grafana

### Option 3: Simple
- Filebeat
- Centralized log files
- Basic monitoring

## Logging Best Practices
```json
{
  "timestamp": "2026-01-18T22:42:00Z",
  "level": "INFO",
  "service": "api",
  "message": "Request processed",
  "request_id": "abc123",
  "duration_ms": 45,
  "status_code": 200
}
```

## Metrics to Collect
- Request count
- Response time
- Error rate
- CPU/Memory usage
- Database connections
- Queue length

## Alert Examples
- Error rate > 5%
- Response time > 1s
- Memory usage > 80%
- Disk space < 10%
