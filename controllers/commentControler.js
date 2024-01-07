const Post = require("../models/postModel");
const Comment = require('../models/commentmodel');

exports.createComment = async (req, res) => {
    try {
        // Fetch data from req body
        const { post, user, body } = req.body;

        // Create a comment object
        const comment = new Comment({
            post,
            user,
            body
        });

        // Save the comment data
        const savedComment = await comment.save();

        // Find the post by id and add the new comment's ObjectId to its comments array
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { comments: savedComment._id } },
            { new: true }
        );

        // Check if the post was found and updated successfully
        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Respond with the updated post or any other relevant response
        res.json(updatedPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'InternalServer Error' })
        // .populate("comments") //populate the comments aa raya with comment document
        // .exec();

    }
};
