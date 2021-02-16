import { LoginService } from '../services/login-service';

export class LoginController {
    private service: LoginService;

    public constructor() {
        this.service = new LoginService();
    }

    public async login(req: any, res: any, next: any) {
        const { username, password } = req.body;

        console.log('Login controller username', username);
        console.log('Login controller password', password);

        const user = await this.service.loginByUsernamePassword(username, password);

        if (user) {
            console.log(user);
            res.json({ ...user, status: "logged in" })
        } else {
            res.json({ err: `could not log in ${username}` })
        }
    }

    public async register(req: any, res: any, next: any) {
        const { username, password, name } = req.body;

        console.log('Login controller register username', username);
        console.log('Login controller register password', password);
        console.log('Login controller register name', name);

        const user = await this.service.registerWithUsernamePassword(
            username, password, name);

        if (user) {
            console.log(user);
            res.json({ ...user, status: "logged in" })
        } else {
            res.json({ err: `could not log in ${username}` })
        }
    }
}