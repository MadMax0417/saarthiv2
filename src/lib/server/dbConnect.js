import mongoose from 'mongoose';
import { MONGODB_URI, MONGODB_APP_NAME } from '$env/static/private';

if (!MONGODB_URI) throw new Error('Missing MONGODB_URI');

const globalForMongoose = globalThis;

//exisiting connection check 
let cached = globalForMongoose.__mongoose;

//existing promise check
if (!cached) {
	cached = globalForMongoose.__mongoose = { conn: null, promise: null };
}


export async function connectDB() {
	//exisiting connection check
	if (cached.conn) return cached.conn;

	
	if (!cached.promise) {
		cached.promise = mongoose.connect(MONGODB_URI, {
			dbName: MONGODB_APP_NAME
		}).then((mongoose) => mongoose);
	}

	cached.conn = await cached.promise;

	return cached.conn;
}
