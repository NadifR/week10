const usersServices = require("../services/usersServices.js");

class usersController {
    static findUsers = async (req, res, next) => {

        try {
            const data = await usersServices.findUsers(next);
            res.status(200).json(data);
        }catch(err){
            next(err);
        }
     }
     static findByid = async (id, next) =>{

        try{
            const {id} =req.params;
            const data = await usersServices.findByid(id, next);
            
            res.status(200).json(data);
        }catch(err){
            next(err);
        }
     }
     static deleteUsers = async(req, res, next) =>{
        try {
            const {id} = req.params;
            const data = await usersServices.deleteUsers(id, next);
    
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
module.exports = usersController;