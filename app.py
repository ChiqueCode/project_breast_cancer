# Import dependencies

import csv
import os
  
from flask import Flask, render_template, request
import pandas as pd 
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

if __name__ == "__main__":
    app.run(debug=False, port=8000, host="localhost", threaded=True)