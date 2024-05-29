const fs = require("fs");
const csv = require("csv-parser");
const filePath = require("path").resolve(__dirname, "imdbId.csv");

export const getTenRandomIMDBId = (): Promise<string[]> => {
  let results: string[] = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
    .pipe(csv({ headers: false }))
    .on("data", (data: any) => {
      results.push(data[Object.keys(data)[0]]);
    })
    .on("end", () => {
      results = results.sort(() => 0.5 - Math.random()).slice(0, 10);
      resolve(results);
    })
    .on("error", reject)
  })

};
