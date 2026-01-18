# Task 3 Solution

## Image Size Comparison

### Before Optimization
```bash
# Add docker images output showing unoptimized image
REPOSITORY    TAG       SIZE
product-api   old       1.2GB
```

### After Optimization
```bash
# Add docker images output showing optimized image
REPOSITORY    TAG       SIZE
product-api   new       ???MB
```

## Optimization Techniques Used

### 1. Multi-Stage Build
**What:** 
**Why:** 
**Impact:** 

### 2. Alpine Base Image
**What:** 
**Why:** 
**Impact:** 

### 3. Production Dependencies Only
**What:** 
**Why:** 
**Impact:** 

### 4. .dockerignore
**What:** 
**Why:** 
**Impact:** 

## Final Dockerfile
```dockerfile
# Your optimized Dockerfile here
```

## Build and Test Commands
```bash
# Unoptimized
docker build -f unoptimized-dockerfile/Dockerfile -t product-api:old .

# Optimized
docker build -t product-api:new .

# Compare sizes
docker images | grep product-api
```

## Results
- Size reduction: ____%
- Build time: ___
- Functionality: ✓ Working / ✗ Broken

## What I Learned
