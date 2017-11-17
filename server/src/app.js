const express       = require ('express')
const bodyParser    = require ('body-parser')
const morgan        = require ('morgan')
const cors          = require ('cors')

const app           = express()

app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())

app.get('/register', (req,res) => {
    res.send({
        message: "hello world"
    })
})

app.listen(process.env.PORT || 8081)