console.log("DATA", topCountries, countryCodeMap);
var data = topCountries;

var width = 960;
var height = 500;
var svg = d3
  .select("#graph")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

let center = [width / 2, height / 2];
var projection = d3
  .geoMercator()
  .scale(width / 2 / Math.PI)
  .translate([width / 2, 50 + height / 2]);

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

// fetch("world-110m.v1.json")
//   .then(res => res.json())
//   .then(topology => {
console.log(worldTopo);
let topology = worldTopo;
var map = g
  .selectAll("path")
  .data(topojson.object(topology, topology.objects.countries).geometries)
  .enter()
  .append("path")
  .attr("d", d => {
    return path(d);
  })
  .attr("fill", "#777");

// TOOLTIP
tip = d3
  .tip()
  .attr("class", "d3-tip")
  .html((d, i) => {
    console.log(d, i);
    let item = topCountries[i];
    let text = `<strong>Country: </strong><span>${item.countryAbbrev}</span>`;
    return text;
  });
g.call(tip);

function update() {
  console.log("updating...");

  g.append("g")
    .selectAll("circle")
    .data(countryCords)
    .enter()
    .append("g")
    .attr("class", "count-circle")
    .append("circle")
    .attr("cx", function(d) {
      console.log("CX", d);
      return projection(d)[0];
    })
    .attr("cy", function(d) {
      console.log("CY", d, projection(d));
      return projection(d)[1];
    })
    .attr("r", function(d, i) {
      if (topCountries[i]) {
        const weight =
          topCountries[i].patentCount / topCountries[0].patentCount;
        return `${Math.floor(weight * 30 + 15).toFixed(0)}px`;
      }
    })
    .attr("fill", "red");

  g.append("g")
    .selectAll("text")
    .data(countryCords)
    .enter()
    .append("text")
    .attr("x", function(d) {
      console.log("X", d);
      return projection(d)[0];
    })
    .attr("y", function(d) {
      console.log("Y", d, projection(d));
      return projection(d)[1];
    })
    .text(function(d, i) {
      if (topCountries[i]) {
        return topCountries[i].patentCount;
      }
    })
    .attr("dy", ".3em")
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .on("mouseover", tip.show)
    .on("mouseout", tip.hide);
}

update();
