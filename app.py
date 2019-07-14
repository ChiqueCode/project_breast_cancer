# Import dependencies

import sqlite3
import os

from flask import (
    Flask,
    render_template,
    jsonify)
from clean import (
    clean_machinelearn
    

# Set up Flask
app = Flask(__name__)

# Create database
conn = sqlite3.connect("cancer.db")

# Clean data and import into database
clean_machinelearn()

if __name__ == "__main__":
    app.run(debug=False, port=8000, host="localhost", threaded=True)