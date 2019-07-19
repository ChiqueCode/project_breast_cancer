function reset() {

    /**
    /* Clears parameters and diagnosis
    */

    //   TODO: ADD RESET BUTTON TO CALCULATOR.HTML
    var reset = d3.select("#reset-btn");

    reset.on("click", function() {
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

function random() {

    /**
    /* Returns random sample to test calculator
    */

    // Clear all input and output data
    reset();

    // Fetch list of random data and populate associated fields
    d3.json("/random").then(function (sampleData) {
        for (var i = 0; i <sampleData.length; i++){
            d3.select(`parameter${i}`).html(sampleData[0]);
        };
  });
}

// create dropdown menu

// create select patient function that calls flask route
