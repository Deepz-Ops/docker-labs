#!/bin/bash
# Restore script template - Complete this script

if [ -z "$1" ]; then
    echo "Usage: ./restore.sh <backup_file>"
    exit 1
fi

BACKUP_FILE=$1

# TODO: Restore database from backup file
# Hint: docker exec -i <container> psql -U postgres dbname < $BACKUP_FILE

echo "Restore completed from: $BACKUP_FILE"
