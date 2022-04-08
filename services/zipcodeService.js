const db = require('../connection');

async function getLocationInformation(zip_code){
    console.log(zip_code);
    const rows = await db.query(
        `SELECT zip_code, city, county FROM zip_code_city_county where zipcode == ${zip_code}; `
    );

    return rows;
}

module.exports = {
    getLocationInformation,
}