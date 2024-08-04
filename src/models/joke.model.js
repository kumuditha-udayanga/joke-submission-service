import mongoose from "mongoose";

const JokeSchema = mongoose.Schema({
    joke_text: {
        type: String,
        required: true
    },
    type_id: {
        type: Number,
        required: true
    }
});

export const Joke = mongoose.model("Joke", JokeSchema);