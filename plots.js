function init() {
  var selectorFunc = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    // names is a name of the array of the json data
    var sampleNames = data.names;
    // iterate over data.names array. For each element in the array, a dropdown menu option is appended
    sampleNames.forEach((sample) => {
      selectorFunc
        .append("option")
        // The text of each dropdown menu option is the ID (e.g "940"). 
        .text(sample)
        // its property is also assigned ID (e.g "940")
        .property("value", sample);
    });
})}

init();

function optionChanged(newSample) {
  // this.value and newSample are equivalent
  buildMetadata(newSample);
  // buildCharts(newSample);
  // console.log(newSample);

}
// when a dropdown menu option is selected, the ID number is passed in as "sample"
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // filter for an object in the array whose id property matches the ID number passed into buildMetadata() as "sample"
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");
    // ensures that the contents of the panel are cleared when another ID number is chosen from the dropdown menu
    PANEL.html("");
    // Object.entries(result).forEach(([key, value]) => {
    // PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);

    PANEL.append("h6").text("ID " + result.id);
    PANEL.append("h6").text("Ethnicity: " + result.ethnicity);
    PANEL.append("h6").text("Gender: " + result.gender);
    PANEL.append("h6").text("Age: " + result.age);
    PANEL.append("h6").text("location: " + result.location);
    PANEL.append("h6").text("bbtype: "+ result.bbtype);
    PANEL.append("h6").text("wfreq: " + result.wfreq)

  });
}
