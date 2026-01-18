# Task 11: Security Hardening

## Scenario
Audit and secure the provided Dockerfile and Docker Compose setup according to security best practices.

## Requirements
- Run containers as non-root user
- Scan image for vulnerabilities
- Implement least privilege principles
- Use Docker secrets for sensitive data
- Remove unnecessary packages and files
- Implement read-only root filesystem where possible

## Provided Files
- `insecure-app/` - Application with security issues
- `insecure-dockerfile/Dockerfile` - Dockerfile with security problems

## Your Tasks
1. Identify all security issues in provided files
2. Create hardened Dockerfile
3. Scan images for vulnerabilities (use Trivy or similar)
4. Implement Docker secrets
5. Document all security improvements

## Deliverables
- Hardened `Dockerfile`
- Secure `docker-compose.yml`
- Vulnerability scan report (before/after)
- Security checklist document
- SOLUTION.md explaining each improvement

## Success Criteria
- No critical vulnerabilities in final image
- Containers run as non-root user
- Secrets not visible in environment variables or image layers
- Image size reduced (security through minimalism)
- All security best practices documented

## Security Checklist
- [ ] Non-root user
- [ ] Minimal base image
- [ ] No secrets in image layers
- [ ] Read-only root filesystem
- [ ] Dropped capabilities
- [ ] Resource limits
- [ ] Health checks
- [ ] Vulnerability scanning
- [ ] .dockerignore file
- [ ] Multi-stage build
