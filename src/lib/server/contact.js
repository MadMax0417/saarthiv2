import mongoose, {Schema} from 'mongoose';

const contactSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
			maxlength: 120
		},
		email: {
			type: String,
			required: true,
			trim: true,
			lowercase: true,
			maxlength: 180
		},
		phone: {
			type: String,
			default: '',
			trim: true,
			maxlength: 40
		},
		ip: {
			type: String,
			default: '',
			trim: true,
			maxlength: 100
		},
		message: {
			type: String,
			required: true,
			trim: true,
			maxlength: 5000
		}
	},
	{
		timestamps: true
	}
);

export const Contact =
	mongoose.models.Contact || mongoose.model('Contact', contactSchema);
