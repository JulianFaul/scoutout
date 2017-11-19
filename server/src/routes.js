const AuthenticationController       = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const AdvertisementController        = require('./controllers/AdvertisementController')




module.exports = app => {
    app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/login',
    AuthenticationController.login)

    app.get('/users',
    AuthenticationController.getAllUsers)

    app.get('/advertisements',
    AdvertisementController.getAllAdvertisements)
    
    app.post('/advertisements',
    AdvertisementController.post)
}

