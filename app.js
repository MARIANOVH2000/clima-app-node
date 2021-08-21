const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require("yargs").options({
    direccion: {
        alias: "d",
        desc: "Direccion de la ciudad para optener el clima",
        demand: true
    },
}).argv;
//argv.direccion
//lugar.getLugarLatLong(argv.direccion)
//  .then(console.log);
/*clima.getClima(-12.0432, -77.0282)
    .then(console.log)
    .catch(console.log);*/
clima.getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));