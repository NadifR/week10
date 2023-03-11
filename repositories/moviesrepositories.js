const { deleteMovies } = require("../controllers/moviesController");
const movies =require("../models/moviesQuery")

class moviesRepositories  {

    static findMovies = async(next) =>{
      try{
        const data = await movies.getMovies(next);
        return data;
      }catch(err){
        next (err)
      }
    }
    static findByid = async(id, next) =>{
        try {
            const data = await movies.findByid(id, next);
        }catch(err){
            next(err)
        }
    }
    static postMovies = async(params, next) =>{
        try{
            const data = await movies.postMovies(params, next);
            return data;
        }catch(err){
            next(err)
        }
    }
    static deleteMovies = async (id ,next)=>{
        try {
            return moviesRepositories.deleteMovies(id, next)
        }catch(err) {
            next(err);
        }
    }
}



module.exports = moviesRepositories