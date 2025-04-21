import { model, Schema } from "mongoose";

const FeedBackSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

const Feedback = model("Feedback", FeedBackSchema);
export default Feedback;
