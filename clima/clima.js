const axios = require("axios");
const lugar = require('../lugar/lugar');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5437c8df4ca75aa3dba79eb18673b47b&units=metric`);
    return resp.data.main.temp;

}
const getInfo = async(direccion) => {
    try {
        let ciudad = await lugar.getLugarLatLong(direccion);
        let clima = await getClima(ciudad.lat, ciudad.lng);

        return `El clima de ${direccion} es de ${clima}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }




}
module.exports = {
    getClima,
    getInfo
}