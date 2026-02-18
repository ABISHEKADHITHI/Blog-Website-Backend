const {Post} = require("../models")

exports.createPost = async (req, res) => {
    const post = await Post.create({
        title: req.body.title,
        content: req.body.content,
        UserId: req.user.id
    })
    res.json(post)
}

exports.getPost = async (req, res) => {
    const posts = await Post.findAll()
    res.json(posts)
}

exports.deletePost = async (req, res) => {
    const post = await Post.findByPk(req.params.id)
    if(!post){
        return res.status(404).json({message: "Not found"})
    }
    if ( req.user.role !== "admin" && post.UserId !== req.user.id ){
        return res.status(403).json({message: "Forbidden"})
    }

    await post.destroy()
    res.json({message: "post deleted sucessfully"})
}