import React, { Component } from "react";
import * as d3 from "d3";
import d from "./data.csv";

// const data = d3.csvParse(d)

export class PackedCircles extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    d3.csv(d, data => this.setState({ data }));
  }

  render() {
    const data = this.state.data;
    const width = 960;
    const height = 650;
    if (!this.state.data.length) return null;

    var format = d3.format(",d");

    // Different way for us to get a color scale
    var color = d3.scaleSequential(d3.interpolateMagma).domain([-4, 4]);

    var stratify = d3.stratify().parentId(function(d) {
      return d.id.substring(0, d.id.lastIndexOf("."));
    });

    // Similar to how d3.treemap looks
    var pack = d3
      .pack()
      .size([width - 2, height - 2])
      .padding(3);

    let node = null;

    function hovered(hover) {
      return function(d) {
        d3.selectAll(
          d.ancestors().map(function(d) {
            return d.node;
          })
        ).classed("node--hover", hover);
      };
    }

    // d3.csv("./data.csv", function(error, data) {
    //   if (error) throw error;

    console.log(data);
    // Create the root node with d3.stratify()
    var root = d3
      .stratify(data)
      .sum(function(d) {
        return d.value;
      })
      .sort(function(a, b) {
        return b.value - a.value;
      });
    // Adds an x, y, and r value to each node
    pack(root);

    node = root.descendants().map(d => {
      return (
        <g
          transform={"translate(" + d.x + "," + d.y + ")"}
          className={
            "node" +
            (!d.children ? " node--leaf" : d.depth ? "" : " node--root")
          }
          onMouseOver={hovered(true)}
          onMouseOut={hovered(true)}
        >
          <circle id={"node-" + d.id} r={d.r} fill={color(d.depth)} />
        </g>
      );
    });
    // });

    // Add a group for all the descendents of the root node
    // var node = svg.select("g")
    //     .selectAll("g")
    //     .data(root.descendants())
    //     .enter().append("g")
    //         .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
    //         .attr("class", function(d) { return "node" + (!d.children ? " node--leaf" : d.depth ? "" : " node--root"); })
    //         .each(function(d) { d.node = this; })
    //         .on("mouseover", hovered(true))
    //         .on("mouseout", hovered(false));
    // // Append a circle to each node. Color-coded by level of the hierarchy
    // node.append("circle")
    //     .attr("id", function(d) { return "node-" + d.id; })
    //     .attr("r", function(d) { return d.r; })
    //     .style("fill", function(d) { return color(d.depth); });
    // // Add labels for only the leaf nodes
    // var leaf = node.filter(function(d) { return !d.children; });
    // leaf.append("clipPath")
    //     .attr("id", function(d) { return "clip-" + d.id; })
    //     .append("use")
    //         .attr("xlink:href", function(d) { return "#node-" + d.id + ""; });
    // leaf.append("text")
    //     .attr("clip-path", function(d) { return "url(#clip-" + d.id + ")"; })
    //     .selectAll("tspan")
    //     .data(function(d) { return d.id.substring(d.id.lastIndexOf(".") + 1).split(/(?=[A-Z][^A-Z])/g); })
    //     .enter().append("tspan")
    //         .attr("x", 0)
    //         .attr("y", function(d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
    //         .text(function(d) { return d; });
    // // Simple tooltip
    // node.append("title")
    //     .text(function(d) { return d.id + "\n" + format(d.value); });
    // });
    // When we hover over a node, highlight all of the node's ancestors
    // function hovered(hover) {
    //     return function(d) {
    //         d3.selectAll(d.ancestors().map(function(d) { return d.node; })).classed("node--hover", hover);
    //     };
    // }
    return (
      <svg width={width} height={height}>
        {null}
      </svg>
    );
  }
}

export default PackedCircles;
