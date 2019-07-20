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
    var selector = d3.select("#selPatient")
        .append("option")
        .text("Select Patient ID");

    // Create dropdown menu of patientID's to populate the select options
    patientList.forEach((patientID) => {
        selector
            .append("option")
            .text(patientID)
            .property("value", patientID)
    });
}

function selectPatient(patientID) {

    /**
    /* Populates form with features from selected patient
    /* @param {string}    patientID    ID of selected patient 
    /* patient in feature array
    */

    // Populates patient ID field
    d3.select("#patientID")
        .text(patientID);

    // Connects analyze function to button and passes in patientID
    d3.select("#analyze")
        .on("click", analyze(patientID));

    // Clear values for existing feature table and diagnosis
    d3.select("table").html("");
    d3.select("#diagnosis").html("");

    // Fetch dictionary of the name of the features and corresponding values
    d3.json(`/features/${patientID}`).then(function (patientFeatures) {

        // For each feature, enter the feature name and the feature value into a row
        Object.entries(patientFeatures).forEach(([key, value]) => {
            d3.select("table")
                .append("tr")
                .append("td")
                .text(key)
                .append("td")
                .text(value)
        });
    });
}

function analyze(patientID) {

    /**
    /* Calculates diagnosis of given patient and populates corresponding field
    /* @param {string}    patientID    ID of selected patient 
    */

    d3.json(`/analyze/${patientID}`).then(function (diagnosis) {
        d3.select("#diagnosis").html(diagnosis)
    });
}

createDropdown();

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

