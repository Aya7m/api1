
import mysql from "mysql2"

export const dbconnection=()=>{
    const conn=mysql.createConnection('mysql://ubnk17af7gf86ero:PyqcLoV8NmFNJnidqYbv@b0lmmgblohrdfgjmm2ck-mysql.services.clever-cloud.com:3306/b0lmmgblohrdfgjmm2ck')
    conn.connect((error)=>{
        if(error) console.log("error db connection");
        console.log("db connected successfully");

    })
    return conn

}