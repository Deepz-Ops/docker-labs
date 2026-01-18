from flask import Flask
import os

app = Flask(__name__)

# Insecure: Using hardcoded credentials
API_KEY = os.getenv('API_KEY', 'default-insecure-key')
DB_PASSWORD = os.getenv('DB_PASSWORD', 'default-password')

@app.route('/')
def home():
    # Insecure: Exposing sensitive information
    return f"API Key: {API_KEY}, DB Password: {DB_PASSWORD}"

@app.route('/health')
def health():
    return {'status': 'healthy'}

if __name__ == '__main__':
    # Insecure: Running in debug mode in production
    app.run(host='0.0.0.0', port=3000, debug=True)
