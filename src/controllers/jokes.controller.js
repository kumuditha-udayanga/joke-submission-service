import { Joke } from "../models/joke.model.js";

export const createJoke = async (req, res) => {
    try {
        const joke = await Joke.create(req.body);
        res.status(200).json({ message:"Joke Submitted Successfully" });
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
};

export const getJokes = async (req, res) => {
    try {
        const jokes = await Joke.find({});

        if(!jokes.length) {
            return res.status(204).json({message: "empty list"});
        }

        res.status(200).json(jokes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    };
};

export const deleteJoke = async (req, res) => {
    try {
        const { id } = req.params;

        const joke = await Joke.findByIdAndDelete(id);

        if (!joke) {
            return res.status(404).json({ message: "Joke not found" });
        };

        res.status(200).json({ message: "Joke deleted successfully"});
    } catch (err) {
        res.status(500).json({ message: err.message });
    };
};

export const updateJoke = async (req, res) => {
    try {
      const { id } = req.params;
  
      const joke = await Joke.findByIdAndUpdate(id, req.body);
  
      if (!joke) {
        return res.status(404).json({ message: "Joke not found" });
      }
  
      res.status(200).json({ message: "Joke updated successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};
