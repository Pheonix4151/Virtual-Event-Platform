import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/auth.model.js';
import { generateToken } from '../lib/generateToken.js';

export const signup = async (req, res) => {
    try {
        const { name, email, password, role, phone } = req.body;
        if (!name || !email || !password || !role || !phone) {
            return res.status(400).send('Please fill all the fields');
        }
        if (password.length < 6) {
            return res.status(400).send('Password must be atleast 6 characters');
        }
        if (role !== 'host' && role !== 'customer') {
            return res.status(400).send('Invalid role');
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).send('User already exists');
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role,
            phone
        });
        if (!user) {
            generateToken(newUser._id, res);
            await newUser.save();
            res.status(201).send({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
                phone: newUser.phone
            });
        }
    } catch (error) {
        res.status(500).send('Something went wrong');
    }
};
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }
        
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }

        generateToken(user._id,res);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            phone: user.phone
        });
    } catch (error) {
        console.log("Error In Login Controller");
        res.status(500).json({ message: "Internal Server Error" });
    }
};
export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged Out Successfully" });
    } catch (error) {
        console.log("Error in Logout Controller");
        res.status(500).json({ message: "Internal Server Error" });
    }
};