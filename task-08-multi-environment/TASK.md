# Task 8: Multi-Environment Configuration

## Scenario
Deploy the same application to development, staging, and production with different configurations.

## Requirements
- Create Docker Compose configurations for 3 environments
- Use environment-specific variables (DB credentials, API keys, etc.)
- Production should have resource limits
- Development should have debug mode enabled
- Use Compose override files appropriately

## Provided Files
- `app/` - Sample application
- `docker-compose.yml` - Base configuration

## Deliverables
- `docker-compose.yml` (base)
- `docker-compose.dev.yml`
- `docker-compose.staging.yml`
- `docker-compose.prod.yml`
- `.env.example` for each environment
- README explaining deployment to each environment

## Success Criteria
- Can deploy to any environment with single command
- Configurations don't overlap incorrectly
- Secrets are not hardcoded
- Resource limits applied in production

## Commands
```bash
# Development
docker compose -f docker-compose.yml -f docker-compose.dev.yml up

# Staging
docker compose -f docker-compose.yml -f docker-compose.staging.yml up

# Production
docker compose -f docker-compose.yml -f docker-compose.prod.yml up
```
