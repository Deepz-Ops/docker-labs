# Task 3: Multi-Stage Build Optimization

## Scenario
Our Node.js application Docker image is 1.2GB. This is too large for our deployment pipeline.

## Requirements
- Refactor the provided Dockerfile using multi-stage builds
- Reduce final image size to under 150MB
- Application must still work exactly as before
- Do not compromise functionality for size

## Provided Files
- `unoptimized-dockerfile/Dockerfile` - Current bloated Dockerfile
- `src/` - Application source code
- `package.json` - Dependencies

## Your Tasks
1. Analyze the current Dockerfile and image size
2. Create an optimized Dockerfile using multi-stage builds
3. Compare before/after image sizes
4. Document optimization techniques used

## Deliverables
- Optimized `Dockerfile` (in task root)
- SOLUTION.md with before/after comparison
- Explanation of optimization techniques

## Success Criteria
- Image size reduced by at least 80%
- Final image under 150MB
- Application runs identically
- Build time is reasonable (under 5 minutes)

## Hints
- Use multi-stage builds
- Consider using alpine base images
- Remove development dependencies
- Use .dockerignore
- Only copy necessary files to final stage
