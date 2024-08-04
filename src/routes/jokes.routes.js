import express from "express";
import { createJoke, getJokes, deleteJoke, updateJoke } from "../controllers/jokes.controller.js";

export const jokeRoutes = express.Router();

jokeRoutes.route("/").get(getJokes);

jokeRoutes.route("/").post(createJoke);

jokeRoutes.route("/:id").put(updateJoke);

jokeRoutes.route("/:id").delete(deleteJoke);

