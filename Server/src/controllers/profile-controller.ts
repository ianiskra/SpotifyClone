import profileService from '../services/profile-service';

export class ProfileController {

    public async getUserProfile(req: any, res: any, next: any) {
        const profile = await profileService.getUserProfile(req.user);

        if(profile) {
            res.json(profile);
        } else {
            res.json({});
        }
    }
}

export default new ProfileController();