# Import dependencies
import csv
import os
import pandas as pd 
import pickle
from flask import (
    Flask,
    render_template,
    request,
    jsonify)

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
db_cursor = db_connection.cursor()
# executing cursor with execute method and pass SQL query

db_cursor.execute("CREATE DATABASE Cancer11_db")
# get list of all databases
#db_cursor.execute("SHOW DATABASES")
#print all databases
# for db in db_cursor:
#     print(db)



# app.config['Mysql'] = 'Cancer4_db'

#cancerSql = Mysql(app)
# csv_data = pd.read_csv('datasets\Wisconsindata.csv')
csv_data = csv.reader('datasets\abc.csv')
firstline = True
for row in csv_data:
    if firstline:
        #skip first line
        firstline = False
    else:


        

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
        db_cursor.execute('INSERT INTO testcsv(id,diagnosis,radius_mean) VALUES("%s", "%s", "%s")', row)

#close the connection to the database.
db_cursor.close()
# Clean data and import into database
# clean_machinelearn()

#Create routes 

@app.route("/")
def index():
    """Render the homepage."""


    return render_template("index.html")


@app.route("/calculator")
def calc():
    """Link to calculator for determining malignancy"""
    


@app.route("/submit", methods=["GET", "POST"])
def submit():
    """Submit data to calculator"""

    # Collect input data when submit button is selected
    if request.method == "POST":
        radius_mean = request.form["radius_mean"]
        texture_mean = request.form["texture_mean"]
        perimeter_mean = request.form["perimeter_mean"]
        smoothness_mean = request.form["smoothness_mean"]
        compactness_mean = request.form["compactness_mean"]
        concavity_mean = request.form["concavity_mean"]
        concave points_mean = request.form["concave points_mean"]
        concavity_mean = request.form["concavity_mean"]
        symmetry_mean = request.form["symmetry_mean"]
        fractal_dimension_mean = request.form["fractal_dimension_mean"]
        symmetry_mean = request.form["symmetry_mean"]
        radius_se = request.form["radius_se"]
        texture_se = request.form["texture_se"]
        radius_se = request.form["radius_se"]
        perimeter_se = request.form["perimeter_se"]
        area_se = request.form["area_se"]
        smoothness_se = request.form["smoothness_se"]
        compactness_se = request.form["compactness_se"]
        concavity_se = request.form["concavity_se"]
        concave points_se = request.form["concave points_se"]
        concavity_se = request.form["concavity_se"]
        symmetry_se = request.form["symmetry_se"]
        fractal_dimension_se = request.form["fractal_dimension_se"]
        symmetry_se = request.form["symmetry_se"]
        radius_worst = request.form["radius_worst"]
        texture_worst = request.form["texture_worst"]
        perimeter_worst = request.form["perimeter_worst"]
        area_worst = request.form["area_worst"]
        smoothness_worst = request.form["smoothness_worst"]
        compactness_worst = request.form["compactness_worst"]
        concavity_worst = request.form["concavity_worst"]
        concave_points_worst = request.form["concave_points_worst"]
        symmetry_worst = request.form["symmetry_worst"]
        fractal_dimension_worst = request.form["fractal_dimension_worst"]

    # Construct list parameter for model from input
    X = [radius_mean, texture_mean, perimeter_mean, area_mean, smoothness_mean,/
        compactness_mean, concavity_mean, concave points_mean, symmetry_mean,/
        fractal_dimension_mean, radius_se , texture_se, perimeter_se, area_se,/
        smoothness_se, compactness_se, concavity_se, concave points_se, symmetry_se,/
        fractal_dimension_se, radius_worst, texture_worst, perimeter_worst, area_worst,/
        smoothness_worst, compactness_worst, concavity_worst, concave points_worst,/
        symmetry_worst, fractal_dimension_worst]
        
    # UPDATE NAME OF MODEL BASED ON WHERE WE SAVE IT
    # Load model and predict diagnosis
    model = pickle.load(open(cancer_model))
    diagnosis = model.predict(X)

    return diagnosis


if __name__ == "__main__":
    app.run(debug=False, port=8000, host="localhost", threaded=True)