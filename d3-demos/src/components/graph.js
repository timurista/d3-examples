import React, { Component } from "react";
import { extent as d3ArrayExtent } from "d3-array";
import {
  scaleLinear as d3ScaleLinear,
  scaleTime as d3ScaleTime
} from "d3-scale";
import { line as d3Line } from "d3-shape";

class Graph extends Component {
  render() {
    var data = [
      { day: "2017-04-18", productPerceivedQuality: "2.8" },
      { day: "2017-04-19", productPerceivedQuality: "2.9" },
      { day: "2017-04-20", productPerceivedQuality: "2.7" },
      { day: "2017-04-21", productPerceivedQuality: "4.3" },
      { day: "2017-04-22", productPerceivedQuality: "4.6" },
      { day: "2017-04-23", productPerceivedQuality: "5" },
      { day: "2017-04-24", productPerceivedQuality: "5.2" },
      { day: "2017-04-25", productPerceivedQuality: "5.1" },
      { day: "2017-04-26", productPerceivedQuality: "4.8" },
      { day: "2017-04-27", productPerceivedQuality: "4.9" },
      { day: "2017-04-28", productPerceivedQuality: "5.1" },
      { day: "2017-04-29", productPerceivedQuality: "5.3" },
      { day: "2017-04-30", productPerceivedQuality: "5.6" },
      { day: "2017-05-01", productPerceivedQuality: "6.2" }
    ];
    const height = 200;
    const width = 200;

    const selectX = datum => new Date(datum.day);
    const selectY = datum => datum.productPerceivedQuality;

    // Since this is "time series" visualization, our x axis should have a time scale.
    // Our x domain will be the extent ([min, max]) of x values (Dates) in our data set.
    // Our x range will be from x=0 to x=width.
    const xScale = d3ScaleTime()
      .domain(d3ArrayExtent(data, selectX))
      .range([0, width]);

    // Our y axis should just have a linear scale.
    // Our y domain will be the extent of y values (numbers) in our data set.
    const yScale = d3ScaleLinear()
      .domain(d3ArrayExtent(data, selectY))
      .range([height, 0]);

    // These two functions select the scaled x and y values (respectively) of our data.
    const selectScaledX = datum => xScale(selectX(datum));
    const selectScaledY = datum => yScale(selectY(datum));

    // Create a d3Line factory for our scales.
    const sparkLine = d3Line()
      .x(selectScaledX)
      .y(selectScaledY);

    // Create a line path of for our data.
    const linePath = sparkLine(data);

    return (
      <svg className="container" height={height} width={width}>
        <g className="line">
          <path d={linePath} />
        </g>
      </svg>
    );
  }
}

export default Graph;
