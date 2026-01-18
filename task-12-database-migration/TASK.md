# Task 12: Database Migration Strategy

## Scenario
Implement a zero-downtime database migration strategy for a containerized application.

## Requirements
- Setup application with database (PostgreSQL/MySQL)
- Create migration scripts (schema changes)
- Implement init container for migrations
- Ensure migrations run before application starts
- Handle migration failures gracefully
- Support rollback capability

## Your Tasks
1. Create database migration scripts
2. Configure init containers in docker-compose.yml
3. Implement migration versioning
4. Create rollback scripts
5. Test migration and rollback process

## Deliverables
- `docker-compose.yml` with init containers
- Migration scripts (SQL or ORM-based like Alembic/Flyway)
- Rollback scripts
- Documentation of migration process
- Testing procedure

## Success Criteria
- Migrations run automatically on deployment
- Application doesn't start if migration fails
- Can rollback to previous version
- No data loss during migration
- Process is idempotent (can run multiple times safely)

## Migration Strategy
```
1. Container starts
2. Init container runs migrations
3. If migrations succeed → start application
4. If migrations fail → container exits with error
```

## Example Migration Files
```
migrations/
├── V001__initial_schema.sql
├── V002__add_users_table.sql
├── V003__add_orders_table.sql
└── rollback/
    ├── R002__rollback_users.sql
    └── R003__rollback_orders.sql
```

## Testing
```bash
# Deploy with migrations
docker compose up -d

# Check migration status
docker compose logs migration

# Test rollback
./rollback.sh V002
```
