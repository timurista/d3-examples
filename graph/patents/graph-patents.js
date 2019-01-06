console.log("DATA", gData);
var data = gData;

var colors = x => ({ "-1": "red", "1": "green", "0": "lightblue" }[x]);
var barsize = width / data.length;
var margin = { left: 50, right: 10, top: 10, bottom: 50 };
var width = 800 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;

var svg = d3
  .select("#bar-chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom);

var x = d3
  .scaleTime()
  .domain([d3.min(data, d => d.date), d3.max(data, d => d.date)])
  .range([0, width]);

var y = d3
  .scaleLinear()
  .domain([0, d3.max(data, d => d.count)])
  .range([height, 0]);

var xAxis = d3.axisBottom(x).tickFormat(d3.timeFormat("%b %Y"));

var yAxis = d3.axisLeft(y);

var g = svg
  .append("g")
  .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

var gX = g
  .append("g")
  .attr("class", "x-axis")
  .attr("transform", "translate(0, " + height + ")")
  .attr("fill", "lightgrey")
  .call(xAxis)
  .selectAll("text")
  .attr("y", "10")
  .attr("x", "-5")
  .attr("text-anchor", "end")
  .attr("transform", "rotate(-40)");

var gY = g
  .append("g")
  .attr("class", "y-axis")
  .attr("fill", "#BDBDBD")
  .call(yAxis);

svg
  .append("text")
  .attr("class", "y-label")
  .attr("y", 0)
  .attr("x", (-1 * height) / 2)
  .attr("dy", "1em")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .attr("fill", "lightgrey")
  .text("Articles");

var area = d3
  .area()
  .x(function(d) {
    return x(d.date);
  })
  .y0(height)
  .y1(function(d, i) {
    return y(d.value);
  })
  .curve(d3.curveBasis);

// define the line
var valueline = d3
  .line()
  .x(function(d) {
    return x(d.date);
  })
  .y(function(d, i) {
    return y(d.value);
  })
  .curve(d3.curveBasis);

const count = data.map(x => ({ date: x.date, value: x.count }));
const sentiment = data.map(x => ({
  date: x.date,
  value: x.mva
}));

const generateArea = (g, data, color) => {
  g.append("path")
    .data([data])
    .attr("class", "area")
    .attr("d", area)
    .attr("fill", color)
    .attr("fill-opacity", "0.3");

  g.append("path")
    .data([data])
    .attr("class", "line")
    .attr("d", valueline)
    .attr("fill-opacity", "0")
    .attr("stroke", color)
    .attr("stroke-opacity", "0.8");
};

generateSentimentLine = (g, data) => {
  var ySent = d3
    .scaleLinear()
    .domain([d3.min(data, d => d.value), d3.max(data, d => d.value)])
    .range([height, 0]);
  var sentimentValueLine = d3
    .line()
    .x(function(d) {
      return x(d.date);
    })
    .y(function(d, i) {
      return ySent(d.value);
    })
    .curve(d3.curveBasis);

  var defs = g.append("defs");

  var gradient = defs
    .append("linearGradient")
    .attr("id", "svgGradient")
    .attr("x1", "0%")
    .attr("x2", "0%")
    .attr("y1", "100%")
    .attr("y2", "0%");

  gradient
    .append("stop")
    .attr("class", "start")
    .attr("offset", "0%")
    .attr("stop-color", "#FF7474")
    .attr("stop-opacity", 1);

  gradient
    .append("stop")
    .attr("class", "end")
    .attr("offset", "100%")
    .attr("stop-color", "#8CE984")
    .attr("stop-opacity", 1);

  g.append("path")
    .data([data])
    .attr("class", "sentiment-line")
    .attr("d", sentimentValueLine)
    .attr("fill-opacity", "0")
    .attr("stroke-opacity", "0.8")
    .attr("stroke-width", "3px")
    .attr("stroke", "url(#svgGradient)");
};

function update() {
  generateArea(g, count, "lightgrey");
  generateSentimentLine(g, sentiment);
}

update();
