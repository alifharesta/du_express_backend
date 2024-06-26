import express from "express";
import { getAllUsersProfile, createNewUserProfile, updateProfile, deleteProfile } from "../controllers/profile.js";

export const profileRoutes = express.Router();

// view all users profile
profileRoutes.get('/', getAllUsersProfile);

// create new user profile
profileRoutes.post('/create', createNewUserProfile);

// update user profile
profileRoutes.patch("/:id/update", updateProfile);

// delete user profile
profileRoutes.delete("/:id/delete", deleteProfile);
