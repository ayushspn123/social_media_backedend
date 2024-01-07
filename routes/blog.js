const express = require("express");
const router = express.Router();
const { dummy } = require("../controllers/likeController");
const {createComment}=require("../controllers/commentControler")
const {createPost, getAllPosts}=require("../controllers/postController");
const {likepost}  =require("../controllers/likeController");

router.get('/dummy', dummy);
router.post("/createComment",createComment);
router.post("/posts/create",createPost)
router.get("/post",getAllPosts)
router.post("/likes/like",likepost);

module.exports = router;