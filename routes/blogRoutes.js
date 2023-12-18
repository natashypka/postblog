let express = require("express");
let router = express.Router();
let {
  getAddPost,
  addPost,
  getPosts,
  getEditPost,
  editPost,
  deletePost,
} = require("../controllers/postControllers")

router.get("/add-post", getAddPost);
  
router.post("/add-post", addPost);
  
router.get("/posts", getPosts);
  
router.get("/edit-post/:id", getEditPost);
  
router.put("/edit-post/:id", editPost);
  
router.delete("/posts/:id", deletePost);

module.exports = router;