import { Schema, Document, Model } from 'mongoose';
import db from './db-connection';

export interface IProfile extends Document{
    gender: string;
    dob: Date;
    country: string;
}

// 
const ProfileSchema = new Schema<IProfile>({
    gender: { type: String, required: true },
    dob: { type: Date, required: true },
    country: { type: String, required: true },
});

// const Profile: Model<IProfile> = 
export default db.model<IProfile>('Profile', ProfileSchema);