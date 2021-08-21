const axios = require("axios");

const getLugarLatLong = async(direccion) => {
    const encodeURL = encodeURI(direccion);

    const Url = "http://api.openweathermap.org/data/2.5/weather";
    const apiKey = "5437c8df4ca75aa3dba79eb18673b47b";

    const instance = axios.create({
        baseURL: `${Url}?q=${encodeURL}&APPID=${apiKey}`
    })
    const resp = await instance.get();
    if (resp.data.lenght === 0) {
        throw new Error(`No hay resultado para ${direccion}`);
    }

    const data = resp.data.coord;
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLong
}

/*const encodeURL = encodeURI(argv.direccion);
console.log(encodeURL);

const Url = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "5437c8df4ca75aa3dba79eb18673b47b";

const instance = axios.create({
    baseURL: `${Url}?q=${encodeURL}&APPID=${apiKey}`
})
instance.get()
    .then(resp => {
        console.log(resp.data);
    })
    .catch(err => {
        console.log('ERROR!!!!!!', err);
    })*/