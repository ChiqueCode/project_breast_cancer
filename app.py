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

# import MySQLdb

#Set up Flask
app = Flask(__name__)

# For creating create db
# Below line  is hide your warning 
# cursor.execute("SET sql_notes = 0; ")
# create db here....
# cursor.execute("create database IF NOT EXISTS Cancer_db")

import mysql.connector as Mysql
from config import pwd
db_connection = Mysql.connect(
 host= "localhost",
 user= "root",
 passwd= pwd
)
# creating database_cursor to perform SQL operation
# db_cursor = db_connection.cursor()
# executing cursor with execute method and pass SQL query

# db_cursor.execute("CREATE DATABASE Cancer11_db")
# get list of all databases
#db_cursor.execute("SHOW DATABASES")
#print all databases
# for db in db_cursor:
#     print(db)



# app.config['Mysql'] = 'Cancer4_db'

#cancerSql = Mysql(app)
# csv_data = pd.read_csv('datasets\Wisconsindata.csv')
# csv_data = csv.reader('datasets\abc.csv')
# firstline = True
# for row in csv_data:
#     if firstline:
#         #skip first line
#         firstline = False
#     else:


        

    # db_cursor.execute('INSERT INTO testcsv(id,diagnosis,radius_mean,\
    #     texture_mean,perimeter_mean,area_mean,smoothness_mean,\
    #     compactness_mean,concavity_mean,concave_points_mean,symmetry_mean,\
    #     fractal_dimension_mean,radius_se,texture_se,perimeter_se,area_se,\
    #     smoothness_se,compactness_se,concavity_se,concave_points_se,\
    #     symmetry_se,fractal_dimension_se,radius_worst,texture_worst,perimeter_worst,\
    #     area_worst,smoothness_worst,compactness_worst,concavity_worst,\
    #     concave_points_worst,symmetry_worst,fractal_dimension_worst\
    #     )' \
    #     'VALUES("%s", "%s", "%s","%s", "%s", "%s","%s", "%s", "%s","%s", "%s", "%s",\
    #             "%s", "%s", "%s","%s", "%s", "%s","%s", "%s", "%s","%s", "%s", "%s",\
                # "%s", "%s", "%s","%s", "%s", "%s","%s", "%s")', row)
        # db_cursor.execute('INSERT INTO testcsv(id,diagnosis,radius_mean) VALUES("%s", "%s", "%s")', row)

#close the connection to the database.
# db_cursor.close()
# Clean data and import into database
# clean_machinelearn()

#Create routes 

@app.route("/")
def index():
    """Render the homepage."""


    return render_template("index.html")


@app.route("/calculator")
def calc():
    """Calculator for determining diagnosis"""
    


@app.route("/submit", methods=["GET", "POST"])
def submit():
    """Submit data to calculator"""


    # Collect input data when submit button is selected
    if request.method == "POST":
        
        # Retrieve parameters and add to sample data
        sample = []
        for i in range(30):
           sample.append(request.form[f"parameter[{i}]"])
    
    # Load model and predict diagnosis
    model = load('cancer_model.joblib')
    prediction = model.predict(sample)
    if prediction == 0:
        diagnosis = "Benign"
    else:
        diagnosis = "Malignant"

    return diagnosis


@app.route("/random")
def random():
    """Returns random sample as list"""


# Load dataset from sklearn and set X to Feature array
cancer = load_breast_cancer()
X = cancer.data

# Select random feature
n = random.randint(0, 568)
sample = X[n]

# Is this a render template thing?    
return sample


if __name__ == "__main__":
    app.run(debug=False, port=8000, host="localhost", threaded=True)
