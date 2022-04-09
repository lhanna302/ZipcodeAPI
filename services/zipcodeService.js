const db = require('../connection');

async function getLocationInformation(zipCode){
    const rows = await db.query(
        `SELECT zip_code, city, county FROM zip_code_city_county where zip_code = ${zipCode}; `
    );
    return rows;
}

module.exports = {
    getLocationInformation,
}