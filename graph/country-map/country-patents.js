console.log("DATA", topCountries, countryCodeMap);
var data = topCountries;

let width = 800;
let height = 600;
var svg = d3
  .select("#graph")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

let center = [width / 2, height / 2];
var projection = d3
  .geoMercator()
  .scale(width / 2 / Math.PI)
  .translate([width / 2, height / 2]);

var path = d3.geoPath().projection(projection);

var geoPoint = {
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [125.6, 10.1]
  },
  properties: {
    name: "Dinagat Islands"
  }
};

var g = svg.append("g");

d3.json("world-110m.json", function(error, topology) {
  g.selectAll("path")
    .data(topojson.object(topology, topology.objects.countries).geometries)
    .enter()
    .append("path")
    .attr("d", path);
});

function update() {
  console.log("updating...", path(geoPoint));
  // g.append("circle")
  //   .attr("cx", 30)
  //   .attr("cy", 30)
  //   .attr("r", 20);
  g.append("path").attr("d", path(geoPolygon));
}

update();
