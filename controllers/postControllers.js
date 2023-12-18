let Post = require("../models/postModel");

let getAddPost = (req, res) => {
  res.render("add-post", { title: "Add post" });
};

let addPost = (req, res) => {
  let { title, author } = req.body;
  let post = new Post({ title, author });
    post
      .save()
      .then(() => res.redirect("/posts"))
      .catch((error) => {
        console.log(error);
        res.render("error");
    });
};

let getPosts = (req, res) => {
  Post.find()
    .then((posts) => res.render("posts", { title: "Posts", posts }))
    .catch((error) => {
      console.log(error);
      res.render("error");
    });
};

let getEditPost = (req, res) => {
  let id = req.params.id;
    Post.findById(id)
      .then((post) =>
        res.render("edit-post", { title: post.title, id: post._id, post })
      )
      .catch((error) => {
        console.log(error);
        res.render("error");
    });
};

let editPost = (req, res) => {
  let id = req.params.id;
  const { title, author } = req.body;
    Post.findByIdAndUpdate(id, { title, author })
      .then(() => res.redirect(`/posts`))
      .catch((error) => {
        console.log(error);
        res.render(createPath("error"));
      });
};

let deletePost = (req, res) => {
  let id = req.params.id;
    Post.findByIdAndDelete(id)
      .then((posts) => res.render("posts", { title: "Posts", posts }))
      .catch((error) => {
        console.log(error);
        res.render("error");
    });
};

module.exports = {
  getAddPost,
  addPost,
  getPosts,
  getEditPost,
  editPost,
  deletePost,
};
