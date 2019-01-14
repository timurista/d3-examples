let y = [];

// parse assignee
const parseAssignee = a => {
  let pass = a
    .toLowerCase()
    .replace(/[,.()]/g, "")
    .replace("'", "");
  // pass = pass.replace(" univ ", "university");
  pass = pass.replace(/ \w{0,1} /g, "").replace("&", "and");
  pass = pass.split(/\s+/g).join(" ");

  return pass;
};

let assigneed = y.map(x => [
  parseAssignee(x.assignee),
  parseAssignee(x.inventor)
]);

// map assignee to company
let count = {};
let inventorToAssignee = {};

let uncounted = [];

// console.log(assigneed);
for (let a of assigneed) {
  if (a[0] === a[1]) uncounted.push(a);
  else {
    inventorToAssignee[a[1]] = a[0];
    let key = a[0];
    if (count[key]) {
      count[key] = {
        count: ++count[key].count || 1,
        inventor: a[1]
      };
    } else {
      count[key] = {
        count: 1,
        inventor: a[1]
      };
    }
  }
}

// console.log(count);
// process uncounted
for (let c of uncounted) {
  let found = inventorToAssignee[c[0]];
  if (found) {
    count[found] = ++count[found] || 1;
  }
}

// map company to assignee in company

// count = Object.entries(count)
//   .sort((a, b) => b.value - a.value)
//   .map(x => x[0])
//   .sort((a, b) => a.localeCompare(b));
// .map(x => ({ label: x[0], value: x[1].count }))
// .slice(0, 5);

count = Object.entries(count)
  .map(x => x[0])
  .sort((a, b) => b.localeCompare(a));
// .slice(0, 5);

console.log(count);

const fs = require("fs");
fs.writeFile("./tmp/text.txt", count.join("\n"), function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});
