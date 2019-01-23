## TOPOJSON

where possible since its a lot smaller than geoJson

## Queue problem

you can use queue and defer to load multiple data sets.

```js
d3.queue()
  .defer(d3.json, "data/map.json")
  .defer(d3.csv, "data/example.csv")
  .await(function(map, example) {
    // do thing
  });
```

## D3 V5 Promise based approach

```js
var promises = [d3.json("data/map.json"), d3.csv("data/example.csv")];

Promise.all(promises)
  .then(function(allData) {
    var map = allData[0]; // do thing
  })
  .catch(function(e) {
    console.log(e);
  });
```
