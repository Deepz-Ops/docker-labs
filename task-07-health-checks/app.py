from flask import Flask, jsonify
import time
import os

app = Flask(__name__)

# Simulate slow startup
startup_time = time.time()
STARTUP_DELAY = 10  # seconds

# Health status
is_healthy = True

@app.route('/')
def home():
    return jsonify({'message': 'API is running', 'status': 'ok'})

@app.route('/api/data')
def get_data():
    if not is_healthy:
        return jsonify({'error': 'Service unhealthy'}), 503
    
    return jsonify({
        'data': [1, 2, 3, 4, 5],
        'timestamp': time.time()
    })

# TODO: Implement /health endpoint
# Should check:
# - Application is ready (past startup delay)
# - is_healthy flag is True
# - Can connect to dependencies (if any)

# TODO: Implement /ready endpoint for readiness probe

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
