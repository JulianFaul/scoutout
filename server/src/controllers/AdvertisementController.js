const {Advertisement} = require('../models')

module.exports = {
  async getAllAdvertisements(req,res){
    try{
      const advertisements = await Advertisement.findAll({
       limit : 10
      })
      res.send(advertisements)
    }catch(err){
      res.status(500).send({
          error: "An error has occured trying to get all advertisements"
      })
    }
},

  async post(req,res){
      try{
        const advertisement = await Advertisement.create(req.body)
        res.send(advertisement)
      }catch(err){
        res.status(500).send({
            error: "An error has occured trying to create the advertisement"
        })
      }
  }
}