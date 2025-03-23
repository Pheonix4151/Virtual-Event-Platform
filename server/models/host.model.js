import mongoose from "mongoose";

const hostSchema = new mongoose.Schema({
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

const Host = mongoose.model('Host', hostSchema);

export default Host;