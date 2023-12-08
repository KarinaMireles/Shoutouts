import { Router } from "express";
import {
  getShoutout,
  getShoutout,
  postShoutout,
  putShoutout,
  deleteShoutout,
} from "../contollers/Shoutouts";

const router = Router();

router.post("/", postShoutout);
router.get("/", getShoutout);
router.get("/:id", getShoutout);
router.put("/:id", putShoutout);
router.delete("/:id", deleteShoutout);

export default router;
