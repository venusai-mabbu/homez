import { compare } from "bcrypt";
import Post from "../models/Post.js";
import PostDetail from "../models/PostDetail.js";
import SavedPost from "../models/SavedPost.js";
import jwt from "jsonwebtoken";

export const getPosts = async (req, res) => {
  const query = req.query;

  try {
    // Construct query filters based on request query parameters
    const filters = {
      city: query.city || undefined,
      type: query.type || undefined,
      property: query.property || undefined,
      bedroom: query.bedroom ? parseInt(query.bedroom) : undefined,
      price: {
        ...(query.minPrice && { $gte: parseInt(query.minPrice) }),
        ...(query.maxPrice && { $lte: parseInt(query.maxPrice) }),
      },
    };
    // Find posts based on filters, filtering out undefined values
    const posts = await Post.find(Object.fromEntries(Object.entries(filters).filter(([_, v]) => v !== undefined)));

    res.status(200).json(posts);

  } catch (err) {
    //console.log(err);
    res.status(500).json({ message: "Failed to get posts" });
  }
};

export const getPost = async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  try {
    // Find post by ID and include related post details and user data
    // console.log("here11");
    // const post = await Post.find(Object.fromEntries(Object.entries(id))).populate("user", "username avatar");
    const post = await Post.findById(id);
  
    // console.log(post);

      const token = req.cookies?.token;

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET_KEY,

        async (err, payload) => {
        if (!err) {
          const saved = await SavedPost.findOne({
            postId: id,
            userId: payload.id,
          });
          return res.status(200).json({ ...post, isSaved: !!saved });
        }
      });
    } else {
      res.status(200).json({ ...post.toObject(), isSaved: false });
    }
  } catch (err) {
    // console.log(err);
    res.status(500).json({ message: "Failed to get post" });
  }
};

export const addPost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;
   
  try {
    // Create a new post with associated post details
   
    //error after here
    // const newPost = await Post.create({
    //   // ...body.postData,
    //   // userId: tokenUserId,
    //   // postDetail: await PostDetail.create(body.postDetail),
    // });
    
    const newPost = await Post.create({
      title: "Modern Apartment in Downtown",
      price: 2500,
      address: "123 Main St",
      city: "Metropolis",
      bedroom: 2,
      bathroom: 1,
      type: "buy",
      property: "apartment",
      latitude: "40.712776",
      longitude: "-74.005974",
      images: [
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
      ],
      user: tokenUserId,  // Ensure this matches your user reference in the schema
      //postDetail: postDetail._id  // Assign the ObjectId of the created PostDetail
      desc: "A modern, cozy apartment located in the heart of the city. Close to all amenities and public transportation.",
      utilities: "Owner",
      pet: "Allowed",
      income: "50000",
      size: 850,
      school: 4,
      bus: 5,
      restaurant: 3
    });
    
    // const postDetail = await PostDetail.create({
    //   desc: "A modern, cozy apartment located in the heart of the city. Close to all amenities and public transportation.",
    //   utilities: "Owner",
    //   pet: "Allowed",
    //   income: "50000",
    //   size: 850,
    //   school: 4,
    //   bus: 5,
    //   restaurant: 3
    // });
    //next test 
    
    
    //   try {
    //     // Step 1: Create the PostDetail without the `post` field initially
    //     const postDetail = await PostDetail.create({
    //       desc: body.postDetail.desc,
    //       utilities: body.postDetail.utilities,
    //       pet: body.postDetail.pet,
    //       income: body.postDetail.income,
    //       size: body.postDetail.size,
    //       school: body.postDetail.school,
    //       bus: body.postDetail.bus,
    //       restaurant: body.postDetail.restaurant
    //     });
    // console.log("corr")
    //     // Step 2: Create the Post and associate with the user
    //     const newPost = await Post.create({
    //       ...body.postData,
    //       user: tokenUserId,
    //       postDetail: postDetail._id  // Assign postDetail ID to newPost
    //     });
    
    //     // Step 3: Update the postDetail with the newPost ID
    //     await PostDetail.findByIdAndUpdate(postDetail._id, { post: newPost._id });
    
    //     res.status(200).json(newPost);
    //   } catch (err) {
    //     console.log(err);
    //     res.status(500).json({ message: "Failed to create post" });
    //   }
    
    

    





    res.status(200).json(newPost);
  } catch (err) {
    //console.log(err);
    res.status(500).json({ message: "Failed to create post" });
  }

};


export const updatePost = async (req, res) => {
  try {
    res.status(200).json();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update posts" });
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  try {
    // Find the post by ID and verify ownership
    const post = await Post.findById(id);

    if (!post || post.userId.toString() !== tokenUserId) {
      return res.status(403).json({ message: "Not Authorized!" });
    }

    // Delete the post if the user is authorized
    await Post.findByIdAndDelete(id);

    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete post" });
  }
};
