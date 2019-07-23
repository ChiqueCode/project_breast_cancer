function createDropdown() {
  /**
    /* Creates dropdown menu of patient ID's
    */

  // Create list of patient ID's
  var patientList = [];
  for (var i = 19000; i <= 19010; i++) {
    patientList.push(i);
  }

  // Add first dropdown item
  d3.select("#selPatient")
    .append("option")
    .text("");

  // Create dropdown menu of patientID's to populate the select options
  patientList.forEach(patientID => {
    d3.select("#selPatient")
      .append("option")
      .text(patientID)
      .property("value", patientID);
  });
}

//Connects analyze function to button and passes in patientID
d3.select("#analyze")
    .on("click", function(d){
        d3.event.preventDefault();
        console.log(this.value);
        selectPatient(this.value);
        analyze(this.value);
    });
// document.getElementById("analyze").addEventListener("click", function(event) {
//   event.preventDefault();
//   console.log("working");
// });
function submitdropdownvalue(newvalue){
    d3.select("#analyze").property("value", newvalue);
} 
function selectPatient(patientID) {
  /**
    /* Populates form with features from selected patient
    /* @param {string}    patientID    ID of selected patient 
    /* patient in feature array
    */
  // Clear values for existing feature table and diagnosis
  d3.select("tbody").html("");
  d3.select("#diagnosis").html("");

  var url = `/features/${patientID}`;

  // Fetch dictionary of the name of the features and corresponding values
  d3.json(url).then(function(patientFeatures) {
    // For each feature, enter the feature name and the feature value into a row
    Object.entries(patientFeatures).forEach(([key, value]) => {
      var tableRow = d3.select("tbody").append("tr");
      tableRow.append("td").text(key);
      tableRow.append("td").text(value);
    });
  });
}

function analyze(patientID) {
  /**
    /* Calculates diagnosis of given patient and populates corresponding field
    /* @param {string}    patientID    ID of selected patient 
    */

  var url = `/analyze/${patientID}`;

  d3.json(url).then(function(diagnosis) {
    d3.select("#diagnosis").html(`Diagnosis: ${diagnosis}`);
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
