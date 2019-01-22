# d3-examples

Projects using d3 for personal development

## SVG notes

no loss in quality if resized
no lag if you move them all around

## Translation

we can move a group 200 or so pixels to the right, using transform="translat(200, 0)"

## Allowing users to explore data

Legend for groups using rows and combination of rect and text.

## D3 format specifier

[fill|align][sign][symbol][0][width][,][.precision][type]

sign: - will show negative for negative numbers, + only for positive.

## Time parse

`d3.timeParse('%y/%m/%d') // time formatting parser and formatting`

## Best sites to find boiler-plat code

blocks.org
and blockbuilder.org

## V5

no queues for loading multiple data
now promises
d3.schemeCategory20

## D3 design toolkit

data into one of 3. Ordinal (ranking), Categorical (African, Asian, etc). Quantitative (numerical)
Position and length numbers. For ranking, use area. Categories use shapes or colors. Dont use more than 5-8 colors.

## D3 Layouts

to quickly create all kinds of visualizations.
spits out same data, then these values in path generator.

## D3 Legacy Notes

d3.layout.pie() --> d3.pie()

### community one

d3.layout.cloud --> d3.layout.cloud

## data structure

pick right data structure in first place can improve performance.

size of id with size of homer. Need to do brute force search. Thousands of rows.
COnvert data into object.

## d3 nest

d3 nest, group data according to different keys.

```js
var entries = d3
  .nest()
  .key(function(d) {
    return d.year;
  })
  .key(function(d) {
    return d.variety;
  })
  .entries(yields);
```

should update with far less lag
