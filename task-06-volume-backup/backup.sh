#!/bin/bash
# Backup script template - Complete this script

BACKUP_DIR="./backups"
TIMESTAMP=$(date +%Y-%m-%d_%H-%M-%S)
BACKUP_FILE="backup_${TIMESTAMP}.sql"

# TODO: Create backup directory if it doesn't exist

# TODO: Run pg_dump using docker exec or docker run
# Hint: docker exec <container> pg_dump -U postgres dbname > $BACKUP_DIR/$BACKUP_FILE

echo "Backup completed: $BACKUP_FILE"
