/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    CoinStats
 */

var margin = { left: 80, right: 100, top: 50, bottom: 100 },
  height = 500 - margin.top - margin.bottom,
  width = 800 - margin.left - margin.right;

var svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom);

var g = svg
  .append("g")
  .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

// Time parser for x-scale
var parseTime = d3.timeParse("%Y");
// For tooltip
var bisectDate = d3.bisector(function(d) {
  return d.year;
}).left;

// Scales
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// Axis generators
var xAxisCall = d3.axisBottom();
var yAxisCall = d3
  .axisLeft()
  .ticks(6)
  .tickFormat(function(d) {
    return parseInt(d / 1000) + "k";
  });

// Axis groups
var xAxis = g
  .append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")");
var yAxis = g.append("g").attr("class", "y axis");

// Y-Axis label
yAxis
  .append("text")
  .attr("class", "axis-title")
  .attr("transform", "rotate(-90)")
  .attr("y", 6)
  .attr("dy", ".71em")
  .style("text-anchor", "end")
  .attr("fill", "#5D6971")
  .text("Population)");

// Line path generator
var line = d3
  .line()
  .x(function(d) {
    return x(d.year);
  })
  .y(function(d) {
    return y(parseInt(d.value));
  });

// ADD SLIDER
$("#date-slider").slider({
  max: 100,
  min: 0,
  step: 1,
  range: false,
  value: 50,
  slide: function(evt, ui) {
    console.log(ui.value);
  }
});

$("#date-slider").slider("value", 100);

// DATA BELOW

d3.json("../data/coins.json").then(function(data) {
  console.log("data", data);

  const selectedCoin = "bitcoin";
  const selectedValue = "price_usd";
  const selecteDate = "24h_vol";
  const parseTime = d3.timeParse("%d/%m/%Y");
  const valueFormat = d3.format(",.0f");
  console.log("time parse", parseTime("11/12/2014"));

  // Data cleaning
  let dataExists = x => x.market_cap && x.price_usd && x["24h_vol"] !== null;
  bitcoinData = data[selectedCoin].filter(dataExists).map(x => ({
    value: x[selectedValue],
    date: parseTime(x.date)
  }));

  currentData = bitcoinData;
  console.log("current data", currentData);

  // Set scale domains
  x.domain(
    d3.extent(currentData, function(d) {
      return d.date;
    })
  );
  y.domain([
    d3.min(currentData, function(d) {
      return d.value;
    }) / 1.005,
    d3.max(currentData, function(d) {
      return d.value;
    }) * 1.005
  ]);

  // Generate axes once scales have been set
  xAxis.call(xAxisCall.scale(x));
  yAxis.call(yAxisCall.scale(y));

  // Add line to chart
  g.append("path")
    .attr("class", "line")
    .attr("fill", "none")
    .attr("stroke", "grey")
    .attr("stroke-with", "3px")
    .attr("d", line(currentData));

  /******************************** Tooltip Code ********************************/

  var focus = g
    .append("g")
    .attr("class", "focus")
    .style("display", "none");

  focus
    .append("line")
    .attr("class", "x-hover-line hover-line")
    .attr("y1", 0)
    .attr("y2", height);

  focus
    .append("line")
    .attr("class", "y-hover-line hover-line")
    .attr("x1", 0)
    .attr("x2", width);

  focus.append("circle").attr("r", 7.5);

  focus
    .append("text")
    .attr("x", 15)
    .attr("dy", ".31em");

  g.append("rect")
    .attr("class", "overlay")
    .attr("width", width)
    .attr("height", height)
    .on("mouseover", function() {
      focus.style("display", null);
    })
    .on("mouseout", function() {
      focus.style("display", "none");
    })
    .on("mousemove", mousemove);

  function mousemove() {
    var x0 = x.invert(d3.mouse(this)[0]),
      i = bisectDate(currentData, x0, 1),
      d0 = currentData[i - 1],
      d1 = currentData[i],
      d = x0 - d0.date > d1.date - x0 ? d1 : d0;
    focus.attr("transform", "translate(" + x(d.date) + "," + y(d.value) + ")");
    focus.select("text").text(d.value);
    focus.select(".x-hover-line").attr("y2", height - y(d.value));
    focus.select(".y-hover-line").attr("x2", -x(d.date));
  }

  /******************************** Tooltip Code ********************************/
});
