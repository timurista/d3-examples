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
    console.log("MAP LOADING", path(d), d);
    return path(d);
  });

// });

function update() {
  aa = [-122.490402, 37.786453];
  bb = [-122.389809, 37.72728];

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

  // console.log("CIRLCES", d3.selectAll(".count-circle"));
  // d3.selectAll(".count-circle")
  //   .append("text")
  //   .attr("x", "50%")
  //   .attr("y", "50%")
  //   .attr("text-anchor", "middle")
  //   .attr("dy", "5em")
  //   .attr("fill", "white");

  // .attr("x", function(d) {
  //   console.log("X", d);
  //   return projection(d)[0];
  // })
  // .attr("y", function(d) {
  //   console.log("Y", d, projection(d));
  //   return projection(d)[1];
  // })
  // .text(function(d, i) {
  //   if (topCountries[i]) {
  //     return topCountries[i].patentCount;
  //   }
  // })
  // .attr("fill", "white");

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
    .attr("fill", "white");

  // .selectAll("path")
  // .data(countryCords)
  // .enter()
  // .append("path")
  // .attr("d", d => {
  //   console.log("ENTERING", path(d), d);
  //   return d3.geoPath().projection(d);
  // })
  // .attr("fill", "red");

  // g.data(data)
  //   .append("circle")
  //   .attr("cx", d => {
  //     const geo = [Number(d.lat), Number(d.long)];
  //     console.log(d);
  //     return projection(geo)[0];
  //   })
  //   .attr("cy", d => {
  //     const geo = [Number(d.lat), Number(d.long)];
  //     console.log(projection(geo));
  //     return projection(geo)[1];
  //   })
  //   .attr("r", "20px")
  //   .attr("fill", "red");
}

update();
