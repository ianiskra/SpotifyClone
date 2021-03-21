import axios from "axios";

const loginUrl = '/login';
const registerUrl = '/login/register';

export class LoginService {

    private user: any = {
        fred: "fred123"
    };

    public async loginWithUsernamePassword(
        username: string,
        password: string
    ): Promise<string|null> {
        try {
            const resp = await axios.post(loginUrl, {username, password});
            debugger
    
            return null;
        } catch(err) {
            console.log('loginWithUsernamePassword: failed ', err)
            debugger
    
            return null;
        }
    }

    public async register(
        username: string,
        password: string,
        name: string
    ): Promise<string|null> {
        try {
            const resp = await axios.post(registerUrl, {username, password, name});
            debugger
    
            return null;
        } catch(err) {
            console.log('loginWithUsernamePassword: failed ', err)
            debugger
    
            return null;
        }
    }
}

export default new LoginService();