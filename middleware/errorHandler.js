const errorHandler = (err, rq, res, next) => {
    console.log(err);
    if(err.name === "error not found") {
        res.status(404).json({
            message: "error not found"
        })
    }else{
        res.status(500).json({
            message: "internal error"
        })
    }
}


module.exports = errorHandler;