const router = require("express").Router()
const { createPost, getPost, deletePost} = require("../controllers/post.controller")
const { verifyToken } = require("../middlewares/auth.middleware")

router.get("/", getPost)
router.post("/", verifyToken, createPost)
router.delete("/:id", verifyToken, deletePost)

module.exports = router