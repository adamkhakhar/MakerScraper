const csv = require('csv-parser')
const fs = require('fs')

const CSV_PATH = './src/data/public_school_addresses_and_lat_longs.csv'
const JSON_PATH = './src/data/public_school_addresses_and_lat_longs.json'
const data = []
fs.createReadStream(CSV_PATH)
  .pipe(csv())
  .on('data', row => {
    data.push(row)
  })
  .on('end', () => {
    console.log('CSV file successfully processed')
    fs.writeFile(JSON_PATH, JSON.stringify(data), 'utf-8', err => {
      if (err) {
        console.log('There was an error writing to the file')
        throw new Error(err)
      } else {
        console.log('Wrote to file')
      }
    })
  })
