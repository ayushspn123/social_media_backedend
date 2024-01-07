const Post=require("../models/postModel")
const Like=require("../models/likemodel")
 

exports.likepost=async(req,res)=>{
    try{
        const {post ,user}=req.body;    
        const like=new Like({
            post,user,
        })
        const  savedLike=await like.save();
        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}}   ,{new:true})
        res.json(
            {
                post:updatedPost,
            }
        )
    }
    catch(err){
        return res.status(400).json(
            {
                error:"error in connections"
            }
        )

    }

}




exports.dummy = (req, res) => {
    res.send("this is dummy page");
};
