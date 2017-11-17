const express     = require('express')
const morgan      = require('morgan')
const bodyParser  = require('body-parser')
const cors        = require('cors')
const {sequelize} = require('./models')
const config      = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

// {force:true} in sync if want to clear tables
sequelize.sync({force:false})
.then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)    
})


