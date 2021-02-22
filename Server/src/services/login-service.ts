import User, {IUser} from '../models/user';
import jsonwebtoken from 'jsonwebtoken';

const JWT_SECRET = 'the&*(*) jwt C#creste';

// Create Login Service
export class LoginService {

    public async loginByUsernamePassword(username: string, password: string): Promise<IUser|null> {
        const user = await User.findOne({ username }).exec();

        // check existing user
        if (user) {

            // compare the passwords
            if (await user.comparePassword(password)) {
                return user;
            }
        }
        return null;
    }

    public async generateToken(user: IUser): Promise<string> {
        //console.log('generate token from user', user)
        const tokenBody = {
            sub: user.id,
            name: user.name,
            admin: false
        };
        console.log('tokenBody', tokenBody);

        // create token obeject for private key
        const token = jsonwebtoken.sign(tokenBody, JWT_SECRET);
        console.log('validate 1', await this.validateToken(token));
        console.log('validate 2', await this.validateTokenBadSecret(token));
        return token;
    }

    public async validateToken(token: string): Promise<boolean> {
        try {
            const result = await jsonwebtoken.verify(token, JWT_SECRET);
            console.log('validateToken(token: string): result = ', result);
            return true;
        } catch (err) {
            return false;
        }
    }

    // Will require a timer on Token - Bearer Token

    public async validateTokenBadSecret(token: string): Promise<boolean> {
        try {
            const result = await jsonwebtoken.verify(token, 'xx' + JWT_SECRET);
            console.log('validateTokenBadSecret(token: string): result = ', result);
            return true;
        } catch (err) {
            console.log('validateTokenBadSecret(token: string): failed');
            return false;
        }
    }
    
    public async registerWithUsernamePassword(
        username: string, 
        password: string,
        name: string
    ): Promise<IUser | null> {
        const user = await User.create({ 
            username,
            password,
            name
         });

        return user;
    }

    // Helper to reduce JSON object, return by contoller
    public toUserObject(iuserInst: IUser|null) : IUser|null {
        if (iuserInst == null){
            return null;
        }
        return {
            username: iuserInst.username,
            name: iuserInst.name
        } as IUser;
    }
}