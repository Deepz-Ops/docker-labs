# INSECURE DOCKERFILE - IDENTIFY AND FIX ALL SECURITY ISSUES

FROM ubuntu:latest

# Running as root (Issue #1)
# No user specified

# Installing unnecessary packages (Issue #2)
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    curl \
    wget \
    vim \
    git \
    sudo \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copying everything including secrets (Issue #3)
COPY . .

# Hardcoded secrets (Issue #4)
ENV API_KEY="sk-1234567890abcdef" \
    DB_PASSWORD="admin123"

# Installing packages as root (Issue #5)
RUN pip3 install -r requirements.txt

# Exposing unnecessary ports (Issue #6)
EXPOSE 22 3000 8080 9000

# Running as root (Issue #7)
CMD ["python3", "app.py"]
