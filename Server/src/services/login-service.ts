import User from '../models/user';

export class LoginService {
    public async loginByUsernamePassword(username: string, password: string) {
        const user = await User.findOne({ username }).exec();

        if (user) {
            // compare the passwords
            if (user.comparePassword(password)) {
                return user;
            }
        }

        return null;
    }
    
    public async registerWithUsernamePassword(
        username: string, 
        password: string,
        name: string
    ) {
        const user = await User.create({ 
            username,
            password,
            name
         });

        if (user) {
            // compare the passwords
            if (user.comparePassword(password)) {
                return user;
            }
        }

        return null;
    }
}