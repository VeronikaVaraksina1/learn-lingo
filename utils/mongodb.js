import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

let chached = global.mongoose;

if (!chached) {
  chached = global.mongoose = { conn: null, promise: null };
}

export async function connectToMongoDB() {
  if (chached.conn) {
    return chached.conn;
  }

  if (!chached.promise) {
    chached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongoose) => {
        return mongoose;
    });
  }

  chached.conn = await chached.promise;
  return chached.conn;
}
