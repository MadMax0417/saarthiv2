import mongoose, { Schema } from 'mongoose';

const emailSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        maxlength: 180
    },
},
    {
        timestamps: true
    }
);

export const Email =
    mongoose.models.Email || mongoose.model('Email', emailSchema);
