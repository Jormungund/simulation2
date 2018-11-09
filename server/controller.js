var houses = [];

module.exports = {
    getHouses: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_houses().then((response) => {
            res.status(200).send(response)
        })
    },
    newHouse: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { name, address, city, state, zip, image_url, mortgage, rent } = req.body;
        dbInstance.new_house([ name, address, city, state, zip, image_url, mortgage, rent ]).then((response) => {
            res.status(200).send(response)
        })
    }
}