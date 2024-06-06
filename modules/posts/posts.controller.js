import { dbconnection } from "../../database/dbconnection.js"


let connect = dbconnection()
const addPost = (req, res) => {
    connect.query(`insert into posts set ?`, req.body)
    res.status(201).json({ message: 'success' })

}

const getAllposts = (req, res) => {
    connect.execute(`select users.id,users.name,posts.id as postsId,posts.title,posts.discription from users join posts on users.id=posts.user_id`, (err, data) => {
        res.status(200).json({ message: 'success', allPosts: data })
    })



}


const getsinglepost = (req, res) => {
    connect.execute(`select users.id,users.name,posts.id as postsId,posts.title,posts.discription from users join posts on users.id=posts.user_id where posts.id=${req.params.id}`, (err, data) => {
        res.status(200).json({ message: 'success', post: data })
    })

}

const getuserposts = (req, res) => {
    connect.execute(`select users.id,users.name,posts.id as postsId,posts.title,posts.discription from users join posts on users.id=posts.user_id where users.id=${req.params.id}`, (err, data) => {
        res.status(200).json({ message: 'success', posts: data })
    })

}


const updatepost = (req, res) => {
    connect.query(`update posts set ? where id= ?`,[req.body,req.params.id])
    res.status(200).json({ message: "success" })
}

const deleteuser = (req, res) => {
    connect.execute(`delete from posts where id=${req.params.id}`)
    res.status(200).json({ message: "success" })
}
export {
    addPost,
    getAllposts,
    getsinglepost,
    getuserposts,
    updatepost,
    deleteuser


}