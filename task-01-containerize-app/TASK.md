# Task 1: Containerize a Legacy Application

## Scenario
We have a Python Flask application that currently runs directly on the server. Your job is to containerize it.

## Requirements
- Create a Dockerfile for the provided Flask application
- The container should run on port 5000
- Application should start automatically when container runs
- Image size should be under 200MB
- Use Python 3.9 or later as base image

## Provided Files
- `app.py` - The Flask application
- `requirements.txt` - Python dependencies
- `templates/` - HTML templates

## Your Tasks
1. Create a `Dockerfile`
2. Build the Docker image
3. Run the container
4. Test the application

## Deliverables
- `Dockerfile`
- Commands to build and run the container (document in SOLUTION.md)
- Screenshot showing the application running in a container

## Success Criteria
- Application accessible at `http://localhost:5000`
- Container runs without errors
- Can stop and restart container without data loss
- Image size is under 200MB

## Testing
```bash
# Build the image
docker build -t flask-app .

# Run the container
docker run -p 5000:5000 flask-app

# Test the application
curl http://localhost:5000
```

## Hints
- Consider using `python:3.9-slim` or `python:3.9-alpine` for smaller image size
- Don't forget to set the working directory
- Make sure to copy all necessary files
- Set the correct CMD to start the Flask application
