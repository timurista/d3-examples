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

const timeLabel = g
  .append("text")
  .attr("y", height - 10)
  .attr("x", width - 40)
  .attr("font-size", "40px")
  .attr("opacity", "0.4")
  .attr("text-anchor", "middle")
  .text(countryTimeBuckets[0]);

function update(timeSlice) {
  console.log("updating...");
  const filteredPatents = patents.filter(
    x => new Date(x.filingDate).getFullYear() <= countryTimeBuckets[timeSlice]
  );

  let counts = {};
  for (let p of filteredPatents) {
    // console.log(p, p.country);
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
  // console.log("COUNTRY MAPS", filteredCountries);

  var t = d3.transition().duration(100);

  var circles = g
    .append("g")
    .selectAll("circle")
    .data(filteredCords);
  // var text = g.selectAll("text").data(filteredCords);

  const isHidden = i => {
    const selectedCountry = document.querySelector("#country-select").value;
    if (selectedCountry === "all") {
      return true;
    } else {
      return (
        filteredCountries[i].countryAbbrev.toLowerCase() ===
        selectedCountry.toLowerCase()
      );
    }
  };

  circles
    .enter()
    .append("g")
    .attr("class", "count-circle")
    .append("circle")
    .attr("class", "count-circle")
    // .remove(function(d, i) {
    //   return !isHidden(i);
    // })
    .attr("cx", function(d) {
      return projection(d)[0];
    })
    .attr("cy", function(d) {
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
  // .style("opacity", function(d, i) {
  //   return isHidden(i) ? "1" : "0";
  // });

  g.append("g")
    .selectAll("text")
    .data(filteredCords)
    .enter()
    .append("text")
    .attr("class", "country-count")
    .attr("x", function(d) {
      return projection(d)[0];
    })
    .attr("y", function(d) {
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
    // .remove(function(d, i) {
    //   return !isHidden(i);
    // })
    .on("mouseover", tip.show)
    .on("mouseout", tip.hide);

  // circles.exit().remove();
  // text.exit().remove();

  timeLabel.text(countryTimeBuckets[timeSlice]);
}

const endTime = countryTimeBuckets[countryTimeBuckets.length];
const startTime = countryTimeBuckets[0];
let time = 0;

function step() {
  // console.log("stepping", time);
  time = time < countryTimeBuckets.length ? time + 1 : 0;
  update(time);
}

const playBtn = document.querySelector("#play");
console.log("PLAY", playBtn);
let interval;

playBtn.addEventListener("click", () => {
  if (playBtn.textContent === "Play") {
    console.log("clicked play");
    playBtn.textContent = "Pause";
    interval = setInterval(step, 1000);
  } else if (playBtn.textContent === "Pause") {
    playBtn.textContent = "Play";
    console.log("clicked pause");
    clearInterval(interval);
  }
});

const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", () => {
  playBtn.textContent = "Play";
  clearInterval(interval);
  d3.selectAll("circle").remove();
  d3.selectAll(".country-count").remove();
  time = 0;
  update(0);
});

// kick off update
update(0);
