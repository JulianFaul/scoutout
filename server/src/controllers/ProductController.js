const {Product,Advertisement} = require('../models')
const _ = require('lodash')


module.exports = {
    async getAllProducts(req, res) {
        try {
            const {advertisement_id} = req.query
            console.log(advertisement_id)
            const products = await Product.findAll(
                {
                where: {
                    advertisement_id : advertisement_id
                }
            }
        )
            res.send(products)
        } catch (err) {
            res.status(500).send({
                error: "An error has occured trying to get all Products"
            })
        }
    },
    async post(req, res) {
        try {
            const advertisementId = req.body
            const product = await Product.create(req.body,{
                AdvertisementId : advertisementId
            })
            res.send(product)
        } catch (err) {
            res.status(500).send({
                error: 'An error occurred trying to create the Product.'
            })
        }
    }
}