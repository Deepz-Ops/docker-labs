# Task 6: Volume Management and Data Backup

## Scenario
Our application stores critical user data in a PostgreSQL database. Implement a backup strategy.

## Requirements
- Setup PostgreSQL container with named volume
- Create a backup script that runs in a separate container
- Backup should be exported to host filesystem
- Implement restore functionality
- Schedule automated backups (document the approach)

## Provided Files
- `docker-compose.yml` starter
- `backup.sh` script template

## Deliverables
- Complete `docker-compose.yml` with volume configuration
- Working backup script
- Working restore script
- Documentation on backup/restore process

## Success Criteria
- Database data persists across container restarts
- Backup creates a `.sql` dump file on host
- Restore successfully recovers data
- Process is documented and repeatable

