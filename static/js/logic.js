// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }
).addTo(myMap);

// Define the var magColor and assign an empty string for it so we can identify the color with the of statement

//Load the arrays with markers
// function getColor(cancer_deaths)
//      {
//          switch(parseInt(cancer_deaths)){
//              case 0: return '#efa9ee';
//              case 1: return '#ef64f0';
//              case 2: return '#8e138f';
//              case 3: return '#55055b';
//              default: return '#55055b';
//          }
//      }

var url = "/percentage";

d3.json(url, { crossOrigin: "anonymous" }).then(function(response) {
  console.log(response);

  function markerSize(incidents) {
    return incidents * 800000;
  }

  // Loop through the cities array and create one marker for each city object
  for (var i = 0; i < response.length; i++) {

    var cancerColor = "";

    if (response[i].percentage_deaths < 0.021) {
      cancerColor = "#efa9ee";
    } else if (response[i].percentage_deaths < 0.024) {
      cancerColor = "#ef64f0";
    } else if (response[i].percentage_deaths < 0.027) {
      cancerColor = "#8e138f";
    } else {
      cancerColor = "#55055b";
    };

    L.circle([response[i].lat, response[i].lng], {
      fillOpacity: 0.75,
      color: "#3b0b58",
      fillColor: cancerColor,
      //   fillColor: getColor(response[i].percentage_deaths),
      // Setting our circle's radius equal to the output of our markerSize function
      // This will make our marker's size proportionate to its population
      radius: markerSize(response[i].percentage_incident)
    })
      .bindPopup(
        "<h1>" +
          response[i].state +
          "</h1> <hr> <h3>Breast Cancer Incidents: " +
          response[i].incidence +
          "</h3>" +
          " <hr> <h3>Breast Cancer Deathes: " +
          response[i].death_count +
          "</h3>"
      )
      .addTo(myMap);
  }
});

// Set up the legend
var legend = L.control({ position: "bottomright" });
legend.onAdd = function() {
  var div = L.DomUtil.create("div", "info legend");
//   var limits = ["0.017-0.021", "0.021-0.024", "0.024-0.027", "0.027+"];
  var limits = ["0.021%", "0.024%", "0.027", "0.027+"]
  var colors = ["#efa9ee", "#ef64f0", "#8e138f", "#55055b"];
  var labels = [];

  // console.log(labels);

  var legendInfo =
    "<h1>Deaths %</h1>" +
    '<div class="labels">' +
    '<div class="min">' +
    limits[0] +
    "</div>" +
    '<div class="max">' +
    limits[limits.length - 1] +
    "</div>" +
    "</div>";

  div.innerHTML = legendInfo;

  limits.forEach(function(limit, index) {
    labels.push('<li style="background-color: ' + colors[index] + '"></li>');
  });

  div.innerHTML += "<ul>" + labels.join("") + "</ul>";
  return div;
};

legend.addTo(myMap);
