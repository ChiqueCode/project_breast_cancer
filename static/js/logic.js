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
function getColor(mag)
     {
         switch(parseInt( mag)){
             case 0: return '#b7f34d';
             case 1: return '#e1f34d';
             case 2: return '#f3db4d';
             case 3: return '#f3ba4d';
             case 4: return '#f0a76b';
             default: return '#f06b6b';
         }
     }
var url = "/percentage";

d3.json(url, {crossOrigin: "anonymous"}).then(function(response) {
  console.log(response);

  function markerSize(incidents) {
    return incidents * 200000;
}

// Loop through the cities array and create one marker for each city object
for (var i = 0; i < response.length; i++) {

    L.circle([response[i].lat, response[i].lng], {
      fillOpacity: 0.75,
      color: "purple",
      fillColor: getColor(response[i].percentage_deaths),
      // Setting our circle's radius equal to the output of our markerSize function
      // This will make our marker's size proportionate to its population
      radius: markerSize(response[i].percentage_incident)
    }).bindPopup("<h1>" + response[i].state + "</h1> <hr> <h3>Breast Cancer Incidents: " + response[i].percentage_incident + "</h3>").addTo(myMap);
  }
});

// Set up the legend
var legend = L.control({ position: "bottomright" });
legend.onAdd = function() {
  var div = L.DomUtil.create("div", "info legend");
  var limits = ["0-0.05","1-2","2-3","3-4","4-5","5+"];
  var colors = ["#b7f34d'", "#f2c0ff", "#82acff", "#8f71ff","#866ec7", "#302387"];
  var labels = [];

  // console.log(labels);

  var legendInfo = "<h1>Magnitude</h1>" +
  "<div class=\"labels\">" +
    "<div class=\"min\">" + limits[0] + "</div>" +
    "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
  "</div>";

  div.innerHTML = legendInfo;

  limits.forEach(function(limit, index) {
    labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
  });

  div.innerHTML += "<ul>" + labels.join("") + "</ul>";
  return div;
};

legend.addTo(map);
