# Code for the Cure

## Website

INSERT WEBSITE HERE

## Summary

We have created a landing page with statistics and visualizations on breast cancer both globally and nationally. The visualizations are interactive tableau dashboards and can be manipulated to view data on breast cancer by various parameters.

This page also links to an app developed using machine learning algorithms that can be used by health care professionals to better predict whether a cell from breast tissue is malignant before being sent to a pathologist.

## Group Members

* Sonya Bogoslavskaya
* Arjun Subramaniam
* Smita Sharma
* Mike Lygas
* Gretel Uptegrove

## Languages and Libraries Used

```
Python
    pandas
    matplotlib
    sklearn
    tensorflow
    joblib
    random
    flask
    UPDATE AS NECESSARY
Javascript
    d3
    INSERT ANYTHING ELSE
HTML
CSS
```

## Motivation

Breast cancer is the most prevalent type of cancer across the globe, and the United States specifically has the highest rate of cancer diagnosis. Currently, the only way to diagnose breast cancer is to have the tissue inspected by a pathologist; however, many medical centers do not have in-house pathologist, requiring these tissue samples to be sent to an outside facility, sometimes located a great distance. This can cause a significant delay in the start of treatment. Any delay in treatment can have a detrimental affect on prognosis.

If, however, medical personnel had access to a tool that would bypass the need for a pathologist, treatment could begin much faster. The app we developed was designed to do just this. Using various measurements of a single cell in suspicious breast tissue, it can predict the chances of that cell being malignant with a 95% accuracy rate. The dataset used to do this was very small; however, and before real-world implementation, it would have to be trained and tested on a much larger data set.

## Sources

* Breast Cancer Wisconsin (Diagnostic) Data Set [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/datasets/Breast+Cancer+Wisconsin+(Diagnostic))
  * Data set with features computed from a digitized image of a fine needle aspirate (FNA) of a breast mass. They describe characteristics of the cell nuclei present in the image.
  * References:
    * W.N. Street, W.H. Wolberg and O.L. Mangasarian. Nuclear feature extraction for breast tumor diagnosis. IS&T/SPIE 1993 International Symposium on Electronic Imaging: Science and Technology, volume 1905, pages 861-870, San Jose, CA, 1993.
    * O.L. Mangasarian, W.N. Street and W.H. Wolberg. Breast cancer diagnosis and prognosis via linear programming. Operations Research, 43(4), pages 570-577, July-August 1995.
    * W.H. Wolberg, W.N. Street, and O.L. Mangasarian. Machine learning techniques to diagnose breast cancer from fine-needle aspirates. Cancer Letters 77 (1994) 163-171.

INSERT DATA SET INFORMATION PER THE FOLLOWING:

* Title of Data Set [Name of Website](website http)
  * Description on data set and any queries used to get it.
  
* Breast Cancer Data Set [https://www.bcsc-research.org/]
  * Data set with Breast Cancer data displaying information such as age of occurance, tumor sizes, node-caps, and region of breast where tumors exist
  * Michalski,R.S., Mozetic,I., Hong,J., & Lavrac,N. (1986). The Multi-Purpose Incremental Learning System AQ15 and its Testing Application to Three Medical Domains. In Proceedings of the Fifth National Conference on Artificial Intelligence, 1041-1045, Philadelphia, PA: Morgan Kaufmann. – accuracy range: 66%-72% – Clark,P. & Niblett,T. (1987). Induction in Noisy Domains. In Progress in Machine Learning (from the Proceedings of the 2nd European Working Session on Learning), 11-30, Bled, Yugoslavia: Sigma Press. – 8 test results given: 65%-72% accuracy range – Tan, M., & Eshelman, L. (1988). Using weighted networks to represent classification knowledge in noisy domains. Proceedings of the Fifth International Conference on Machine Learning, 121-134, Ann Arbor, MI. – 4 systems tested: accuracy range was 68%-73.5% – Cestnik,G., Konenenko,I, & Bratko,I. (1987). Assistant-86: A Knowledge-Elicitation Tool for Sophisticated Users. In I.Bratko & N.Lavrac (Eds.) Progress in Machine Learning, 31-45, Sigma Press. – Assistant-86: 78% accuracy


## Workflow

### Step 1: Data Extraction

* Downloaded data as csv files from INSERT DATA SOURCES.
* Diagnostic Breast Cancer Data Set can be loaded directly from the scikit-learn library.

### Step 2: Data Cleaning

* Cleaned INSERT DATA utilizing python and the pandas library in a jupyter notebook.
  * INSERT DETAILS OF HOW WE CLEANED
* Saved data as csv's.

### INSERT ADDITIONAL STEP IF WE USE DATABASE

### Step 3: Tableau Visualizations

* Loaded INSERT DATA SETS into Tableau Desktop.
* Created multiple visualizations to best convey facts on breast cancer
* ARJUN AND/OR MIKE UPDATE THIS

### Step 4: Front-End Development

* SONYA - FILL THIS OUT

### Step 5: Machine Learning

* Used python and scikit-learn library, trained and tested multiple models on the Diagnostic Breast Cancer in a jupyter notebook.
  * GRETEL - INSERT ALL MODELS TESTED
* Determined the Random Forest model produced the most accurate results and saved this model to be used in the app.

### Step 6: Flask Script

* INSERT DATABASE CODE IF WE GO THAT ROUTE; MIGHT NEED TO REARRANGE THE STEPS A BIT.
* Used python and flask library to set up routes to render html files.
* Developed `/submit` route using joblib and sklearn that returns a diagnosis prediction based on data entered in the calculator form.
* Developed `/random` route using random library that returns a random sample from the Breast Cancer Diagnosis data set.

### Step 7: Deploy on Heroku

* Created a `requirements.txt` and a `Procfile`.
* Deployed app on Heroku.
