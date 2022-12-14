const express = require("express")
const router = express.Router()
const multer = require("multer")
const Image = require('../models/image')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
     
      cb(null, Date.now() + '-' + file.originalname )
    }
  })
  
  const upload = multer({ storage: storage })



router.post("/",upload.single("avatars"),(req,res)=>{
    let path = req.protocol + "://" + req.hostname + ":" +process.env.PORT + "/uploads/"
    let newImage = new Image({imageName:path})
    newImage.save()
    .then((img)=>res.status(201).send(img))
    .catch((err)=>{
      console.error(err.message)
      res.status(500).send("server error")
    })
   
})


module.exports=router
