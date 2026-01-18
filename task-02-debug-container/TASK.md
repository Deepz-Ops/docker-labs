# Task 2: Debug a Broken Container

## Scenario
A junior developer created a Dockerfile for a Node.js application, but the container keeps crashing. Find and fix all issues.

## Requirements
- Analyze the provided broken Dockerfile
- Identify all issues (there are at least 3)
- Fix the Dockerfile
- Document what was wrong and why

## Provided Files
- `broken-dockerfile/Dockerfile` - The broken Dockerfile (DO NOT MODIFY THIS)
- `app.js` - Node.js application
- `package.json` - Dependencies

## Your Tasks
1. Analyze the broken Dockerfile
2. Create a new fixed `Dockerfile` in the root of this task directory
3. Document all issues found in SOLUTION.md
4. Build and run the fixed container

## Deliverables
- Fixed `Dockerfile` (in task root, not in broken-dockerfile/)
- SOLUTION.md explaining each issue and fix
- Working container demonstration

## Success Criteria
- Container builds successfully
- Container runs without crashing
- Application is accessible at http://localhost:3000
- All issues documented with explanations

## Common Issues to Look For
- Missing dependencies
- Incorrect file paths
- Wrong base image
- Missing EXPOSE or CMD
- Permission issues
- Port mismatches
