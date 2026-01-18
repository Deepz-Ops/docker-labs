from flask import Flask, render_template, request, jsonify
import os
from datetime import datetime

app = Flask(__name__)

# In-memory storage for demo purposes
tasks = [
    {"id": 1, "title": "Learn Docker", "completed": False, "created_at": "2026-01-18"},
    {"id": 2, "title": "Build a Flask app", "completed": True, "created_at": "2026-01-17"},
    {"id": 3, "title": "Deploy to production", "completed": False, "created_at": "2026-01-16"}
]

@app.route('/')
def index():
    """Home page with task list"""
    return render_template('index.html', tasks=tasks)

@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    """API endpoint to get all tasks"""
    return jsonify({"tasks": tasks, "count": len(tasks)})

@app.route('/api/tasks', methods=['POST'])
def add_task():
    """API endpoint to add a new task"""
    data = request.get_json()
    
    if not data or 'title' not in data:
        return jsonify({"error": "Title is required"}), 400
    
    new_task = {
        "id": len(tasks) + 1,
        "title": data['title'],
        "completed": data.get('completed', False),
        "created_at": datetime.now().strftime("%Y-%m-%d")
    }
    
    tasks.append(new_task)
    return jsonify(new_task), 201

@app.route('/api/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    """API endpoint to update a task"""
    task = next((t for t in tasks if t['id'] == task_id), None)
    
    if not task:
        return jsonify({"error": "Task not found"}), 404
    
    data = request.get_json()
    task['title'] = data.get('title', task['title'])
    task['completed'] = data.get('completed', task['completed'])
    
    return jsonify(task)

@app.route('/api/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    """API endpoint to delete a task"""
    global tasks
    task = next((t for t in tasks if t['id'] == task_id), None)
    
    if not task:
        return jsonify({"error": "Task not found"}), 404
    
    tasks = [t for t in tasks if t['id'] != task_id]
    return jsonify({"message": "Task deleted successfully"})

@app.route('/health')
def health():
    """Health check endpoint"""
    return jsonify({
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "tasks_count": len(tasks)
    })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
