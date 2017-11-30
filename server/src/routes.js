const AuthenticationController       = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const AdvertisementController        = require('./controllers/AdvertisementController')
const AdvertisementLikeController        = require('./controllers/AdvertisementLikeController')
const ProductController        = require('./controllers/ProductController')

module.exports = app => {
    app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/login',
    AuthenticationController.login)

    app.get('/users',
    AuthenticationController.getAllUsers)

    app.get('/companies',
    AdvertisementController.getAllAdvertisements)
    
    app.post('/advertisements',
    AdvertisementController.post)

    app.get('/companies/:companyId',
    AdvertisementController.show)

    app.delete('/advertisements/:advertisementId',
    AdvertisementController.delete)

    app.put('/advertisements/:advertisementId',
    AdvertisementController.put)

    app.get('/advertisementlikes',
    AdvertisementLikeController.getAllAdvertisementLikes)

    app.post('/advertisementlikes',
    AdvertisementLikeController.post)

    app.delete('/advertisementlikes/:advertisementLikeId',
    AdvertisementLikeController.delete)

    app.post('/product',
    ProductController.post)

    app.get('/product',
    ProductController.getAllProducts)
}

