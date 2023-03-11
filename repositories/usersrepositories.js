const movies =require("../models/usersQuery.js")

class usersRepositories  {

  static findMovies = async(next) =>{
    try{
      const data = await users.getMovies(next);
      return data;
    }catch(err){
      next (err)
    }
  }
  static findByid = async(next) =>{
      try {
          const data = await users.findByid(next);
      }catch(err){
          next(err)
      }
  }
  static postUsers = async(params, next) =>{
    try{
        const data = await users.postUsers(params, next);
        return data;
    }catch(err){
        next(err)
    }
}
static deleteUsers = async (id ,next)=>{
    try {
        return usersRepositories.deleteUsers(id, next)
    }catch(err) {
        next(err);
    }
}
}



module.exports = usersRepositories;