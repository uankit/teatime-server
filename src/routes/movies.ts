import express from "express";
import { get } from "../controllers/movies";

const router = express.Router();

router.get("/", get);


module.exports = router;