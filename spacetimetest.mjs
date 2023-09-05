import * as d3 from 'd3';
import fs from 'fs';

// Read the CSV file content
const csvFilePath = "amsfinal.csv";
const csvData = fs.readFileSync(csvFilePath, "utf8");

// Parse the CSV data using d3.csvParse
const parsedData = d3.csvParse(csvData);

// Get the column names from the parsed data
const columns = parsedData.columns;

// Transform the parsed data to the desired format
const transformedData = parsedData.map(item => {
  const transformedItem = {};
  columns.forEach(column => {
    transformedItem[column] = item[column];
  });
  return transformedItem;
});

// Save the transformed data to a JSON file
const outputFilePath = "amsfinal.json";
fs.writeFileSync(outputFilePath, JSON.stringify(transformedData, null, 2));

console.log("Transformed data saved to:", outputFilePath);
