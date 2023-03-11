const pool = require("../config/config.js");

 
class movies {
    static getMovies = async (next) => {
        const findQuery =
        `
        SELECT *
        FROM movies;`

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
        FROM movies
        WHERE movies.id: $1;`
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
    static postMovies = async (params,next) =>{
        try{
            console.log(params)
            const {tilte, genres, year} = params;
            const insertQuery =
            `INSERT INTO movies(title, genres, year)
                VALUES ($1, $2, $3);`
            const data = await pool.query(insertQuery[tilte, genres, year])
            return data.rows[0];
        }catch(err){
            next(err)
        }
    }
    static deleteMovies = async (id, next) =>{
        try{
            const deleteQuery =
            `DELETE FROM movies
                WHERE id = $1;`
            const data = await pool.query(deleteQuery, [id, next]);
            
            return data.rows[0];
        }catch(err){
            next(err)
        }
    }
    }

