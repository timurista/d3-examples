const y = [
  {
    countryAbbrev: "CN",
    patentCount: "3303"
  },
  {
    countryAbbrev: "US",
    patentCount: "213"
  },
  {
    countryAbbrev: "KR",
    patentCount: "98"
  },
  {
    countryAbbrev: "RU",
    patentCount: "77"
  },
  {
    countryAbbrev: "JP",
    patentCount: "71"
  },
  {
    countryAbbrev: "DE",
    patentCount: "26"
  },
  {
    countryAbbrev: "ES",
    patentCount: "14"
  },
  {
    countryAbbrev: "CA",
    patentCount: "12"
  },
  {
    countryAbbrev: "GB",
    patentCount: "12"
  },
  {
    countryAbbrev: "FR",
    patentCount: "8"
  },
  {
    countryAbbrev: "EP",
    patentCount: "7"
  },
  {
    countryAbbrev: "FI",
    patentCount: "1"
  }
];

// get lat lang for countries here
// iterate over and get counts
// let counts = {}
// for ()

let topCountries = y.map(x => ({
  ...x,
  ...countryCodeMap[x.countryAbbrev.toLowerCase()]
}));

topCountries = topCountries.map(x => ({ ...x, lat: x.long, long: x.lat }));

const countryCords = topCountries.map(x => [Number(x.lat), Number(x.long)]);
