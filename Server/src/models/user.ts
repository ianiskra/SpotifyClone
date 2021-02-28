import { Schema, Document, Model } from 'mongoose';
import db from './db-connection';
import bcrypt from 'bcrypt';

// Strong typing of mongoose document
export interface IUser extends Document {
    username: string;
    password:string;
    name: string;
    comparePassword: (trialPassword: string) => boolean;
}

const UserSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    password: { 
        type: String, required: true,
        min:[8, '8 character min']
    },
    name: {type: String, required: true}
});

// Validation steps to perform before we save
UserSchema.pre('validate', async function (next) {
    // check password strength
});

// Steps to perform before we save
UserSchema.pre('save', async function (next) {
    // encrypt and salt password
    this.password = await bcrypt.hash(this.password, 10);
});

UserSchema.methods.comparePassword = async function(trialPass: string) {
    
    // Compare trial with hashed password from database
    return await bcrypt.compare(trialPass, this.password);
}

const User: Model<IUser> = db.model<IUser>('User', UserSchema);
export default User;