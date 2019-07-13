# project_breast_cancer

# Workflow

* Landing page

    * Content
        * Visualizations
        * Stats
        * Breast cancer info
        * Link to app

    * Includes:
        * Index.html
        * CSS
        * app.py - flask server
            * includes path that links to ML part
        * data.py
            * futz with data
            * load it into database - SQLite
        * Tableau dashboard
        * logic.js

* Machine Learning

    * Inputs for each feature
    * Random button
    * Submit button

    * html page
    * js page
    * ml.py
        * develop, test, and validate model in notebook first
        * also include random function in ml.py
            * will be another route in our flask program
