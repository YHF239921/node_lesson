const chalk = require('chalk')

console.log(chalk.bgRed("Hello chalk"))
console.log(chalk.green("Hello chalk"))

let lat = process.argv[2]
let lng = process.argv[3]

const cities = require('cities');

if(lat && lng){
    let city = cities.gps_lookup(lat,lng)
    console.log(city);
}