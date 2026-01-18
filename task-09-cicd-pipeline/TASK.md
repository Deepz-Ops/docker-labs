# Task 9: Build a CI/CD Pipeline Integration

## Scenario
Integrate Docker image building into our CI/CD pipeline (GitHub Actions or GitLab CI).

## Requirements
- Create a CI/CD configuration file
- Build Docker image on every commit
- Tag images with commit SHA and branch name
- Push to Docker Hub or private registry
- Run basic tests in containers before pushing
- Only push to registry on main branch

## Your Tasks
1. Create `.github/workflows/docker.yml` OR `.gitlab-ci.yml`
2. Create optimized Dockerfile for CI/CD
3. Create test script that runs in container
4. Document the pipeline workflow

## Deliverables
- CI/CD configuration file
- Dockerfile optimized for CI/CD (layer caching)
- Test script
- SOLUTION.md documenting the pipeline

## Success Criteria
- Pipeline builds image successfully
- Tests run and must pass before push
- Images tagged correctly (commit SHA, branch name, latest)
- Only successful builds pushed to registry
- Build uses layer caching for speed

