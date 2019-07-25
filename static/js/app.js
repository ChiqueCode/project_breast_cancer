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

createDropdown();