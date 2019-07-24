# Import dependencies
import csv
import os
import pandas as pd
import random
import numpy as np
from flask import (
    Flask,
    render_template,
    request,
    jsonify)
from joblib import load
from sklearn.datasets import load_breast_cancer

# Sqlite 
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func

#Set up Flask
app = Flask(__name__)

# TODO: rename "datasets" to db for readability

# Database Setup
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///datasets/usa_percentage_state.sqlite"
datasets = SQLAlchemy(app)

# Reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(datasets.engine, reflect=True)

# Creating an easier reference
USA_percentage_state_table = Base.classes.usa_percentage_state_table

# Deaths/incidents percentage by state route
@app.route("/percentage")
def percentage_func():
    # stmt = datasets.session.query(USA_percentage_state_table).statement
    # df = pd.read_sql_query(stmt, datasets.session.bind)
    # return jsonify(list(df))

 #TODO: Change "sel" to select all

    sel = [
        USA_percentage_state_table.state,
        USA_percentage_state_table.abr,
        USA_percentage_state_table.lat,
        USA_percentage_state_table.lng,
        USA_percentage_state_table.incidence,
        USA_percentage_state_table.population,
        USA_percentage_state_table.percentage_incident,
        USA_percentage_state_table.death_count,
        USA_percentage_state_table.percentage_deaths
    ]

    # Query the records
    percentage_results = datasets.session.query(*sel).all()

    # Creating Pandas DataFrame
    percentage_df = pd.DataFrame(percentage_results, columns=["state", "abr", "lat", "lng", "incidence", "population", "percentage_incident", "death_count", "percentage_deaths"])

    # Return results in JSON format
    return jsonify(percentage_df.to_dict(orient="records"))


# Home route
@app.route("/")
def index():
    return render_template("index.html")


# Vizualisations/tableau route
@app.route("/story")
def story():
    return render_template("story.html")


# Case studies route
@app.route("/cases")
def cases():
    return render_template("cases.html")


# Demo/calculator route
@app.route("/calculator")
def calc():
    return render_template("calculator.html")


# Call to action/request assesment route 
@app.route("/cta")
def cta():
    return render_template("cta.html")
   

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
    row = (int(patientID) - 19000)

    # Load features, model, and scaler 
    X = load_breast_cancer().data
    model = load("cancer_model.joblib")
    scaler = load("scaler.out")

    # Get features for selected row and scale
    row = np.array([row])
    feature_values = X[row]
    feature_values = scaler.transform(feature_values)

    # Predict diagnosis
    prediction = model.predict(feature_values)
    if prediction == 0:
        diagnosis = "Benign"
    else:
        diagnosis = "Malignant"

    return jsonify(diagnosis)

if __name__ == "__main__":
    # TODO: Remeber to turn debugging off when going live! 
    app.run(debug=True, port=8000, host="localhost", threaded=True)
