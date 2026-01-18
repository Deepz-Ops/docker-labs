# UNOPTIMIZED DOCKERFILE
# This Dockerfile creates a bloated image (~1.2GB)

FROM node:18

# Install unnecessary packages
RUN apt-get update && apt-get install -y \
    git \
    curl \
    vim \
    nano \
    wget \
    build-essential \
    python3 \
    python3-pip

WORKDIR /app

# Copy everything including node_modules, .git, etc.
COPY . .

# Install all dependencies including dev dependencies
RUN npm install

# Keep dev dependencies
# No cleanup

EXPOSE 4000

CMD ["npm", "start"]
