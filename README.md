# Code for the Cure

## Summary

We have created a website with our story and motivation on developing a breast cancer diagnosis tool. It includes statistics and interactive visualizations on breast cancer both globally and nationally.

The demo page is an app developed using machine learning algorithms that can be used by health care professionals to better predict whether a cell from breast tissue is malignant before being sent to a pathologist.

## Group Members

* Sonya Bogoslavskaya
* Arjun Subramaniam
* Smita Sharma
* Mike Lygas
* Gretel Uptegrove

## Languages, Libraries, and Tools Used

```
Python
    matplotlib
    sklearn
    joblib
    flask
    numpy
Javascript
    jQuery
HTML
    Foundation
CSS

Tableau
    Dashboard
    Story
```

## Motivation

Breast cancer is the most prevalent type of cancer across the globe, and the United States specifically has the highest rate of cancer diagnosis. Currently, the only way to diagnose breast cancer is to have the tissue inspected by a pathologist; however, many medical centers do not have in-house pathologist, requiring these tissue samples to be sent to an outside facility, sometimes located a great distance, causing sometimes significant delays in obtaining results.

Additionally, there has been a decline in the number of pathologists in the workforce while incidence of breast cancer is increasing. This contributes to even further delays in diagnosing breast cancer and thus starting treatment. Any delay in treatment can have a detrimental effect on prognosis.

If, however, medical personnel had access to a tool that would bypass the need for a pathologist, treatment could begin much faster. The app we developed was designed to do just this. Using various measurements of the nucleus of single cell in suspicious breast tissue, it can predict the chances of that cell being malignant with a 95% accuracy rate. The dataset used to do this was very small; however, and before real-world implementation, it would have to be trained and tested on a much larger data set.

## Sources

* Breast Cancer Wisconsin (Diagnostic) Data Set [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/datasets/Breast+Cancer+Wisconsin+(Diagnostic))
  * Data set with features computed from a digitized image of a fine needle aspirate (FNA) of a breast mass. They describe characteristics of the cell nuclei present in the image.
  * References:
    * W.N. Street, W.H. Wolberg and O.L. Mangasarian. Nuclear feature extraction for breast tumor diagnosis. IS&T/SPIE 1993 International Symposium on Electronic Imaging: Science and Technology, volume 1905, pages 861-870, San Jose, CA, 1993.
    * O.L. Mangasarian, W.N. Street and W.H. Wolberg. Breast cancer diagnosis and prognosis via linear programming. Operations Research, 43(4), pages 570-577, July-August 1995.
    * W.H. Wolberg, W.N. Street, and O.L. Mangasarian. Machine learning techniques to diagnose breast cancer from fine-needle aspirates. Cancer Letters 77 (1994) 163-171.

* US and Puerto Rico Data [Centers for Disease Control and Prevention](https://wonder.cdc.gov/cancer.html)
  * Data includes cancer incidence by year, state, age group, and race.
  * Data are provided by:
     The Centers for Disease Control and Prevention National Program of Cancer Registries (NPCR).
     The National Cancer Institute Surveillance, Epidemiology and End Results (SEER) program.

* Global Cancer Data [Our world in Data](https://ourworldindata.org/cancer
  * Data includes number and percentage of cancer incidence and mortality globally and across the US for the past decade.
  * Data is provided by:
    * Institute of Health Metrics and Evaluation (IHME), Global Burden of Disease (GBD).

* Trends in the US and Canadian Pathologist Workforces From 2007 to 2017 [JAMA Network](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2734800)
  * Article includes data on number of pathologists and other physicians in American and Canadian workforce.
  * References:
    * Metter DM, Colgan TJ, Leung ST, Timmons CF, Park JY. Trends in the US and Canadian pathologist workforces from 2007 to 2017. JAMA Netw Open. 2019;2(5):e194337. doi:10.1001/jamanetworkopen.2019.4337.

* WHAT DID YOU GET FROM NIH? <https://www.ncbi.nlm.nih.gov>

## Workflow

### Step 1: Tableau Visualizations

* Exported datasets into .csv files.
* Loaded datasets into Tableau Desktop.
* Created the following visualizations:
  * Five visualizations for global data displayed within single dashboard.
  * Five visualizations for United States data displayed within a Tableau story.
  * Multiple visualizations in four worksheets as a single story to illustrate the recent history of cancer and decline in pathologists.
* Published to Tableau Public.
* Embedded html code from Tableau Public into website.

### Step 4: Front-End Development

* We have organized our website so that we have our story and what motivates us in a separate tab (white paper), demo and case studies locate in separate tabs as well. We decided to give a lot of breathing space for our landing page in order not to overwhelm the user. "Breast cancer awareness" is our main goal for this project.

Our Front-End Development tools are: Foundation (for more flexibility) and jQuery (to be toggle our request form), fontawesome (for social links). To make out website so incredibly beautiful and achieve the harmony and to feel the flow of the website we used resources such as: Google Fonts, Unsplash, Coverr, Colorhunt, Color Converter (Hsl specifically) to make the background and the font color the same with different saturation that helps to keep the transition smooth. Overall, the main goal for the website to make it user friendly.

### Step 5: Machine Learning

* Utilized python and scikit-learn library within a jupyter notebook.
* Directly loaded Diagnostic Breast Cancer Data Set from scikit-learn library.
* Scaled data using standard scaler.
* Trained and tested the following models on the data set:
  * Logistic Regression Model.
  * Support Vector Machine.
  * Random Forest Classifier.
  * K Nearest Neighbor.
  * Deep Learning Model.
* Determined the Random Forest model produced the most accurate results.
* Saved model and standard scaler to be loaded within app.py when an API call is made to flask diagnosis route.

### Step 6: Flask Script

* Used python and flask library to set up routes to render html files.
* Developed `/features/<patientID>` route that returns list of features in json format for a given patient ID.
* Developed `/analyze/<patientID>` route using joblib and sklearn that returns a diagnosis prediction based on given patient ID.

## System Requirements

* Chrome Web Browser
* Python environment running Python 3.7

## Steps to run the application

1. Run: `pip install -r requirements.txt` to install necessary modules in environment.
2. Run `app.py`.
3. Access application at <http://localhost:8000/>.
