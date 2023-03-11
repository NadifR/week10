const usersRepositories = require("../repositories/usersrepositories.js")

class usersServices  {
    static findUsers = async (next) =>{
        try{
            const data = await usersRepositories.findUsers(next);
            return data;
        }catch(err){
            next(err)
        }
    }

    static findByid = async (id, next) =>{
        try{
            const data = await usersRepositories.findByid(id, next);
            return data;
        }catch(err){
            next(err);
        }
    }
    static deleteUsers = async(id, next)=>{
        try{
            return usersRepositories.deleteUsers(id, next);
        }catch(err){
            next(err);
        }
    }
}

