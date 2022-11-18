import express from "express";
import {
  createUserHandler,
  deleteHandler,
  getAllUsers,
  loginHandler,
  updateHandler,
} from "./handlers";

const router = express.Router();

router.post("/login", loginHandler);
router.post("/create", createUserHandler);
router.put("/edit", updateHandler);
router.delete("/delete", deleteHandler);
router.get("/getAll", getAllUsers);

export default router;
