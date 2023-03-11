const pool = require("../config/config.js")
 
class users {
    static getUsers = async (next) => {
        const findQuery =
        `
        SELECT *
        FROM users;`

       try{
        const data = await pool.query(findQuery)

        return data.rows;
       }catch(err) {
        next(err)
       }
        }
    static findByid = async(id, next) =>{
        const findQuery =
        `
        SELECT *
        FROM users
        WHERE users.id: $1;`
        try{
            const data = await pool.query(findQuery [id])
            if(data.rows.length === 0 ){
                next({name : "error not found"})
            }else{
                return data.rows[0];
            }
           }catch(err) {
            next(err)
           }
    }
    static postUsers = async (params,next) =>{
        try{
            console.log(params)
            const {email, gender, password, role} = params;
            const insertQuery =
            `INSERT INTO movies(email, gender, password, role)
                VALUES ($1, $2, $3, $4);`
            const data = await pool.query(insertQuery[email, gender, password, role])
            return data.rows[0];
        }catch(err){
            next(err)
        }
    }
    static deleteUsers = async (id, next) =>{
        try{
            const deleteQuery =
            `DELETE FROM users
                WHERE id = $1;`
            const data = await pool.query(deleteQuery, [id, next]);
            
            return data.rows[0];
        }catch(err){
            next(err)
        }
    }
    }