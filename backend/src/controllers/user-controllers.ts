import express from "express";
import bcrypt, { compare } from "bcrypt";
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
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(401).send("User already exists!");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ name, email, password: hashedPassword });

        await user.save();

        res.status(201).json({ message: "OK", id: user._id.toString() });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "ERROR", cause: error.message });
    }
}

export const userLogin = async(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        const { email, password } = req.body;
        const user  = await User.findOne({ email });

        if (!user) {
            return res.status(401).send("User not registered!");
        }

        const comparePassword = await compare(password, user.password);
        if (!comparePassword) {
            return res.status(403).send("Incorrect password");
        }
        res.status(200).json({ message: "OK", id: user._id.toString() });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "ERROR", cause: error.message });
    }
}
