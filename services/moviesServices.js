const moviesRepositories = require("../repositories/moviesrepositories.js");

class moviesServices  {
    static findMovies = async (next) =>{
        try{
            const data = await moviesRepositories.findMovies(next);
            return data;
        }catch(err){
            next(err)
        }
    }

    static findByid = async (id, next) =>{
        try{
            const data = await moviesRepositories.findByid(id, next);
            return data;
        }catch(err){
            next(err);
        }
    }
    static postMovies = async (params ) =>{
        try{
            const data = await moviesRepositories.postMovies(params, next);
            return data;
        }catch(err){
            next(err)
        }
    }
    static deleteMovies = async(id, next)=>{
        try{
            return moviesRepositories.deleteMovies(id, next);
        }catch(err){
            next(err);
        }
    }
}



module.exports = moviesServices;