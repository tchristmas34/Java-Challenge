var tableData = data;
console.log(tableData);
var tbody = d3.select("tbody");

// gather the values of the UFO siting 
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");

    // Use `Object.entries` to Log UFO Sightings
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append to Row
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Button click
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Input Date Selection & property
    var inputElement = d3.select("#datetime");
    
    var inputValue = inputElement.property("value");
    // Log Date Value and filter
    console.log(inputValue);
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue)
    console.log(filteredData)
    filteredData.forEach(function(selections) {
    console.log(selections);

    // Append Eeach UFO Sighting Object
    var row = tbody.append("tr");

    // Use `Object.entries` to Log UFO Sightings
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
});