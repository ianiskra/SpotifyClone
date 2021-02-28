import Profile from '../models/profile';

export class ProfileService {

    public async getUserProfile(user: any): Promise<any> {

        try {
            const profile = await Profile.findOne({ userId: user.id }).exec();
            return profile;
        } catch(err) {
            return null;
        }
    }

    private toProfileObject(profile: any): any {

    }
}

export default new ProfileService();