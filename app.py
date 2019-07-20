# Import dependencies
import csv
import os
import pandas as pd
import random
from flask import (
    Flask,
    render_template,
    request,
    jsonify)
from joblib import load
from sklearn.datasets import load_breast_cancer

#Set up Flask
app = Flask(__name__)


@app.route("/")
def index():
    """Render the homepage."""


    return render_template("index.html")


@app.route("/calculator")
def calc():
    """Renders calculator page"""


    return render_template("calculator.html")


@app.route("/features/<patientID>")
def features(patientID):
    """Returns list of features for given patient ID"""


    # Create list of feature names
    feature_names = ["Radius (worst)", "Texture (worst)", "Perimeter (worst)",\
        "Area (worst)", "Smoothness (worst)", "Compactness (worst)", \
        "Concavity (worst)", "Concave points (worst)", "Symmetry (worst)", \
        "Fractal dimension (worst)"]
    
    row = int(patientID) - 19000
   
    # Load dataset from sklearn and set X to feature array
    X = load_breast_cancer().data
    feature_values = X[row]

    # Select only features to be displayed
    feature_values = feature_values[20:]

    # Create dictionary of keys feature names and values
    features_dict = dict(zip(feature_names, feature_values))

    return jsonify(features_dict)


@app.route("/analyze/<patientID>")
def analyze(patientID):
    """Submit data to calculator"""


    # Translate patient ID to row
    row = int(patientID) - 19000

    # Load model and predict diagnosis
    model = load('cancer_model.joblib')
    prediction = model.predict(row)
    if prediction == 0:
        diagnosis = "Benign"
    else:
        diagnosis = "Malignant"

    return (diagnosis) 


if __name__ == "__main__":
    app.run(debug=False, port=8000, host="localhost", threaded=True)
