/* NOTE: This is the way we constructed the dropdown in the bellybutton assignment
createDropdown() woudl be called when we open the page.
not sure how to do it so nothing is selected when you first enter the page
*/

// REQUIRES FOLLOWING HTML: <select id="selPatient" onchange="selectPatient(this.value)"></select>
function createDropdown() {

    /**
    /* Creates dropdown menu of patient ID's
    */

    // Create list of patient ID's
    var patientList = []
    for (var i = 19000; i <= 19010; i++) {
        list.push(i);
    }

    // Grab a reference to the dropdown select element
    var selector = d3.select("#selPatient");

    // Create dropdown menu of patientID's to populate the select options
    patientList.forEach((patientID) => {
        selector
            .append("option")
            .text(patientID)
            .property("value", patientID)
    });
}

// REQUIRES THE FOLLOWING HTML: <TAG id=patientID>
// <TAG id=diagnosis> <-- I think we may need to attach the patient id to this tag?!
// <TAG id=feature-table>
// REQUIRES FOLLOWING FLASK ROUTE: 
// /features --> returns dictionary of feature names with feature values
function selectPatient(patientID) {

    /**
    /* Populates form with features from selected patient
    /* @param {string}    patientID    Index of features for selected 
    /* patient in feature array
    */

// IS THIS CORRECT?
    d3.select("#patientID")
        .text(patientID)
        .property("value", patientID)

    // Clear values for existing feature table and diagnosis
    d3.select("#feature-table").html("");
    d3.select("#diagnosis").html("");

    // Construct url for path to features for given feature index
    // IF WE WANT TO CHANGE TO SELECT SPECIFIC ROW, USE THE COMMENTED OUT URL
    // var url = `/features/${featureIndex}`;
    var url = "/features"

    // Fetch dictionary of the name of the features and corresponding values
    d3.json(url).then(function (patientFeatures) {

        // For each feature, enter the feature name and the feature value into a row
        Object.entries(patientFeatures).forEach(([key, value]) => {
        d3.select("#feature-table")
          .append("tr")
          .text(`${key}: ${value}`);
      });
    });
}
// REQUIRES THE FOLLOWING HTML: <TAG id=diagnosis>
// A BUTTON THAT WHEN CLICKED, ACTIVATES THE ANALYZE FUNCTION W/ PARAMETER PATIENTID
// REQUIRES FOLLOWING FLASK ROUTE: 
// /analyze --> returns "Malignant" or "Benign"

// UNSURE ABOUT THE PARAMETERS HERE
function analyze(patientID) {

    /**
    /* Enters diagnosis into form
    */

    d3.json(`/analyze/${patientID}`).then(function (diagnosis) {
        d3.select("#diagnosis").html(diagnosis)
    });
}

// OPTION OF CREATING A RESET BUTTON?
// I don't think we need any of the following
// function random() {

//     /**
//     /* Populates form with features from random sample
//     */

//     // Clear all input and output data


//     // Fetch list of random data and populate associated fields
//     d3.json("/random").then(function (sampleData) {
//         for (var i = 0; i < sampleData.length; i++) {
//             d3.select(`parameter${i}`).html(sampleData[0]);
//         };
//     });
// }



// function reset() {

//     /**
//     /* Clears parameters and diagnosis
//     */

//     //   TODO: ADD RESET BUTTON TO CALCULATOR.HTML
//     var reset = d3.select("#reset-btn");

//     reset.on("click", function () {
//         // Prevent the page from refreshing
//         d3.event.preventDefault();

//         // TODO: ADD CLASS TO PARAMETERS
//         // QUESTION: DO I NEED A SELECT ALL?
//         // Clear previous input
//         d3.selectAll(".parameter")
//             .html("");

//         d3.select("#diagnosis")
//             .html("");
//     });
// }

