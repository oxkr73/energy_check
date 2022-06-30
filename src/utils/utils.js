export const queryApi = (uri) => {
    return fetch(uri)
        .then((resp) => resp.json())
        .then((data) => data);
};

export const getEnergyData = async (start, end) => {
    try {
        const data = await queryApi(`https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=${start}T00:00&end_date=${end}T23:59&time_trunc=hour`);
        return data;
    } catch (error) {
        console.log(error);
    }
}