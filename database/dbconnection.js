
import mysql from "mysql2"

export const dbconnection=()=>{
    const conn=mysql.createConnection('mysql://u9qis372lrv8qedj:UIzxmFLcbVyBL2ZcgUB2@bcp9b5dxe3fsqjckgqoh-mysql.services.clever-cloud.com:3306/bcp9b5dxe3fsqjckgqoh')
    conn.connect((error)=>{
        if(error) console.log("error db connection");
        console.log("db connected successfully");

    })
    return conn

}