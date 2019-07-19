function createEmptyForm() {

    /**
    /* Creates empty form
    */

    // Unsure if this should be a list or a dict; need to make sure we can enter data in here
    var parameterNames = ["Radius Mean", "Radius SE"];

    // VERY UNSURE ABOUT THIS CODE; CAN WE DO THE MULTIPLE TD'S? CAN WE DO MATH IN THE DATA FIELD
    parameterNames.forEach((parameter) => {
        d3.select("#parameterTable")
            .append("tr")
            .append("td")
            .classed("parameter-name", true)
            .text(`${parameter}: `)
            .append("td")
            .classed("parameter-value", true)
            .html("")
    });
}

function createDropdown() {

    /**
    /* Creates dropdown menu of patient ID's
    */

    // Create list of patient ID's
    var patientList = []
    for (var i = 19000; i <= 19568; i++) {
        list.push(i);
    }

    // Create dropdown menu of patientID's and corresponding feature row
    patientList.forEach((patientID) => {
        d3.select("#patientDropdown")
            .append("tr") /* what tag do we append? */
            .text(patientID)
    });
}

function selectPatient(patientID) {

    /**
    /* Populates form with features from selected patient
    /* @param {string}    patientID    Index of features for selected 
    /* patient in feature array
    */

    // Get corresponding index in feature array for given patient ID
    var featureIndex = parseInt(patientID) - 19000

    // Have a field somewhere other than the dropdown that displays the patientID???
    d3.select("#patientID")
        .data(featureIndex)
        .text(patientID);

    // IS THIS NECESSARY??? Clear fields in parameter table
    parameterValues = d3.selectAll("#parameter-value").html("");

    // Construct url for path to features for given feature index
    var url = `/features/${featureIndex}`;

    // Fetch metadata for the sample
    d3.json(url).then(function (patientFeatures) {

        // VERY UNSURE ABOUT THIS CODE
        parameterValues.data(patientFeatures)
            .enter()
            .text("patientFeature");
    });
}

// GRETEL LEFT OFF HERE WITH FRIDAY UPDATES 9 AM
function random() {

    /**
    /* Populates form with features from random sample
    */

    // Clear all input and output data


    // Fetch list of random data and populate associated fields
    d3.json("/random").then(function (sampleData) {
        for (var i = 0; i < sampleData.length; i++) {
            d3.select(`parameter${i}`).html(sampleData[0]);
        };
    });
}


function reset() {

    /**
    /* Clears parameters and diagnosis
    */

    //   TODO: ADD RESET BUTTON TO CALCULATOR.HTML
    var reset = d3.select("#reset-btn");

    reset.on("click", function () {
        // Prevent the page from refreshing
        d3.event.preventDefault();

        // TODO: ADD CLASS TO PARAMETERS
        // QUESTION: DO I NEED A SELECT ALL?
        // Clear previous input
        d3.selectAll(".parameter")
            .html("");

        d3.select("#diagnosis")
            .html("");
    });
}

