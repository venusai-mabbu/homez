import mongoose from "mongoose";
const { Schema } = mongoose;

// PostDetail Schema
// const PostDetailSchema = new Schema({
//   desc: { type: String, required: true },
//   utilities: { type: String },
//   pet: { type: String },
//   income: { type: String },
//   size: { type: Number },
//   school: { type: Number },
//   bus: { type: Number },
//   restaurant: { type: Number },
//   post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
// });

// // Export the PostDetail model
// const PostDetail = mongoose.model("PostDetail", PostDetailSchema);
// export default PostDetail;
// Assuming the `PostDetail` schema file
const PostDetailSchema = new Schema({
  desc: { type: String, required: true },
  utilities: { type: String },
  pet: { type: String },
  income: { type: String },
  size: { type: Number },
  school: { type: Number },
  bus: { type: Number },
  restaurant: { type: Number },
  post: { type: Schema.Types.ObjectId, ref: "Post" }  // reference to Post
});

const PostDetail = mongoose.model("PostDetail", PostDetailSchema);
export default PostDetail;
