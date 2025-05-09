import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
},
{
    timestamps:true
}
);

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;