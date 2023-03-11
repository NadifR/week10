const moviesServices = require("../services/moviesServices.js");

class moviesController {
    static findMovies = async (req, res, next) => {

        try {
            const data = await moviesServices.findMovies(next);
            res.status(200).json(data);
        }catch(err){
            next(err);
        }
     }
     static findByid = async (id, next) =>{

        try{
            const {id} =req.params;
            const data = await moviesServices.findByid(id, next);

            res.status(200).json(data);
        }catch(err){
            next(err);
        }
     }
     static postMovies = async(req, res, next) =>{
        try {
            
            const data = await moviesServices.postMovies(params, next)

            res.status(201).json(data)
        }catch(err){
            next(err);
        }
     }
    
     static deleteMovies = async(req, res, next) =>{
    try {
        const {id} = req.params;
        const data = await moviesServices.deleteMovies(id, next);

        if(data) {
            res.status(201).json(data)({
                message: "delete seccesfully", data
            })
        }else{
            next({name : "error delete"})
        }

    }catch(err){
        next(err);
    }
 }
}
module.exports = moviesController;