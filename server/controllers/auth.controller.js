//Auth controller
import express from 'express';
import bcrypt from 'bcryptjs';
import { generateToken } from '../lib/generateToken.js';
import Customer from '../models/customer.model.js';
import Host from '../models/host.model.js';

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
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        if (role === 'customer') {
            const customer = await Customer.findOne({ email });
            if (customer) {
                return res.status(400).send('User already exists');
            }
            const newUser = new Customer({
                name,
                email,
                password: hashedPassword,
                role,
                phone
            });
            if (!customer) {
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
        }
        else {
            const host = await Host.findOne({ email });
            if (host) {
                return res.status(400).send('User already exists');
            }
            const newUser = new Host({
                name,
                email,
                password: hashedPassword,
                role,
                phone
            });
            if (!host) {
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
        }
    } catch (error) {
        res.status(500).send('Something went wrong');
    }
};
export const login = async (req, res) => {
    const { email, password, role } = req.body;
    try {
        if (role !== "customer" && role !== "host") {
            return res.status(400).json({ message: "Please Enter a valid Role" });
        }
        if (role === "customer") {
            const user = await Customer.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: "Invalid Credentials" })
            }

            const isPasswordCorrect = await bcrypt.compare(password, user.password);

            if (!isPasswordCorrect) {
                return res.status(400).json({ message: "Invalid Credentials" })
            }

            generateToken(user._id, res);
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                phone: user.phone
            });
        }
        else {
            const user = await Host.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: "Invalid Credentials" })
            }

            const isPasswordCorrect = await bcrypt.compare(password, user.password);

            if (!isPasswordCorrect) {
                return res.status(400).json({ message: "Invalid Credentials" })
            }

            generateToken(user._id, res);
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                phone: user.phone
            });
        }
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