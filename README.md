# Docker Basics – Hands-on Labs for Juniors

This repository contains **real-world Docker lab exercises** designed for junior engineers.
Each lab mimics tasks commonly assigned in DevOps teams and focuses on **practical understanding**
rather than theory.

> ⚠️ Dockerfiles and Docker commands are intentionally **not provided**.  
> Juniors are expected to write Dockerfiles and run containers on their own.

---

## Lab #01: Two-Tier Application Using Multiple Docker Containers

### Description
Deploy a simple **two-tier application** where:
- Frontend runs in one Docker container
- Backend runs in another Docker container

Both containers must communicate using **Docker networking**.  
The frontend should call the backend API and display the response.

---

### Required files (provided)

#### backend/app.py
```python
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api")
def api():
    return jsonify({
        "service": "backend",
        "message": "Hello from Backend container"
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
```

#### frontend/index.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>Two-Tier App</title>
</head>
<body>
    <h1>Frontend Container</h1>

    <button onclick="callBackend()">Call Backend</button>
    <p id="result"></p>

    <script>
        function callBackend() {
            fetch("http://backend:5000/api")
                .then(response => response.json())
                .then(data => {
                    document.getElementById("result").innerText = data.message;
                })
                .catch(error => {
                    document.getElementById("result").innerText =
                        "Backend service not reachable";
                });
        }
    </script>
</body>
</html>
```

---

## Lab #02: Containerizing a Single Application Using Dockerfile

### Description
Containerize a simple application using a Dockerfile.
Build a custom image, run it as a container, expose the required port,
and verify that the application is accessible from the browser.

---

### Required files (provided)

#### app.py
```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello from Dockerized Application!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
```

**OR (Static application option)**

#### index.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>Docker Lab</title>
</head>
<body>
    <h1>Docker Single Container Lab</h1>
    <p>This page is served from inside a Docker container.</p>
</body>
</html>
```

---

## Lab #03: Data Persistence Using Docker Volumes

### Description
Run a containerized application that requires persistent storage.
Attach a Docker volume to the container, modify data inside the container,
restart the container, and verify that the data persists.

---

### Required files (provided)

#### index.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>Docker Volume Lab</title>
</head>
<body>
    <h1>Docker Volume Test</h1>
    <p>If this content persists after container restart, the volume works.</p>
</body>
</html>
```

**OR**

#### data.txt
```text
This file is stored inside a Docker volume.
Restart the container and verify this file still exists.
```

---

## Notes
- One service per container
- Do not hardcode container IPs
- Use Docker networking for inter-container communication
- Expose only required services
- Use volumes for persistent data

---

## Learning Outcomes
By completing these labs, you will understand:
- Docker images vs containers
- Writing basic Dockerfiles
- Docker networking fundamentals
- Volume-based persistence
- Real-world container usage patterns

---

Happy Learning 🚀
