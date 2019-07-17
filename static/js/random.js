function random() {

    /**
    /* Returns random sample to test calculator
    */
  
    // Fetch list of random data and populate associated fields
    d3.json("/random").then(function (sampleData) {
        for (var i = 0; i <sampleData.length; i++){
            d3.select(`parameter${i}`).html(sampleData[0]);
        };
  });
}