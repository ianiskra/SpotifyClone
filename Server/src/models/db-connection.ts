import mongoose, { ConnectionOptions } from 'mongoose';

const mongoDbUrl = process.env.mongourl || 'mongodb://localhost:27017/Spotify';
const mongoDbOpt = {useNewUrlParser: true, useUnifiedTopology: true} as ConnectionOptions;

const connection = mongoose.createConnection(mongoDbUrl, mongoDbOpt);

export default connection;