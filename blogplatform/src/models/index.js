const sequelize = require("../config/db")

const User = require("./user.model")
const Post = require("./post.model")
const Comment = require("./comment.model")
const Like = require("./like.model")

User.hasMany(Post)
Post.belongsTo(User)

Post.hasMany(Comment)
Comment.belongsTo(Post)

User.hasMany(Comment)
Comment.belongsTo(User)

User.hasMany(Like)
Like.belongsTo(User)

Post.hasMany(Like)
Like.belongsTo(Post)

module.exports = {
    sequelize,
    User,
    Post,
    Comment,
    Like
}