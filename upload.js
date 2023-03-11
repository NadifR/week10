const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const diskStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname, "/upload"))
    },
    filename:(req, file, cb) => {
        const random = date.now()+ `-`+ Math.round(math.random() * 1E9) 
        + path.extname(file.originalname)
        cb(null, file.fieldname + `-` + random)
    }
})

router.post("/upload", multer({storage: diskStorage}).single("img"),
(req, res, next)=>{
const file = req.file.path;
if(!file) {
    res.status(400).json({
        message: "no file"
    })
}else{
    res.status(200).json({
        message: "file upload"
    })
}
})

module.exports = router;