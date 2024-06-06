import { dbconnection } from "../database/dbconnection.js"
import bycrpt from "bcrypt"

const connection = dbconnection()
export const checkEmailexist = (req, res, next) => {

    connection.execute(`select email from users where email='${req.body.email}'`, ((err, data) => {

        if (data?.length != 0) return res.status(409).json({ message: 'acount already exist' })

        req.body.password = bycrpt.hashSync(req.body.password, 8)


        next()


    }))
}