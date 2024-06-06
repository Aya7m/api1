
import { Router } from "express";

import { addPost, deleteuser, getAllposts, getsinglepost, getuserposts, updatepost } from "./posts.controller.js";
const postesRouter = Router()


postesRouter.route('/').post(addPost).get(getAllposts)
postesRouter.route('/:id').get(getsinglepost).put(updatepost).delete(deleteuser)
postesRouter.get('/me/:id', getuserposts)

// postesRouter.post('/', addPost)

// postesRouter.get('/', getAllposts)

// postesRouter.get('/:id', getsinglepost)

// postesRouter.get('/me/:id', getuserposts)

// postesRouter.put('/:id', updatepost)

// postesRouter.delete('/:id', deleteuser)

export default postesRouter