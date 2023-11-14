import express from "express";
import User from "../models/User.js";

export const getAllUsers = async(
    req: express.Request, 
    res: express.Response, 
    next: express.NextFunction
) => {
    try {
        const users = await User.find();

        res.status(200).json({ message: "ok", users });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "ERROR", cause: error.message })
    }
}

export const userSignup = async(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "ERROR", cause: error.message })
    }
}