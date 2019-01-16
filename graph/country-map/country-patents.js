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

var map = g
  .selectAll("path")
  .data(topojson.object(worldTopo, worldTopo.objects.countries).geometries)
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
    let text = item.name
      ? `<strong>Country: </strong><span>${item.name}</span>`
      : `<strong>Country Code: </strong><span>${item.countryAbbrev}</span>`;
    return text;
  });
g.call(tip);

const countryTimeBuckets = [
  ...new Set(patents.map(x => new Date(x.filingDate).getFullYear()))
].sort((a, b) => a - b);
// console.log("MAPPING TIME", patents.map(x => x));

function update(timeSlice) {
  console.log("updating...");
  const filteredPatents = patents.filter(
    x => new Date(x.filingDate).getFullYear() <= countryTimeBuckets[timeSlice]
  );

  let counts = {};
  for (let p of filteredPatents) {
    console.log(p, p.country);
    counts[p.country] = ++counts[p.country] || 1;
  }

  // console.log("COUNTS", patents);
  let d = Object.entries(counts).map(([countryAbbrev, patentCount]) => ({
    countryAbbrev,
    patentCount
  }));
  const filteredCountries = d.map(x => ({
    ...x,
    ...countryCodeMap[x.countryAbbrev]
  }));

  const filteredCords = filteredCountries.map(x => [
    Number(x.lat),
    Number(x.long)
  ]);
  console.log("COUNTRY MAPS", filteredCountries);

  var t = d3.transition().duration(100);

  var circles = g
    .append("g")
    .selectAll("circle")
    .data(filteredCords);

  // circles.exit().remove();

  circles
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
      if (filteredCountries[i]) {
        const weight =
          filteredCountries[i].patentCount / filteredCountries[0].patentCount;
        return `${Math.floor(weight * 30 + 15).toFixed(0)}px`;
      }
    })
    .attr("fill", "red");

  g.append("g")
    .selectAll("text")
    .data(filteredCords)
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
      if (filteredCountries[i]) {
        return filteredCountries[i].patentCount;
      }
    })
    .attr("dy", ".3em")
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .on("mouseover", tip.show)
    .on("mouseout", tip.hide);
}

const endTime = countryTimeBuckets[countryTimeBuckets.length];
const startTime = countryTimeBuckets[0];
let time = 0;

function step() {
  console.log("stepping", time);
  time = time < countryTimeBuckets.length ? time + 1 : 0;
  update(time);
}

// run step function

d3.interval(function() {
  step();
}, 200);
